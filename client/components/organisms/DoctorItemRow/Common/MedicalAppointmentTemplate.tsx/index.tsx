
import React, { FC, ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ProfilePictureCircle } from "@/components/atoms/ProfilePictureCircle";
import { ButtonSection, FirstColumn, RowContainer, SecondColumn } from "./styles";
import { useRouter } from "expo-router";

interface MedicalAppointmentTemplateProps {
    image_url: any;
    name: string;
    specialty: string;
    children: ReactNode;
}

export const MedicalAppointmentTemplate: FC<MedicalAppointmentTemplateProps> = ({ children, image_url, name, specialty }) => {
    const navigation = useRouter();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.push('/calendary')}>
            <RowContainer>
                <FirstColumn>
                    <ProfilePictureCircle height={67} width={67} source={image_url} />
                </FirstColumn>
                <SecondColumn>
                    <ThemedText type="doctor-name">Dr. {name}</ThemedText>
                    <ThemedText type="specialty">{specialty}</ThemedText>
                    <ButtonSection>
                        {children}
                    </ButtonSection>
                </SecondColumn>
            </RowContainer>
        </TouchableOpacity>
    )
}