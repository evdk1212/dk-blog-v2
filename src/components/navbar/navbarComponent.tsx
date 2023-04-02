import React, { useEffect, useState } from 'react';
import styles from './navbarStyle.module.css';
import { db } from '../../../src/firebase.js';
import type { DocumentData } from 'firebase/firestore';
import Link from 'next/link';

const NavbarComponent = () => {
  const [categories, setCategories] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection('categories').get();
      const categories = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(categories);
    };
    fetchData();
  }, []);

  return (
    <nav className={` ${styles['nav-cus']} navbar navbar-expand-lg fixed-top`}>
      <div className="navbar-collapse justify-content-center" style={{ overflowX: 'auto' }}>
        <ul className={`${styles['navbar-nav']} navbar-nav d-flex flex-row`} style={{ height: '50px', fontSize: '18px' }}>
          {categories.map(category => (
            <li className="nav-item ml-3" key={category.id}>
              <Link href={`/category/${category.id}`} className={`${styles['nav-link']} nav-link`}>{category.category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
