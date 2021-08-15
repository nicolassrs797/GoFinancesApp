import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TransactionType {
    type: 'positive' | 'negative'
};

export let Container = styled.View`
    background-color: ${({theme}) => theme.colors.shapeCards};
    padding: ${RFValue(0)}px  ${RFValue(24)}px;
    padding-top: ${RFValue(17)}px;
    margin-bottom: ${RFValue(16)}px;
    border-radius: 5px;
`;

export let Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.shapeGrey};
`;

export let Amount = styled.Text<TransactionType>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({theme, type}) => 
        type === 'positive' ?
            theme.colors.success
        :
            theme.colors.attention
    };
    margin-bottom: ${RFValue(19)}px;
`;

export let Details = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${RFValue(18)}px;
`;

export let Category = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export let IconWrapper = styled.View`
    height: ${RFValue(20)}px;
    width: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export let Icon = styled(Feather)`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text};
`;

export let CategoryName = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    margin-left: ${RFValue(12)}px;
`;

export let Date = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`;