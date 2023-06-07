export interface appProps {
    datas: {
        id: string
        url: string
        author: string
        download_url: string
        height: number
        width: number
    }[]
}

export interface cardProps {
    id: string
    url: string
    name: string
}