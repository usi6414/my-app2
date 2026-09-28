import { Counter } from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>웹서버보안프로그래밍 - 유시우 </h1>
      <Counter />

      <br />
      <Link href="/about" className="flex flex-col gap-2 font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50">/about 페이지로 이동하기</Link>
      
      <Link
            href="/products"
            className="flex flex-col gap-2 font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
          >
            /products 페이지로 이동하기
          </Link>
          <Link
            href="/notices"
            className="flex flex-col gap-2 font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
          >
            /notices 페이지로 이동하기
          </Link>
    </main>
  );
}
