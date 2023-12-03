import { fetchPosts } from "@/lib/actions/thread.actions"

export default async function Home() {

  const result = await fetchPosts();

  console.log(result);
  return (
    <>
       <h1 className='head-text text-left'>Home</h1>

       <section>
        {result.posts.length === 0 ? (
          <p></p>
        ) : (

        )}
       </section>
    </>
  )
}