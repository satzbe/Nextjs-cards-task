import { appProps } from '@/types'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Details = ({ datas }: appProps) => {
    const { download_url, author } = datas[0]
    const backSvg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>

    const router = useRouter()
    return (
        <>
            <div className='container h-20  underline text-gray-400 text-xl cursor-pointer flex justify-start items-center font-semibold' >
                <span className='ml-12  hover:text-black flex items-center' onClick={() => router.push('/')}><span className='mr-2'>{backSvg}</span> Back</span></div>
            <div className="container m-auto flex">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-7/12">
                        <img
                            src={download_url}
                            alt="Image"
                            className="w-full h-max-[550px] h-min-auto"
                        />
                    </div>
                    <div className="w-full lg:w-5/12 px-4 py-6">
                        <h2 className="text-2xl font-bold mb-4">{author}</h2>
                        <p className="text-lg text-gray-600 font-mono">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            consectetur, est non auctor consectetur, ligula mi ullamcorper
                            massa, eu faucibus libero tortor at sem. Integer iaculis tristique
                            eros, sit amet pulvinar velit ultricies a. Suspendisse luctus
                            tortor lacus, eu ullamcorper lectus blandit non.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Details

// This gets called on every request
export async function getServerSideProps(ctx: any) {
    // Fetch data from external API
    const datas: appProps[] = [];
    await axios.get(`https://picsum.photos/id/${ctx.query.id}/info`).then(({ data }) => {
        datas.push(data)
    }).catch(err => console.log('err', err))

    // Pass data to the page via props
    return { props: { datas } };
}