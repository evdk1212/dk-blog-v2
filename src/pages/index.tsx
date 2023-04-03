import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { HeaderComponent, NavbarComponent, PostCardComponent } from '../components/index.js'
import { db } from '../firebase.js';
import type { DocumentData } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Script from 'next/script.js'

const inter = Inter({ subsets: ['latin'] })

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
      <section className={` ${styles['main2']} container `}>
        <div className="col-md-12 text-center">
          <h2 className="text-white">Featured Posts</h2>
          <p className="text-white"> Our top picks for you!</p>
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
          <h2 className="text-white">Latest Posts</h2>
          <p className="text-white">Explore our latest and greatest!</p>
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
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div>
                <ul className="nav justify-content-center">
                  <li className="nav-item"><a className={`${styles['nav-link']} nav-link`} >Home</a></li>
                  <li className="nav-item"><a className={`${styles['nav-link']} nav-link`} >About</a></li>
                  <li className="nav-item"><a className={`${styles['nav-link']} nav-link`} >Terms & Conditions</a></li>
                  <li className="nav-item"><a className={`${styles['nav-link']} nav-link`}>Contact</a></li>
                </ul>
              </div>
              <p className="mb-2 mt-2">Copyrights ©2023 Deepak</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
