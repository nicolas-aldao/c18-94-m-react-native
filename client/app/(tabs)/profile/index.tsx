import { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { MedConnectContext } from "@/context";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ProfilePictureCircle } from "@/components/atoms/ProfilePictureCircle";
import { Spacer } from "@/components/atoms/Spacer";
import { TopBar } from "@/components/molecules/TopBar";
import {
  CircleOption,
  FirstColumn,
  FirstOptionColumn,
  NameText,
  OptionView,
  SecondColumn,
  SecondOptionColumn,
  SecondaryText,
  StyledView,
} from "@/styles/profile/styles";

export default function ProfileScreen() {
  const { user } = useContext(MedConnectContext);

  const optionList = [
    {
      icon: <SimpleLineIcons name="user" size={24} color="black" />,
      text: "Datos Personales",
    },
    {
      icon: <Octicons name="heart" size={24} color="black" />,
      text: "Favoritos",
    },
    {
      icon: <FontAwesome5 name="laptop-medical" size={24} color="black" />,
      text: "Datos Médicos",
    },
    {
      icon: <FontAwesome5 name="address-card" size={24} color="black" />,
      text: "Obra Social",
    },
  ];

  return (
    <>
      <TopBar title="Mi Perfil" backArrow />
      <StyledView>
        <FirstColumn>
          <ProfilePictureCircle
            height={110}
            width={110}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
        </FirstColumn>
        <SecondColumn>
          <NameText>John Doe</NameText>
          <Spacer />
          <SecondaryText>+123 567 89000</SecondaryText>
          <SecondaryText>Figmaemail@example.com</SecondaryText>
        </SecondColumn>
      </StyledView>
      <Spacer />
      {optionList.map((item) => (
        <>
          <OptionView>
            <FirstOptionColumn>
              <CircleOption style={{ marginLeft: 10 }}>
                {item.icon}
              </CircleOption>
              <ThemedText style={{ marginLeft: 10 }}>{item.text}</ThemedText>
            </FirstOptionColumn>
            <SecondOptionColumn>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </SecondOptionColumn>
          </OptionView>
          <Spacer />
        </>
      ))}
    </>
  );
}
