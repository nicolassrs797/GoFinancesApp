import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

interface CategoryProps {
    selected: boolean;
    iconColor?: string;
};

export let Container = styled(GestureHandlerRootView)`
    flex: 1;

    align-items: center;
    
    background-color: ${({theme}) => theme.colors.primaryDark};
`;

export let Header = styled.View`
    width: 100%;
    margin-bottom: ${RFValue(24)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.primary};
`;

export let Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=> theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
    margin-top: ${getStatusBarHeight()+RFValue(37)}px;
    margin-bottom: ${RFValue(19)}px;
    `;

export let CategoriesWrapper = styled.View`
    width: 100%;
    margin-bottom: ${RFPercentage(35)}px;
    padding: ${RFValue(0)}px ${RFValue(24)}px;
`;

export let CategoryItem = styled.TouchableOpacity<CategoryProps>`
    flex-direction: row;
    align-items: center;

    height: ${RFValue(50)}px;
    padding: ${RFValue(0)}px ${RFValue(12)}px;
    margin-bottom: ${RFValue(8)}px;
    
    border: 2px solid ${({theme}) => theme.colors.successLight};
    border-radius: 5px;

    background-color: 
        ${({selected, theme}) => selected === true ?
            theme.colors.successLightS
        :
            'transparent'
        }
    ;
`;

export let CategoryIcon = styled(Feather)<CategoryProps>`
    color: ${({iconColor}) => iconColor};

    opacity: 
        ${({selected}) => selected === true ?
            1
        :
            0.3
        }
    ;
`;

export let CategoryName = styled.Text<CategoryProps>`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=> theme.fonts.regular};
    color: ${({theme}) => theme.colors.shapeGrey};

    padding-top: ${RFValue(3)}px;

    margin-left: ${RFValue(24)}px;

    opacity: 
        ${({selected}) => selected === true ?
            1
        :
            0.3
        }
    ;
`;

export let ButtonWrapper = styled.View`
    position: absolute;
    bottom: 0;
    width: 90%;
`;