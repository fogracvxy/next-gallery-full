import Link from "next/link";
import { db } from "~/server/db";
const mockData = [
  "https://utfs.io/f/a91785fa-5620-484f-be4f-d177d66c64f2-1em.webp",
  "https://utfs.io/f/e5762bc2-5863-4782-a0b2-728448faf2a0-1el.webp",
  "https://utfs.io/f/f0aba8dd-345b-4221-9dba-cee1c2a2be4c-1b1.webp",
  "https://utfs.io/f/a7062e80-c487-4361-a2f1-64f52337a806-1dp.webp",
];
export const dynamic = "force-dynamic";
const mockImages = mockData.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
