import Link from "next/link";
import { db } from "~/server/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
    return (
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
            {/* <div>{image.name}</div> */}
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="">
      <SignedOut>
        <div className="text-center">Please sign in!</div>
      </SignedOut>
      <SignedIn>
        {" "}
        <Images />
      </SignedIn>
    </main>
  );
}
