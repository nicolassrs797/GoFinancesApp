import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons'

interface CardProps {
    type: 'up' | 'down' | 'total';
};

export let Container = styled.View<CardProps>`
    background-color: ${({theme, type}) => 
        type === 'total' ?
            theme.colors.successLL
        :
            theme.colors.shape
    };
    width: ${RFValue(280)}px;
    margin-right: ${RFValue(16)}px;
    padding: ${RFValue(19)}px ${RFValue(23)}px;
    padding-bottom: ${RFValue(42)}px;
    border-top-width: 2px;
    border-left-width: 2px;
    border-color: ${({theme}) => theme.colors.primaryDarkB};
    border-radius: 5px;
`;

export let Details = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(35)}px;
`;

export let Title = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme, type}) => 
        type === 'total' ?
            theme.colors.shape
        :
            theme.colors.title
    };
`;

export let Icon = styled(Feather)<CardProps>`
    font-size: ${RFValue(40)}px;
    color: ${({theme, type}) => 
        type === 'total' ?
            theme.colors.shape
        :
            type === 'down' ?
                theme.colors.success
            :
                theme.colors.attention
    };
`;

export let Content = styled.View`
`;

export let Amount = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(32)}px;
    color: ${({theme, type}) => 
        type === 'total' ?
            theme.colors.shape
        :
            theme.colors.title
    };
`;

export let ValueAmount = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme, type}) => 
        type === 'total' ?
            theme.colors.shape
        :
            theme.colors.title
    };
`;

export let LastTransaction = styled.Text<CardProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme, type}) => 
        type === 'total' ?
            theme.colors.shape
        :
            theme.colors.text 
    };
`;