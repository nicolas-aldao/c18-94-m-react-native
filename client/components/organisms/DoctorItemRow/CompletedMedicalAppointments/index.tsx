
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ProfilePictureCircle } from "@/components/atoms/ProfilePictureCircle";
import { RoundedLittleButton } from "@/components/atoms/RoundedLittleButton";
import { FirstColumn, Container, SecondColumn, SecondRow, FirstRow, ThirdRow } from "./styles";
import { useRouter } from "expo-router";
import { Hours } from "@/constants";

interface CompletedMedicalAppointmentsProps {
    image_url: any;
    name: string;
    specialty: string;
    date: string;
    time: number;
}

export const CompletedMedicalAppointments: FC<CompletedMedicalAppointmentsProps> = ({ image_url, name, specialty, date, time }) => {
    const navigation = useRouter();

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.push('/calendary')}>
            <Container>
                <FirstRow>
                    <FirstColumn>
                        <ProfilePictureCircle height={67} width={67} source={image_url} />
                    </FirstColumn>
                    <SecondColumn>
                        <ThemedText type="doctor-name">Dr. {name}</ThemedText>
                        <ThemedText type="specialty">{specialty}</ThemedText>
                    </SecondColumn>
                </FirstRow>
                <SecondRow>
                    <ThemedText>{date}</ThemedText>
                    <ThemedText>{Hours[time]}</ThemedText>
                </SecondRow>
                <ThirdRow>
                    <RoundedLittleButton text="Detalles" onPress={() => console.log('pressed')} />
                    <RoundedLittleButton text="Cancelar" onPress={() => console.log('pressed')} />
                </ThirdRow>
            </Container>
        </TouchableOpacity>
    )
}