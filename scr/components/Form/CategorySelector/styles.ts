import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export let Container = styled(RectButton)`
    width: 100%;
    flex-direction: row;
    height: ${RFValue(56)}px;

    justify-content: space-between;
    align-items: center;

    border-radius: 5px;

    background-color: ${({theme}) => theme.colors.primary};
`;

export let Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.shape};

    padding: ${RFValue(16)}px;
`;

export let Icon = styled(Feather)`
    padding: ${RFValue(8)}px;
    color: ${({theme}) => theme.colors.shape};
`;