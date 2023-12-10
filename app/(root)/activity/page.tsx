import { currentUser } from "@clerk/nextjs";
import { redirect } from 'next/navigation';
import { fetchUser, fetchUsers, getActivity } from '@/lib/actions/user.actions';
import PostThread from "@/components/forms/PostThread";
import Image from 'next/image';
import { profileTabs } from '@/constants';
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from "@/components/cards/UserCard";
import Link from "next/link";


async function Page() {
  const user = await currentUser();

  if(!user) return null;

  const userInfo = await fetchUser(user.id);

  if(!userInfo?.onboarded) redirect ('/onboarding');

  //getActivity
  const activity = await getActivity(userInfo._id);

  return (
    <section>
      <h1 className="head-text mb-10">Activity</h1>

      <section className="mt-10 flex flex-col gap-5">
        {activity.length > 0 ? (
          <>
            {activity.map((activity) => (
              <Link
                key={activity._id} 
                href={`/thread/${activity.parentId}`}
              >
                <article className="activity-card">
                  <Image
                    src={activity.author.image}
                    alt="profile picture"
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />
                  <p className="!text-small-regular text-light-1">
                    <span className="mr-1 text-purple-400">
                      {activity.author.name}
                    </span>{" "}
                    replied to your thread
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : <p className="!text-base-regular text-light-3">No activity yet</p>}
      </section>
    </section>
  )
}
  
  export default Page;
  