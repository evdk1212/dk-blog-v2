import Navbar from "./navbar/navbarComponent.tsx";
import Header from "./header/headerComponet.tsx";
import Head from "next/head.js";

const Layout = ({ children, title, description, ogTitle, ogDescription, ogImage,ogUrl }) => {
  return (
    <>
       <Head>
        <title>{title}</title>
        <meta property="title" content={title}/>
        <meta property="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="url" content={ogUrl} />
        <meta property="type" content="article" />
        <meta property="site_name" content={title} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
