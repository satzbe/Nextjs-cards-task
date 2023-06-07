import Card from '@/components/card'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { appProps } from '../types'
import Header from '@/components/Header'

export default function Home({ datas }: appProps) {
  return (
    <div>
      <Head>
        <title>Dynamic Cards</title>
      </Head>
      <Header />
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {datas.map(card => (
              <Link key={card.id} href={`/details/${card.id}`}>
                <Card id={card.id} url={card.download_url} name={card.author} />
              </Link>
            ))}
          </div>
        </div>
      </div>
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