import { MotiView } from "moti"
import { Skeleton } from "moti/skeleton"
import { ButtonSection, FirstColumn, RowContainer, SecondColumn } from "./styles"

export const DoctorItemRowSkeleton = () => {
    return (
        <RowContainer>
            <FirstColumn>
                <Skeleton height={67} width={67} radius="round" colorMode="light" />
            </FirstColumn>
            <SecondColumn>
                <Skeleton height={10} width={100} radius="round" colorMode="light" />
                <MotiView style={{ height: 6 }} />
                <Skeleton height={10} width={130} radius="round" colorMode="light" />
                <ButtonSection>
                    <Skeleton height={20} width={60} radius="round" colorMode="light" />
                    <Skeleton height={20} width={90} radius="round" colorMode="light" />
                </ButtonSection>
            </SecondColumn>
        </RowContainer>)
}