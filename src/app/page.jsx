import Link from 'next/link';
import styles from './homepage.module.css';
import Featured from '@/componnents/featured/Featured';
import CategoryList from '@/componnents/categoryList/CategoryList';
import CardList from '@/componnents/cardList/CardList';
import Menu from '@/componnents/Menu/Menu';

export default function Home({ searchParams }) {
  // const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
                