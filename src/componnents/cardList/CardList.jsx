import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))} */}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
