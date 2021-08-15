import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export let Container = styled.View`
    width: 100%;
`;
export let Error = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.attention};
    margin-top: ${RFValue(-8)}px;
    margin-bottom: ${RFValue(8)}px;
`;