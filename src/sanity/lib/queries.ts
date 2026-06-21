import { client } from "./client";

export async function getStats() {
  return client.fetch(`*[_type == "stat"] | order(order asc)`);
}

export async function getPrograms() {
  return client.fetch(`*[_type == "program"] | order(order asc)`);
}

export async function getTeam() {
  return client.fetch(`*[_type == "teamMember"] | order(order asc)`);
}

export async function getPosts(limit = 10) {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$limit] { title, slug, publishedAt, tag, excerpt, mainImage }`,
    { limit }
  );
}

export async function getStories() {
  return client.fetch(`*[_type == "story"]`);
}

export async function getPartners() {
  return client.fetch(`*[_type == "partner"] | order(order asc)`);
}
