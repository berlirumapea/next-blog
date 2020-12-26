import Image from 'next/image';

const FrontPostImage = () => {
  return (
    <div className="relative">
      <Image
        src="/images/forest.jpg"
        width={380}
        height={550}
        className="lg:rounded"
      />

      <a
        href="/"
        className="hidden lg:inline-block absolute bottom-0 left-0 py-6 px-4 text-xs bg-black uppercase tracking-wide"
      >
        Continue Reading
      </a>
    </div>
  );
};

export default FrontPostImage;
