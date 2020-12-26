import Link from 'next/link';
import styles from './Home.module.scss';
const Title = () => {
  return (
    <header className="mt-4 lg:mt-16 relative">
      <div className="relative">
        <h1
          className={[
            'text-6xl lg:text-7xl font-bold tracking-wide leading-tight lg:leading-none',
            styles.newPostTitle,
          ]}
        >
          menceritakan pulang yang hilang
        </h1>
        <p className="text-xs text-gray-400 mt-4 lg:mt-8 tracking-wider">
          Aku akan duduk menangisi apa yang terjadi setiap hari. Memandang
          fotomu yang tak pernah tak tersenyum di album ini. Memandang matamu
          yang tak pernah tak jernih setiap hari...
        </p>

        <Link href="/">
          <a className="md:hidden flex items-center justify-center rounded-full w-max py-2 mt-4 text-sm bg-opacity-20 transition-all font-medium tracking-wide text-gray-400 hover:text-gray-200">
            continue reading
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Title;
