import React, { useEffect, useState } from 'react'
import styles  from './postcardStyles.module.css'
import { db } from '../../../src/firebase.js';
import type { DocumentData } from 'firebase/firestore';
import Link from 'next/link';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Image from 'next/image';
type PostCardProps = {
    posts: DocumentData[];
  };
const postCard = ({ posts }: PostCardProps) => {
  const handlePostClick = async (postId: string) => {
    // Increment the views counter in the Firebase database
    await db.collection('posts').doc(postId).update({
      views: firebase.firestore.FieldValue.increment(1)
    });

    // Navigate to the post details page
    window.location.href = `/post/${postId}`;
  };

   
  return (
    <>
    {posts.map(post=>(
      
      
        <div className={`${styles['card']} card shadow-effect card-custom`} key={post.id} onClick={() => handlePostClick(post.id)} >
            <Image src={post.postImgPath} width={600} height={400} className={`${styles['card-img']} card-img-top` } alt="post-image" />
            <div className="card-body">
                <small className="bg-dark text-danger text-center">{post.category.category}</small>
                {post.isFeatured && <small className="bg-dark text-success text-center ms-3" > Featured</small>}
                <small className="bg-dark text-info text-center ms-3"> Views - {post.views}</small>
                <h5 className="mt-1">{post.title}</h5>
                <p>{post.excerpt.slice(0,100)}</p>
                <small className="bg-dark text-warning text-center ms-3"> LAST UPDATED - {post.createdAt}</small>
            </div>
        </div>
      
      
    ))}
    </>
  )
}

export default postCard