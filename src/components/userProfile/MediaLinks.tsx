"use client";

import Link from "next/link";
import { useState } from "react";

interface LinksType {
  name: string;
  url: string;
  icon: React.ReactNode;
}

function MediaLinks() {
  const [links, setLinks] = useState<LinksType[]>([]);
  return (
    <section>
      <h1>Social media :</h1>
      {links?.map((link, index) => (
        <Link key={index} href={link.url}>
          {link.icon}
        </Link>
      ))}
      <Link href="/profile/userProfile/?show=true">Add link</Link>
    </section>
  );
}

export default MediaLinks;
