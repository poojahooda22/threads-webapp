import { fetchPosts } from "@/lib/actions/thread.actions"

export default function Home() {

  const result = await fetchPosts();

  console.log(result);
  return (
    <>
       <h1 className='head-text text-left'>Home</h1>
    </>
  )
}