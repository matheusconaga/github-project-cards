import satori from "satori";

import fs from "fs";
import path from "path";

import { NextRequest } from "next/server";

import { Card } from "@/components/Card/Card";

import { getRepo } from "@/core/github/get-repo";

import { parseConfig } from "@/core/config/parse-config";

import { resolveTheme } from "@/core/themes/resolve-theme";

import { getLocale } from "@/core/locale";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  // CONFIG
  const config = parseConfig(url);

  // REPOSITORY
  const repoName =
    url.searchParams.get("repo") ??
    "matheusconaga/projeto_patrimoniario";

  const repo = await getRepo(repoName);

  // LOCALE
  const locale = getLocale(config.locale);

  // THEME
  const theme = resolveTheme(config.theme);

  // IMAGE
  const imageUrl =
    config.image ??
    `https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVmbHV4cDRjNmN2bjFjcmx6OWY2eGVsMnZ1a3pyeXZlcGZybWZxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PIBuZutkhuKqV09TEf/giphy.gif`;

  let imageBase64 = "";

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error("Invalid image");
    }

    const imageBuffer = await response.arrayBuffer();

    imageBase64 = `data:image/png;base64,${Buffer.from(
      imageBuffer
    ).toString("base64")}`;
  } catch {
    imageBase64 = "";
  }

  // FONT
  const fontPath = path.join(
    process.cwd(),
    "public/fonts/Inter.ttf"
  );

  const fontData = fs.readFileSync(fontPath);

  // RENDER
  const svg = await satori(
    Card({
      title: repo.name,

      description:
        config.description ??
        repo.description ??
        "",

      stars: repo.stargazers_count,

      forks: repo.forks_count,

      image: imageBase64,

      fullname: repo.full_name,

      theme,

      locale: config.locale,

      techs:
        config.techs?.length
          ? config.techs.slice(0, 3)
          : [
            repo.language ?? "TypeScript",
          ],

      showStars:
        config.showStars ?? true,

      showForks:
        config.showForks ?? true,

      labels: {
        featured:
          config.labels?.featured ??
          locale.featured,

        view:
          config.labels?.viewOnGithub ??
          locale.view,
      },
    }),
    {
      width: 850,

      height: 360,

      fonts: [
        {
          name: "Inter",

          data: fontData,

          weight: 700,

          style: "normal",
        },
      ],
    }
  );

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",

      "Cache-Control":
        "public, max-age=3600, must-revalidate",
    },
  });
}