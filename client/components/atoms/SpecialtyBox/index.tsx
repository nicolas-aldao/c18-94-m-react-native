
import React, { FC, useContext } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getSpecialtyImage } from "@/helpers/image";
import { ThemedText } from "../ThemedText";
import { useRouter } from "expo-router";
import { MedConnectContext } from "@/context";

interface SpecialtyBoxProps {
    image_url: any;
    name: string;
    id: string
}

export const SpecialtyBox: FC<SpecialtyBoxProps> = ({ image_url, name, id }) => {
    const { user, setUser } = useContext(MedConnectContext);
    const specialtyImage = getSpecialtyImage(image_url);
    const navigation = useRouter();

    const onPress = () => {
        setUser({
            ...user,
            doctor: {
                ...user.doctor,
                specialty: name
            }
        })
        navigation.push(`/doctors?id=${id}`)
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <LinearGradient
                colors={['#253332', '#495251']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradientBox}
            >
                <Image
                    source={specialtyImage}
                    // implementación cuando nos trae la imagen desde una url
                    //source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                    style={{ width: 31, height: 39 }}
                />
                <ThemedText type="specialty-box">{name}</ThemedText>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gradientBox: {
        borderRadius: 18,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginVertical: 17,
        marginHorizontal: 5,
        width: 93,
        height: 92,
    }
});