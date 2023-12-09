// import User from "@/lib/models/user.model"

import Image from "next/image";

interface Props {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;

}

const UserCard = ({
    id,
    name, username, imgUrl, personType
}: Props) => {
    return (
        <article className="user-card">
            <div className="user-card_avatar">
                <Image
                    src={imgUrl}
                    alt="logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                />

                <div className="flex-1 text-ellipsis">
                    <h4 className="text-base-semibold text-light-1">{name}</h4>
                    <p></p>
                </div>
            </div>           
        </article>
    )
}

export default UserCard