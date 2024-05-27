import React, { FC, ReactNode } from 'react';
import { StyledAnimatedView } from './styles';

interface AnimatedViewProps {
    children: ReactNode;
}

export const AnimatedView: FC<AnimatedViewProps> = ({ children }) => {
    return (
        <StyledAnimatedView
            from={{
                opacity: 0,
                scale: 0.3,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.9,
            }}
            exitTransition={{
                type: 'timing',
                duration: 2500,
            }}
        >
            {children}
        </StyledAnimatedView>
    );
}
