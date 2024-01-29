import Navbar from '@/componnents/navbar/Navbar';
import styles from './homepage.module.css';
import Link from 'next/link';
import Footer from '@/componnents/footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}
