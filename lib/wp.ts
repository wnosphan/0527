// lib/wp.ts
const SITE = process.env.NEXT_PUBLIC_WPCOM_SITE!;
const REVALIDATE = Number(process.env.NEXT_PUBLIC_WP_REVALIDATE || 600);

export type WPPost = {
  ID: number;
  URL: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  featured_image?: string | null;
};

async function wpFetch<T>(
  path: string,
  params: Record<string, string | number | boolean> = {}
) {
  const qs = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)])
  );
  const url = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}${path}?${qs}`;
  const res = await fetch(url, { next: { revalidate: REVALIDATE } });
  if (!res.ok) throw new Error(`WP API error ${res.status} ${url}`);
  return res.json() as Promise<T>;
}

// Lấy bài viết mới nhất
export async function getLatestPosts(number = 6): Promise<WPPost[]> {
  const data = await wpFetch<{ posts: WPPost[] }>('/posts/', {
    number,
    order_by: 'date',
  });
  return data.posts;
}

// Lấy bài viết theo section
export async function getPostsBySection(section: any): Promise<WPPost[]> {
  try {
    if (section.key === "featured") {
      const data = await wpFetch<{ posts: WPPost[] }>("/posts/", {
        number: section.number,
        sticky: true,
      });
      return data.posts;
    }

    if (section.key === "latest") {
      const data = await wpFetch<{ posts: WPPost[] }>("/posts/", {
        number: section.number,
        order_by: "date",
      });
      return data.posts;
    }

    if (section.key === "category") {
      const data = await wpFetch<{ posts: WPPost[] }>("/posts/", {
        number: section.number,
        category: section.slug,
      });
      return data.posts;
    }

    if (section.key === "tag") {
      const data = await wpFetch<{ posts: WPPost[] }>("/posts/", {
        number: section.number,
        tag: section.slug,
      });
      return data.posts;
    }

    return [];
  } catch (error) {
    console.error(`Error fetching posts for section ${section.key}:`, error);
    return [];
  }
}
