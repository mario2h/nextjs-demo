import Head from 'next/head'
import Navigation from './Nav'

const Container = (props) => (
  <div>
    <Head>
      <title>NextJS Demo</title>
    </Head>
    <Navigation />
    <div>{props.children}</div>
  </div>
)

export default Container
