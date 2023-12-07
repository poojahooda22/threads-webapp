import Image from "next/image";

interface Props {
    accountId: string;
    authUserId: string;
    name: string;
    username: string;
    imgUrl: string;
    bio: string;
}

const ProfileHeader = ({ accountId, authUserId, name, username, imgUrl, bio}: Props) => {
    return (
        <div className="flex w-full flex-col justify-start">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div>
                        <Image
                            src={imgUrl}
                            alt="Profile Image"
                            fill
                            className="rounded-full object-cover shadow-2xl"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-left text-heading3-bold text-light-1">{name}</h1>
                        <p className="text-base-medium text-gray-1">@{username}</p>
                    </div>
                </div>

                {/* TODO: Community */}
                <p
                    className="mt-6 max-ww-lg text-base-regular text-light-2"
                >
                    {bio}
                </p>

                <div className="mt-12 h-0.5 w-full bg-dark-3" />

                
            </div>
        </div> 
    )
}


export default ProfileHeader;