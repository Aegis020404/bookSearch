

export interface IVolumeInfo {
    allowAnonLogging: boolean
    authors: Array<string>
    canonicalVolumeLink: string
    categories: Array<string>
    contentVersion: string
    description: string
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
    infoLink: string
    language: string
    maturityRating: string
    pageCount: number
    previewLink: string
    printType: string
    publishedDate: string
    publisher: string
    readingModes: { text: boolean, image: boolean }
    title: string
}

export interface IBook {
    // accessInfo: Object
    // etag: string
    id: string
    // kind: string
    // saleInfo: Object
    // searchInfo: Object
    // selfLink: string
    volumeInfo: IVolumeInfo

}

export interface ServerResponse<T> {
    totalItems: number
    // kind: string
    categories: string
    order: string
    page: number
    question:string
    items: T[]
}