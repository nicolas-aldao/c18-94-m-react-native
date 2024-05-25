import { FC } from "react";
import { Link } from "expo-router";
import { ProfilePictureCircle } from "@/components/atoms/ProfilePictureCircle";
import { Name, NameAndPicContainer } from "./styles";

interface NameAndPicUserProps {
    name?: string;
    profile_pic?: string;
}

export const NameAndPicUser: FC<NameAndPicUserProps> = ({ name, profile_pic }) => {
    return (
        <NameAndPicContainer>
            <Name>{name}</Name>
            <Link href="/profile">
                <ProfilePictureCircle source={{ uri: profile_pic }}
                    width={29} height={29} />
            </Link>
        </NameAndPicContainer>);
};