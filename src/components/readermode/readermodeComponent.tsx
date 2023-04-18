import React from 'react';
import styles from './readermode.module.css';

type ReaderModeProps = {
  content: string;
  onClose: () => void;
};

const ReaderMode: React.FC<ReaderModeProps> = ({ content, onClose }) => {
  return (
    <div className={styles['readerMode']}>
      <div className='pt-1 pl-1 pr-1 pb-1'>
      <div className={`${styles['readerModeContent']}`} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {/* <button className={styles.readerModeCloseButton} onClick={onClose}>
        Close
      </button> */}
    </div>
  );
};

export default ReaderMode;
