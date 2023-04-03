import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase.js'
import { DocumentData } from 'firebase/firestore';
import { PostCardComponent } from '@/components/index.js';
import styles from '../../styles/Home.module.css'
import Layout from '@/components/layout.js';

const CategoryPage = () => {
    const [categoryPosts, setCategoryPosts] = useState<DocumentData[]>([]);
    const categoryRouter = useRouter();
    const { id } = categoryRouter.query;
    const filteredCategoryPosts = id ? categoryPosts.filter(post => post.category.categoryId == id) : categoryPosts;
    
    const useFetchCategoryPostsEffect = () => {
        useEffect(() => {
            const fetchData = async () => {
                const data = await db.collection('posts').get();
                const posts = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCategoryPosts(posts);
            };
    
            fetchData();
    
        }, []);
    }

    useFetchCategoryPostsEffect();

    const getCategory = (post: DocumentData) => {
        return (
            <div className="p-5">
                <div className="container" >
                    <h1 className="text-white">{post.category.category}</h1>
                    <p className="text-white">Discover everything you need to know about { post.category.category }</p>
                </div>
            </div>
        );
    };

    const getContent = () => {
        if (filteredCategoryPosts.length === 0) {
            return (
                <div className="container mt-5 mb-5">
                    <h2>No content available for this category</h2>
                </div>
            );
        }

        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    {filteredCategoryPosts.map(post => (
                        <div className="col-md-3 mb-3" key={post.id}>
                            <PostCardComponent posts={[post]}></PostCardComponent>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const post = filteredCategoryPosts[0];

    return (
        <Layout
            title={post?.category?.category}
            description={`Discover everything you need to know about ${post?.category?.category}`}
            ogTitle={post?.category?.category}
            ogDescription={`Discover everything you need to know about ${post?.category?.category}`}
            ogImage={undefined}
            ogUrl={`https://blog.iam-deepak.me/category/${post?.category?.categoryId}`}
        >
            <div className={` ${styles['main2']} `}>
                {filteredCategoryPosts.length > 0 && getCategory(post)}
                {getContent()}
            </div>
        </Layout>
    );
}

export default CategoryPage;
