import PopularWritings from '@/components/Home/PopularWritings';
import Title from '@/components/Home/Title';
import WhatsNew from '@/components/Home/WhatsNew';
import FrontPostImage from '@/components/Home/FrontPostImage';
import styles from '@/components/Home/Home.module.scss';

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
      <div className="lg:w-1/3 z-10 lg:pr-12 lg:self-center">
        <WhatsNew />
        <Title />
      </div>
      <div className={['lg:w-1/3 lg:relative', styles.frontImage]}>
        <FrontPostImage />
      </div>
      <div className="lg:w-1/3 lg:pl-10 pt-24 pb-32 lg:pb-0 lg:pt-16 z-10 lg:z-0">
        <PopularWritings />
      </div>
    </section>
  );
}
