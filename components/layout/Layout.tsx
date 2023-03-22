import Footer from './FooterTCH';
import Ventage from './AbsolutVentage';
import HeadNav from './HeadNav';
import type { Base } from '@/data/DataTypes';

interface context {
  children?: JSX.Element | JSX.Element[];
  listData?: Base[];
}
export default function Layout({ children, listData = [] }: context) {
  return (
    <>
      <HeadNav listData={listData} />
      {children}
      <Ventage />
      <Footer />
    </>
  );
}
