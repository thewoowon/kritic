"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { RecoilRoot } from "recoil";
import { Footer, Header } from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { NavermapsProvider as NaverMapsProvider } from "react-naver-maps";
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        retry: 0,
      },
    },
  });
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION}
        />
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta property="og:type" content={process.env.NEXT_PUBLIC_OG_TYPE} />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_OG_TITLE} />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_OG_DESCRIPTION}
        />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_OG_IMAGE} />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_OG_SITE_NAME}
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_OG_URL} />
        <meta
          property="og:locale"
          content={process.env.NEXT_PUBLIC_OG_LOCALE}
        />
      </head>
      <body className={montserrat.className}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <NaverMapsProvider
              ncpClientId={process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || ""}
            >
              <Header />
              <div className="min-h-screen flex flex-col mx-auto">
                {children}
              </div>
              <Footer />
            </NaverMapsProvider>
          </RecoilRoot>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
