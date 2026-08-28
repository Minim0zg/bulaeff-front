export interface ProductInfo {
    id: number
    brand: string
    name: string
    price: number
    size: string
    condition: string
    images: string[]
}
export const productInfo: ProductInfo = {
    id: 8,
    brand: 'Stone Island',
    name: 'Мужская куртка',
    price: 1500,
    size: 'L',
    condition: 'Отличное состояние',
    images: [
        '/src/assets/images/product-id01.png',
        '/src/assets/images/product-id01.png',
        '/src/assets/images/product-id01.png',
    ],
}
