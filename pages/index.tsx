/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'

const Page = ({ content: { title } }) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{title}</h1>
    </div>
  </div> 
)

export const getStaticProps = () => {
  // get data from CMS or sth

  return {
    props: {
      content: {
        title: 'Have a look at my note app'
      }
    }
  }
}

export default Page;