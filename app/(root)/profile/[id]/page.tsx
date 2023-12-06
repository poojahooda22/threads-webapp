import { fetchUser } from "@/lib/actions/user.actions";  
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";




async function Page({params} : {params: {id: string}}) {
    const user = await currentUser();

    // if(!user) return null;

    // const userInfo = await fetchUser(user.id);

    // if(!userInfo?.onboarded) redirect('/onboarding');
    return (
        <section>
            Profile
        </section>
    )
}

export default Page;