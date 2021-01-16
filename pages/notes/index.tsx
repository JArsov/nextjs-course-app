// pages/notes/index.jsx
/** @jsxRuntime classic */
/** @jsx jsx */

import { INote } from '../../src/data/data'
import Link from 'next/link'
import { jsx } from 'theme-ui'

const Note = ({ notes } : { notes: INote[]}) => {

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div key={note.id} sx={{width: '33%', p: 2}}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/notes`);
  const { data } = await res.json() as { data: INote[] };

  return {
    props: {
      notes: data
    }
  }
}

export default Note;