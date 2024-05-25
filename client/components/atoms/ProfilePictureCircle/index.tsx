
import { FC } from "react";
import { View } from "react-native";
import { ImagePicture } from "./styles";

interface ProfilePictureCircleProps {
    height?: number;
    width?: number;
    source: object;
}

export const ProfilePictureCircle: FC<ProfilePictureCircleProps> = ({ height, width, source }) => {
    return (
        <View>
            <ImagePicture
                source={source}
                style={{ width: width, height: height }}
            />
        </View>
    )
}