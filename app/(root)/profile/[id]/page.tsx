import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";  
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";


async function Page({params} : {params: {id: string}}) {
    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    if(!userInfo?.onboarded) redirect('/onboarding');

    return (
        <section>
            <ProfileHeader
                accountId={userInfo.id}
                authUserId={user.id}
                name={userInfo.name}
                username={userInfo.username}
                imgUrl={userInfo.image}
                bio={userInfo.bio}
            />

            <div className="mt-9">
                <Tabs defaultValue="threads" className="w-full">
                    <TabsList className="tab">
                        {profileTabs.map((tab) => (
                            <TabsTrigger className="tab" key={tab.label} value={tab.value}>
                                <Image
                                    src={tab.icon}
                                    alt={tab.label}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </TabsTrigger>
                        ))}

                    </TabsList>
                </Tabs>

            </div>
        </section>
    )
}

export default Page;