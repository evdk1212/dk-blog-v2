import React from 'react'
import styles from './headerStyle.module.css';
import Link from 'next/link';
const headerComponet = () => {
  return (
    <>
      <Link href={'/'}>
        <header className={`${styles['header-cus']} navbar navbar-expand-lg fixed-top   shadow-effect   `}>
          <div className="container col-md-5  justify-content-center">
            <div className="site-logo text-white">Deepak</div>
          </div>
        </header>
      </Link>
    </>
  )
}

export default headerComponet