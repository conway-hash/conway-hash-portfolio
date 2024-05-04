import Head from 'next/head'
import App from '../components/0app'

export default function Main() {
  return (
    <>
      <Head>
        <title>$CONWAY_HASH</title>
        <meta name="description" content="Portfolio site of Tomáš Bokor (Conway-Hash). This site contains informations about me, projects that i created, experience with programming languages, frameworks, tools, and how to contact me." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App></App>
    </>
  )
}
