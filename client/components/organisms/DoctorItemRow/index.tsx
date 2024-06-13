import React, { FC, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ProfilePictureCircle } from "@/components/atoms/ProfilePictureCircle";
import { RoundedLittleButton } from "@/components/atoms/RoundedLittleButton";
import {
  ButtonSection,
  FirstColumn,
  RowContainer,
  SecondColumn,
} from "./styles";
import { useRouter } from "expo-router";
import { MedConnectContext } from "@/context";

interface DoctorItemRowProps {
  image_url: any;
  name: string;
  specialty: string;
  id: string;
}

export const DoctorItemRow: FC<DoctorItemRowProps> = ({
  image_url,
  name,
  specialty,
  id,
}) => {
  const { user, setUser } = useContext(MedConnectContext);
  const navigation = useRouter();

  const onPress = () => {
    setUser({
      ...user,
      doctor: {
        ...user.doctor,
        id: id,
        name: name,
      },
    });
    navigation.push(`/calendary?doctorId=${id}`);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <RowContainer>
        <FirstColumn>
          <ProfilePictureCircle height={67} width={67} source={image_url} />
        </FirstColumn>
        <SecondColumn>
          <ThemedText type="doctor-name">Dr. {name}</ThemedText>
          <ButtonSection>
            <ThemedText type="specialty">{specialty}</ThemedText>
            <RoundedLittleButton
              text="Info"
              onPress={() => console.log("pressed")}
            />
          </ButtonSection>
        </SecondColumn>
      </RowContainer>
    </TouchableOpacity>
  );
};
