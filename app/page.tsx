import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Typewryter</h1>
      <p>An interactive novella platform where readers shape the story.</p>
      <p>
        <Link href="/stories/fantasy">Fantasy</Link> | 
        <Link href="/stories/crime">Crime</Link> | 
        <Link href="/stories/romance">Romance</Link>
      </p>
    </div>
  );
}
