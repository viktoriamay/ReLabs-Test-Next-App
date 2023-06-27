import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>Posts</h1>
      <div>
        <Link href={'blog/1'}>Post1</Link>
      </div>
      <div>
        <Link href={'blog/2'}>Post2</Link>
      </div>
      <div>
        <Link href={'blog/3'}>Post3</Link>
      </div>
    </>
  );
}
