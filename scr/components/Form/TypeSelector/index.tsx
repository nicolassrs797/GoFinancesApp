import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { 
    Container,
    Title,
    Icon
} from './styles';

interface Props extends RectButtonProps {
    title: string;
    selected: boolean;
    type: 'up' | 'down';
};

let icons = {
    up: "arrow-up-circle",
    down: "arrow-down-circle"
};

export function TypeSelector({
    type,
    selected,
    title,
    ...rest
}: Props) {

    return (
        <Container type={type} selected={selected} {...rest}>
            
            <Icon
                name={icons[type]}
                size={24}
                selected={selected}
                type={type}
            />

            <Title selected={selected} type={type}>
                {title}
            </Title>

        </Container>
    );
};