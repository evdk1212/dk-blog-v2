import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavbarComponent } from "@/components";
import Layout from "../components/layout.js";

type MyAppProps = AppProps & {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?:string;
};

export default function MyApp({
  Component,
  pageProps,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}: MyAppProps) {
  return (
    <Layout
      title={title}
      description={description}
      ogTitle={ogTitle}
      ogDescription={ogDescription}
      ogImage={ogImage}
      ogUrl={ogUrl}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
