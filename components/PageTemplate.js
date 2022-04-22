import Head from 'next/head'
import Layout from '@components/Layout'

function PageTemplate({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="/static/favicon.ico" rel="shortcut icon" />
      </Head>
      <Layout>
        {children}
      </Layout>
    </>
  )
}

export default PageTemplate