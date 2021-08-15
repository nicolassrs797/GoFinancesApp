import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

export let Container = styled(TextInput)`
    height: ${RFValue(56)}px;
    margin-bottom: ${RFValue(8)}px;
    padding: ${RFValue(0)}px ${RFValue(16)}px;
    padding-top: ${RFValue(3)}px;

    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=> theme.fonts.regular};
    background-color: ${({theme}) => theme.colors.successLightT};

    border-radius: 5px;
`;