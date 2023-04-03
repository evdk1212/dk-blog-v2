import Navbar from "./navbar/navbarComponent.tsx";
import Header from "./header/headerComponet.tsx";
import Head from "next/head.js";

const Layout = ({ children, title, description, ogTitle, ogDescription, ogImage, postId }) => {
  return (
    <>
       <Head>
        <title>{title==null? 'Deepak - Blog':title}</title>
        <meta property="title" content={title==null?  'Deepak - Blog':title}/>
        <meta property="description" content={description==null?  'Find interesting daily blog posts by Deepak':description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="url" content={postId==null? 'https://blog.iam-deepak.me':`https://blog.iam-deepak.me/post/${postId}`} />
        <meta property="type" content="article" />
        <meta property="site_name" content={title==null?  'Deepak - Blog':title} />
        <meta property="og:title" content={ogTitle==null? 'Deepak - Blog':title} />
        <meta property="og:description" content={ogDescription ==null? 'Find interesting daily blog posts by Deepak':description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
