import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { MedConnectContext } from "@/context";
import { CenteredView } from "@/components/containers/CenteredView";
import { BottomButton } from "@/components/containers/BottomButton";
import { ThemedText } from "@/components/atoms/ThemedText";
import { BigButton } from "@/components/atoms/BigButton";
import { Spacer } from "@/components/atoms/Spacer";
import { TextArea } from "@/components/atoms/TextArea";
import { TopBar } from "@/components/molecules/TopBar";

export default function MotiveScreen() {
    const router = useRouter();
    const [text, setText] = useState('');
    const { user, setUser } = useContext(MedConnectContext);

    const updateMotive = () => {
        setUser({
            ...user,
            appointment: {
                ...user.appointment,
                motive: text
            }
        })
        router.push('/appointment-confirmation')
    }

    return (
        <>
            <TopBar title="Agendá tu turno" backArrow />
            <CenteredView>
                <ThemedText type="header-subtitle">Explicanos tu motivo de consulta</ThemedText>
                <Spacer height={26} />
                <TextArea
                    onChangeText={setText}
                    text={text}
                    placeholder="Inserta una breve descripción..."
                />
            </CenteredView>
            <BottomButton>
                <BigButton text="Continuar" onPress={updateMotive}
                    disabled={text.length < 5} />
                <Spacer height={30} />
            </BottomButton>
        </>
    )
}