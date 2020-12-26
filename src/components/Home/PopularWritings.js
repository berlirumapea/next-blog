import ArrowRight from '@/components/Svg/right-arrow.svg';
import Link from 'next/link';
import styles from './Home.module.scss';

const Posts = [
  {
    id: 1,
    title: 'sabtu pagi',
    desc: 'sabtu pagi aku kelelahan untuk bangun.',
    url: '/',
  },
  {
    id: 2,
    title: 'tiap malam ketika kamu tertidur, aku menelanjangimu',
    desc: 'kamu tahu perihal aku yang menelanjangimu ketika kamu tertidur?',
    url: '/',
  },
  {
    id: 3,
    title: 'di sudut ranjang',
    desc: 'bbu ingin aku cepat pulang. menurut ibu, aku sedang berjuang.',
    url: '/',
  },
];

function PopularWritings() {
  return (
    <>
      <h3 className="uppercase text-xs tracking-widest text-gray-400 mb-8">
        Popular Writings
      </h3>
      <ul className={styles.postsList}>
        {Posts.map((post) => (
          <li className="" key={post.id}>
            <Link href={post.url}>
              <a className="flex items-center justify-between">
                <div className="flex-1 text-xl tracking-wider ">
                  {post.title}
                  <p className="text-xs text-gray-400 mt-2">{post.desc}</p>
                </div>
                <div className="w-16 pl-2 flex justify-end">
                  <ArrowRight className="text-white fill-current w-2/5" />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PopularWritings;
