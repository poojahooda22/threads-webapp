
import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

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
            ThreadsTab
        </section>
    )
}

export default ThreadsTab;