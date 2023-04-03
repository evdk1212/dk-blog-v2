import Navbar from "./navbar/navbarComponent.tsx";
import Header from "./header/headerComponet.tsx";
import Head from "next/head.js";

const Layout = ({ children, title, description, ogTitle, ogDescription, ogImage,ogUrl }) => {
  return (
    <>
       <Head>
        <title>{title || 'Deepak - Blog'}</title>
        <meta property="title" content={title || 'Deepak - Blog'}/>
        <meta property="description" content={description || 'Find interesting daily blog posts by Deepak'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="url" content={ogUrl || 'https://blog.iam-deepak.me'} />
        <meta property="type" content="article" />
        <meta property="site_name" content="Deepak - Blog" />
        <meta property="og:title" content={ogTitle || title || 'Deepak - Blog'} />
        <meta property="og:description" content={ogDescription || description || 'Find interesting daily blog posts by Deepak'} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
