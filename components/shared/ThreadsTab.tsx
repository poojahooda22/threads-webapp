
import { fetchUserPosts } from "@/lib/actions/user.actions";

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}


const ThreadsTab = async ({ currentUserId, accountId, accountType}: Props) => {
    let result = await fetchUserPosts(accountId);

    
    return (
        <section>
            ThreadsTab
        </section>
    )
}

export default ThreadsTab;