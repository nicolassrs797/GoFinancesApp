import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
interface ButtonProps {
    selected: boolean;
    type: 'up' | 'down';
}

export let Container = styled(RectButton)<ButtonProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 48%;
    height: ${RFValue(56)}px;

    border-radius: 5px;

    background-color: ${({type, theme, selected}) => 
        type === 'up' ?
            selected === true ?
                theme.colors.attentionLightS
            :
                theme.colors.attentionLight
        :
            selected === true ?
                theme.colors.successLightS
            :
                theme.colors.successLight
    };
`;

export let Icon = styled(Feather)<ButtonProps>`
    margin-right: ${RFValue(16)}px;

    color: ${({theme, type}) => 
        type === 'down' ?
            theme.colors.successLL
        :
            theme.colors.attention
    };
    opacity: ${({selected}) => 
        selected === false ? 
            0.5
        :
            1
    };
`;

export let Title = styled.Text<ButtonProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};

    padding-top: ${RFValue(3)}px;

    opacity: ${({selected}) => 
        selected === false ? 
            0.5
        :
            1
    };
`;


