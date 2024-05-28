import React, { FC, ReactNode } from 'react';
import { View } from "moti";

interface PopFadeViewProps {
    children: ReactNode;
}

export const PopFadeView: FC<PopFadeViewProps> = ({ children }) => {
    return (
        <View
            from={{
                opacity: 0,
                scale: 0.6,
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
        </View>
    );
}
