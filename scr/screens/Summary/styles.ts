import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export let Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.primaryDark};
`;

export let Header = styled.View`
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.primary};
`;

export let Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=> theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
    
    justify-content: space-between;

    margin-top: ${getStatusBarHeight()+RFValue(37)}px;
    margin-bottom: ${RFValue(19)}px;
    
`;

export let DateSelector = styled.View`
    flex: 1;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-bottom: ${RFValue(32)}px;
`;

export let SelectorButton = styled(RectButton)`
    height: 100%;
    width: ${RFValue(40)}px;

    align-items: center;
    justify-content: center;
`;

export let ButtonIcon = styled(Feather)`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
`;

export let SelectorDisplay = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.shape};
`;

export let ChartWrapper = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: ${RFValue(32)}px;
`;

export let CategoryList = styled.ScrollView.attrs({
    contentContainerStyle: { padding: RFValue(24) },
    showsVerticalScrollIndicator: false,
})`
`;

export let LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;