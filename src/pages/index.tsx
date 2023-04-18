

import styles from '@/styles/Home.module.css'

import { PostCardComponent } from '../components/index.js'
import { db } from '../firebase.js';
import type { DocumentData } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

import Layout from '@/components/layout.js'



export default function Home() {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const featuredPosts = posts.filter(post => post.isFeatured);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection('posts').get();
      const posts = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(posts);
    };
    fetchData();
  }, []);
  return (
    <>
    <Layout  title={undefined} description={undefined} ogTitle={undefined} ogDescription={undefined} ogImage={undefined} postId={undefined}>
    <section className={` ${styles['main2']} container `}>
        <div className="col-md-12 text-center">
          <h2 className={`${styles['cus-text']} text-white mt-4`}>Featured Posts</h2>
          <p className={`${styles['cus-text']} text-white`}> Our top picks for you!</p>
        </div>
        <div className="row">
          {featuredPosts.map(post => (
            <div className="col-md-3 mt-3" key={post.id}>
              <PostCardComponent posts={[post]} ></PostCardComponent>
            </div>
          ))}

        </div>
      </section>

      <section className="container mt-5">
        <div className="col-md-12 text-center">
          <h2 className={`${styles['cus-text']} text-white`}>Latest Posts</h2>
          <p className={`${styles['cus-text']} text-white`}>Explore our latest and greatest!</p>
        </div>
        <div className="row">
          {posts.map(post => (
            <div className="col-md-3 mt-3" key={post.id}>
              <PostCardComponent posts={[post]} ></PostCardComponent>
            </div>
          ))}
        </div>
      </section>


      <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <div>
                <ul className="nav justify-content-center">
                  <li className="nav-item"><a className={`${styles['nav-link']} nav-link`} >Home</a></li>
                  <li className="nav-item"><a className={`${styles['nav-link']} nav-link`} >About</a></li>
                  <li className="nav-item"><a className={`${styles['nav-link']} nav-link`} >Terms & Conditions</a></li>
                  <li className="nav-item"><a  href='https://iam-deepak.me' className={`${styles['nav-link']} nav-link`}>Contact</a></li>
                </ul>
              </div>
              <p className="mb-2 mt-2">Copyrights ©2023 Deepak</p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
      
    </>
  )
}
