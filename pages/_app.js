import 'styles/globals.css'
import Layout from 'components/layout'

function MyApp ({ Component, PageProps }) {
  return (
  <Layout>
    <Component {...PageProps} />
  </Layout>
  )
}

export default MyApp