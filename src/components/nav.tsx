/** @jsxRuntime classic */
/** @jsx jsx */ // This is to tell babel to use the jsx compiler from theme-ui, instead of using the React compiler,
// which is the default

import Link from 'next/link'
import { jsx } from 'theme-ui'

const Nav = () => {
  console.log(process.env);
  return (
  // sx is equal to writing css={{}} with added access to the theme and the ability to use shortcuts
  // (e.g. bg for background-color)
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
      </Link>

      <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
      </Link>

      <a href={process.env.HELP_APP_URL} target="_blank" sx={{
          color: 'text',
          fontSize: 3,
          cursor: 'pointer'
        }}>Help</a>

    </nav>
  </header>
)
      }

export default Nav