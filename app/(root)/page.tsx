import { fetchPosts } from "@/lib/actions/thread.actions";

import { currentUser } from "@clerk/nextjs";
import  ThreadCard  from "@/components/cards/ThreadCard";

export default async function Home() {

  const result = await fetchPosts(1, 30);

  const user = await currentUser();
  return (
    <>
       <h1 className='head-text text-left mb-4'>Home</h1>

       <section>
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
       </section>
    </>
  )
}