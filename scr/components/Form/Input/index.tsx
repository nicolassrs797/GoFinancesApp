import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';
import theme from '../../../global/styles/theme'

interface Props extends TextInputProps {

};

export function Input({...rest} : Props) {
    return <Container
        {...rest}
        placeholderTextColor={theme.colors.shapeT}
    />;
};