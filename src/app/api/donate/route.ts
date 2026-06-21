import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const { amount, frequency } = await req.json();

  if (!amount || typeof amount !== "number" || amount < 1) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-05-27.dahlia" });
  const mode = frequency === "monthly" ? "subscription" : "payment";

  const priceData =
    mode === "payment"
      ? {
          currency: "usd" as const,
          unit_amount: amount * 100,
          product_data: {
            name: "Donation to Lifeline Gedo",
            description: "Supporting humanitarian programs in Somalia's Gedo region",
          },
        }
      : {
          currency: "usd" as const,
          unit_amount: amount * 100,
          recurring: { interval: "month" as const },
          product_data: {
            name: "Monthly Donation — Lifeline Gedo",
            description: "Recurring monthly support for humanitarian programs in Gedo",
          },
        };

  const session = await stripe.checkout.sessions.create({
    mode,
    currency: "usd",
    line_items: [{ price_data: priceData, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate/thank-you`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate`,
  });

  return NextResponse.json({ url: session.url });
}
