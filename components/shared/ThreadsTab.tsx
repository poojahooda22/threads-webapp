
import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import ThreadCard from "../cards/ThreadCard";

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}


const ThreadsTab = async ({ currentUserId, accountId, accountType}: Props) => {
    let result = await fetchUserPosts(accountId);

    if(!result) redirect('/')
    return (
        <section className="mt-9 flex flex-col gap-10">
           {result.threads.map((thread) => (
            <ThreadCard
                key={thread._id}
                id={thread._id}
                currentUserId={user?.id || ""}
                parentId={thread.parentId}
                content={thread.text}
                author={thread.author}
                community={thread.community}
                createdAt={thread.createdAt}
                comments={thread.children}
            />
           ))}
        </section>
    )
}

export default ThreadsTab;