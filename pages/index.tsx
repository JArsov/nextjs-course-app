import Link from 'next/link';
import React from 'react';

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
)

export default Page;