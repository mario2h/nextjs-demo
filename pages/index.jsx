import Head from 'next/head'
import Container from '../components/Container'
import fetch from 'isomorphic-fetch'

const HomePage = () => (
  <Container>
    <Head>
      <title>Nextjs - Home</title>
    </Head>
    <h1>Bienvenido!!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat possimus
      voluptatibus nisi, quae architecto veritatis, dicta ad totam velit porro
      dolorum, et cum libero quisquam aspernatur quaerat omnis? Facilis ad
      quaerat officia incidunt ipsa! Totam dolores est quam voluptatum minus
      culpa, explicabo obcaecati cum ipsum? Tempore exercitationem ducimus
      tempora neque.
    </p>
  </Container>
)

HomePage.getInitialProps = (ctx) => {
  fetch()
}

export default HomePage
