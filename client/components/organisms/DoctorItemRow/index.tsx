
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ProfilePictureCircle } from "@/components/atoms/ProfilePictureCircle";
import { RoundedPrimaryButton } from "@/components/atoms/RoundedPrimaryButton";
import { RoundedLittleGrayButton } from "@/components/atoms/RoundedLittleGrayButton";
import { ButtonSection, FirstColumn, RowContainer, SecondColumn } from "./styles";
import { useRouter } from "expo-router";

interface DoctorItemRowProps {
    image_url: any;
    name: string;
    specialty: string;
}

export const DoctorItemRow: FC<DoctorItemRowProps> = ({ image_url, name, specialty }) => {
    const navigation = useRouter();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.push('/calendary')}>
            <RowContainer>
                <FirstColumn>
                    <ProfilePictureCircle height={67} width={67} source={image_url} />
                </FirstColumn>
                <SecondColumn>
                    <ThemedText type="doctor-name">{name}</ThemedText>
                    <ThemedText type="specialty">{specialty}</ThemedText>
                    <ButtonSection>
                        <RoundedLittleGrayButton text="Info" route="/" />
                        <RoundedPrimaryButton text="Sacar turno" route="/" />
                    </ButtonSection>
                </SecondColumn>
            </RowContainer>
        </TouchableOpacity>
    )
}