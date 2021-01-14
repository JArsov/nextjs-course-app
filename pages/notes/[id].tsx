import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Note = () => {
  const router = useRouter();
  // notes/1/2/3/4
  // params is an array of all route params after /notes (['1','2','3','4'] here)
  const { id } = router.query;

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  )
}

export default Note;