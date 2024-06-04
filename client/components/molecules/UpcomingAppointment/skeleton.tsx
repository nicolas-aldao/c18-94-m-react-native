import { Skeleton } from "moti/skeleton"
import { AppointmentContainer } from "./styles"
import { Spacer } from "@/components/atoms/Spacer"

export const UpcomingAppointmentSkeleton = () => {
    return <AppointmentContainer>
        <Spacer height={3} />
        <Skeleton height={12} width={160} radius="round" colorMode="light" />
        <Spacer height={8} />
        <Skeleton height={15} width={140} radius="round" colorMode="light" />
        <Spacer height={8} />
        <Skeleton height={13} width={100} radius="round" colorMode="light" />
    </AppointmentContainer>
}