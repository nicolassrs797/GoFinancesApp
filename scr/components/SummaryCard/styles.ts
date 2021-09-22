import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface MarkProps {
    color: string;
}

export let Container = styled.View`
    width: 100%;
    height: ${RFValue(48)}px;

    flex-direction: row;

    align-items: center;

    border-radius: 5px;
    overflow: hidden;

    margin-bottom: ${RFValue(8)}px;

    background-color: ${({theme}) => theme.colors.successLight};
`;

export let ColorMark = styled.View<MarkProps>`
    width: ${RFValue(4)}px;
    height: ${RFValue(48)}px;
    
    background-color: ${({color}) => color};
`;

export let ContentWrapper = styled.View`
    flex: 1;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: 0 ${RFValue(24)}px;
`;

export let Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.shape};
`;

export let Amount = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.shapeGrey};
`;