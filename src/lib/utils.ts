import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetaData({
  title = "Yash Srivastava",
  description = "Immerse yourself in a showcase of exceptional projects, where design meets functionality. From sleek interfaces to impactful solutions, discover a diverse range of work that defines my passion for excellence. Join me on a journey of visual storytelling and craftsmanship. Welcome to the portfolio of Yash Srivastava – where every project tells a unique story of innovation and dedication.",
  og_description = "From sleek interfaces to impactful solutions, discover a diverse range of work that defines my passion for excellence. Discover a diverse range of work that defines my passion for excellence.",
  twitter_description = "From sleek interfaces to impactful solutions, discover a diverse range of work that defines my passion for excellence. Discover a diverse range of work that defines my passion for excellence.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  og_description?: string;
  twitter_description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description: og_description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitter_description,
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
