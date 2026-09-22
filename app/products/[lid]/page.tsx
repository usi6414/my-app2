import {LikeButton} from '@/components/LikeButton'
import { getProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = { params: Promise<{ lid: string }> }

export default async function ProductDetailPage({params}: Props) {
  const { lid } = await params
  const product = await getProduct(lid)

  if (!product) {
    notFound()
  }


  return (
    <div className='mx-auto flex max-w-2xl flex-1 flex-col gap-6 px-8 py-16'>
      <Link href="/products">목록으로 </Link>
      <h1 className='text-3xl font-bold'>{product.name}</h1>
      <p className='text-muted-foreground'>{product.description}</p>
      <LikeButton lid={product.id} initialLikes={product.likes} />
    </div>
  )
}
