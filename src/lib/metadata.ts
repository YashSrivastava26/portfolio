import { Metadata } from "next";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export function constructMetaData({
  title = "Yash Srivastava",
  description = "From sleek interfaces to impactful solutions, where design meets functionality. Discover a diverse range of work that defines my passion for excellence.",
  image = "https://cdn.jsdelivr.net/gh/yashsrivastava2603/cdn/portfolio-thumbnail.png",
  icons = [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
  manifest = "/manifest.json",
  noIndex = true,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: Icon[];
  noIndex?: boolean;
  keywords?: string[];
  manifest?: string;
} = {}): Metadata {
  return {
    title,
    description,
    manifest,
    openGraph: {
      title,
      description: description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://yash-srivastava.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
