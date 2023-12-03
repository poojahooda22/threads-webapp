import { fetchPosts } from "@/lib/actions/thread.actions";

import { currentUser } from "@clerk/nextjs";

export default async function Home() {

  const result = await fetchPosts();

  console.log(result);
  return (
    <>
       <h1 className='head-text text-left'>Home</h1>

       <section>
        {result.posts.length === 0 ? (
          <p>No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user.id}
                parentId={post.parentId}
                title={post.title}
              />
            ))}
          </>
        )}
       </section>
    </>
  )
}