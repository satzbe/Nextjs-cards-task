import { appProps } from '@/types'
import { GetServerSideProps } from 'next'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const index = ({ datas }: appProps) => {
    const { download_url, author } = datas[0]
    const backSvg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>

    const router = useRouter()
    return (
        <>
            <div className='fixed underline text-gray-400 text-xl top-6 left-3 cursor-pointer flex justify-center items-center font-semibold' onClick={() => router.push('/')}>
                <span className='mr-2'>{backSvg}</span> Back</div>
            <div className="mt-6 text-center">
                <p className="text-2xl text-red-900">{author}</p>
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <img
                    src={download_url}
                    alt="Large Image"
                    className="m-auto w-[800px]"
                />

            </div>
        </>

    )
}

export default index

// This gets called on every request
export async function getServerSideProps(ctx: any) {
    // Fetch data from external API
    console.log('ctx', ctx.query?.id)
    const datas: appProps[] = [];
    await axios.get(`https://picsum.photos/id/${ctx.query.id}/info`).then(({ data }) => {
        datas.push(data)
    }).catch(err => console.log('err', err))

    // Pass data to the page via props
    return { props: { datas } };
}