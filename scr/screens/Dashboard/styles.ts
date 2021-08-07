import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';

import { DataListProps } from '.';

export let Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primaryDark};
`;

export let Header = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    height: ${RFPercentage(42)}px;
`;

export let UserWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight()+RFValue(28)}px;
`;

export let UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export let Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export let User = styled.View`
    margin-left: ${RFValue(10)}px;
`;

export let UserGreeting = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;

export let UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;

export let IconWrapper = styled.View`
    height: ${RFValue(40)}px;
    width: ${RFValue(40)}px;
    background-color: ${({theme}) => theme.colors.attentionExit};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export let Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
`;

export let HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFValue(130)}px;
`;

export let Transactions = styled.View`
    flex: 1;
    padding: ${RFValue(0)}px ${RFValue(24)}px;
    margin-top : ${RFPercentage(12)}px;
`;

export let Title   = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shapeGrey};
`;

export let TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
        paddingBottom: getBottomSpace(),
        paddingTop: RFValue(16)
    }
})`

`;