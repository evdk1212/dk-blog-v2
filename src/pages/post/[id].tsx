// pages/posts/[id].tsx

import { CommentFormComponet, CommentListComponent, PostCardComponent, ReaderModeComponent } from '@/components/index.js';
import { db } from '../../firebase.js';
import { DocumentData } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Layout from '@/components/layout.js';
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const singlePost = posts.filter(post => post.id == id);
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [readerModeVisible, setReaderModeVisible] = useState(false);

  const handleToggleReaderMode = () => {
    setReaderModeVisible(!readerModeVisible);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection('posts')
        .doc(id?.toString())
        .collection('comments')
        .get();
      const comments = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(comments);
    };
    if (id) {
      fetchData();
    }
  }, [id]);
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
      

      {
        singlePost.map(post => (

          <Layout key={post.id} title={post.title} description={post.excerpt} ogTitle={post.title} ogDescription={post.excerpt} ogImage={post.postImgPath} postId={post.id}>
            <div key={post.id} className={`container ${styles['main2']}`}>
            <button onClick={handleToggleReaderMode} className='btn-theme mt-3 text-black mb-3' style={{borderRadius: '10%'}}>
              {readerModeVisible ? "Close Reader Mode" : "Reader Mode"}
            </button>
            {readerModeVisible && (
              <ReaderModeComponent content={post.content} onClose={handleToggleReaderMode} />
            )}
            <div className={` ${readerModeVisible ? styles['hidden'] : ''} row`}>
              <div className="col-md-9 mt-4">
                <div className="card shadow-effect card-custom-post">
                  <Image src={post.postImgPath} width={600} height={400} alt="single-post-image" className="card-img-top img-fluid" />
                  <div className="card-body">
                    <small className="bg-dark text-danger text-center">{post.category.category} </small>
                    {post.isFeatured && <small className="bg-dark text-success text-center ms-3" > Featured</small>}
                    <small className="bg-dark text-info text-center ms-3"> Views - {post.views}</small>
                    <small className="bg-dark text-warning text-center ms-3"> LAST UPDATED - {post.createdAt}</small>
                    <h1 className="mt-3 mb-3">{post.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: post.content }}></p>

                  </div>
                </div>
                <CommentFormComponet postId={id}></CommentFormComponet>
                <div>
                  <div className="card mt-5 mb-5 pb-5 shadow-effect card-custom">
                    <div className="card-body card-body-custom">
                      <h4 className="mt-3 mb-3">Comments </h4>

                      {comments.map(comment => (
                        <div key={comment.id}>
                          <CommentListComponent comments={[comment]}></CommentListComponent>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-4">
                <div className="mb-3">
                  {posts.map(post => (

                    <div key={post.id} className="mb-3">
                      <PostCardComponent posts={[post]} ></PostCardComponent>
                    </div>

                  ))}
                </div>

              </div>
            </div>
          </div>
          </Layout>
        ))
      }
    </>
  );
};

export default Post;
