import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export let Container = styled(TouchableOpacity)`
    flex: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${RFValue(56)}px;

    align-self: center;
    align-items: center;
    justify-content: center;
    margin-bottom: ${RFValue(24)}px;

    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px;
`;

export let Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`;