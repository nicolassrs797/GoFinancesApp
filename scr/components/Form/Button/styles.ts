import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export let Container = styled(RectButton)`
    flex: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${RFValue(56)}px;

    align-self: center;
    align-items: center;
    justify-content: center;
    margin-bottom: ${RFValue(24)}px;

    background-color: ${({theme}) => theme.colors.primary};
    border-top-width: 2px;
    border-left-width: 2px;
    border-color: ${({theme}) => theme.colors.primaryDarkB};
    border-radius: 5px;
`;

export let Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`;