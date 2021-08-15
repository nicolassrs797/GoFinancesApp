import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Icon, Title } from './styles';

interface Props extends RectButtonProps{
    title: string;
};

export function CategorySelector({ title, ...rest }: Props) {
    return (
        <Container activeOpacity={0.7} {...rest}>

            <Title>
                {title}
            </Title>

            <Icon name="chevron-down" size={20}/>

        </Container>
    );
};