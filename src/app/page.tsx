import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1707980945560-41f6a27777a7?q=80&w=3087"
          alt="Next.js Logo"
          width={400}
          height={400}
          priority
        />
      </div>
    </main>
  );
}
