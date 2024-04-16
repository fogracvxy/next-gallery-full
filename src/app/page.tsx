import Link from "next/link";
import { db } from "~/server/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await getMyImages();
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Image
              src={image.url}
              width={480}
              height={480}
              alt={image.name}
              style={{ objectFit: "contain" }}
            />
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
