import Card from '@/components/card'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { appProps } from '../types'

export default function Home({ datas }: appProps) {
  console.log('datas', datas);

  return (
    <div>
      <Head>
        <title>Dynamic Cards</title>
      </Head>
      <Link href='/details'>
        <Card />
      </Link>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const datas: appProps[] = [];
  await axios.get('https://picsum.photos/v2/list').then(({ data }) => {
    datas.push(...data)
  }).catch(err => console.log('err', err))

  // Pass data to the page via props
  return { props: { datas } };
}