// import User from "@/lib/models/user.model"

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
        <div>
            UserCard
        </div>
    )
}

export default UserCard