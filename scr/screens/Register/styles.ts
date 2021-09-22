import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export let Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primaryDark};
`;

export let Header = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    justify-content: center;
    align-items: center;
`;

export let Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=> theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
    justify-content: space-between;
    margin-top: ${getStatusBarHeight()+RFValue(37)}px;
    margin-bottom: ${RFValue(19)}px;
`;

export let FormWrapper = styled.View`
    flex: 1;
    padding: ${RFValue(24)}px;
`;

export let TypeSelectorWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-top: ${RFValue(8)}px;
    margin-bottom: ${RFValue(16)}px;
`;