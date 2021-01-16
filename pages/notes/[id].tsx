// pages/[id].jsx
/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'

const Note = ({ note }) => {

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export const getServerSideProps = async ({ res, params}) => {
  const response = await fetch(`${process.env.API_URL}/notes/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, {
      Location: '/notes'
    });
    res.end();

    return {
      props: {}
    };
  }

  const { data } = await response.json();

  return {
    props: {
      note: data
    }
  }
}

export default Note;