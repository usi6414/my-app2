export type Product = {
  id: string
  name: string
  description: string
  likes: number
}

const products: Product[] = [
  {
    id: "1",
    name: "머그컵",
    description: "따뜻한 음료를 즐기기 위한 머그컵",
    likes: 3,
  },
  {
    id: "2",
    name: "테이블 램프",
    description: "따뜻한 조명을 제공하는 테이블 램프",
    likes: 10,
  },
  {
    id: "3",
    name: "책상",
    description: "편안한 작업 환경을 위한 책상",
    likes: 5,
  },
  { id: "4", name: "의자", description: "편안한 앉음을 위한 의자", likes: 7 },
  {
    id: "5",
    name: "테이블",
    description: "책과 소품을 정리할 수 있는 책장",
    likes: 2,
  },
  { id: "6", name: "휴대폰", description: "아이폰 17프로", likes: 4 },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export async function getProducts(): Promise<Product[]> {
  await delay(700)
  return products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400)
  return products.find((p) => p.id === id)
}

export async function likeProduct(lid: string): Promise<number> {
  await delay(300)
  const product = products.find((p) => p.id === lid)
  if(!product) return 0
  product.likes += 1
  return product.likes
}