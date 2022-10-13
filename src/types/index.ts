export type INewsItem = {
    by: string
    descendants: number
    id: number
    kids: number[]
    score: number
    time: number
    title: string
    type: string
    url: string
}

export interface IFooterData {
    text: string,
    link: string
}