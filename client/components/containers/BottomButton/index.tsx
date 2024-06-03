
import { FC, ReactNode } from "react";
import { StyledView } from "./styles";

interface BottomButtonProps {
    children?: ReactNode
}

export const BottomButton: FC<BottomButtonProps> = ({ children }) => {
    return (
        <StyledView>
            {children}
        </StyledView>
    )
}