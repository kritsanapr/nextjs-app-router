"use client";

import { CacheProvider } from "@emotion/react";
import { MantineProvider, useEmotionCache } from "@mantine/core";
import { Inter, Roboto_Mono, Sarabun } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: `$Object.values(cache.inserted).join("")`,
      }}
    ></style>
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: sarabun.style.fontFamily,
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
