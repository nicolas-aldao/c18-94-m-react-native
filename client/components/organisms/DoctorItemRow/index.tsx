
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ProfilePictureCircle } from "@/components/atoms/ProfilePictureCircle";
import { RoundedPrimaryButton } from "@/components/atoms/RoundedPrimaryButton";
import { RoundedLittleGrayButton } from "@/components/atoms/RoundedLittleGrayButton";
import { ButtonSection, FirstColumn, RowContainer, SecondColumn } from "./styles";

interface DoctorItemRowProps {
    image_url: any;
    name: string;
}

export const DoctorItemRow: FC<DoctorItemRowProps> = ({ image_url, name }) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <RowContainer>
                <FirstColumn>
                    <ProfilePictureCircle height={67} width={67} source={image_url} />
                </FirstColumn>
                <SecondColumn>
                    <ThemedText>{name}</ThemedText>
                    <ThemedText>Cardiología</ThemedText>
                    <ButtonSection>
                        <RoundedLittleGrayButton text="Info" route="/" />
                        <RoundedPrimaryButton text="Sacar turno" route="/" />
                    </ButtonSection>
                </SecondColumn>
            </RowContainer>
        </TouchableOpacity>
    )
}