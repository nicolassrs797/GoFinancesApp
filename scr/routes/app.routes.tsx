import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Summary } from '../screens/Summary';

import theme from '../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';

let { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.successLL,
                tabBarInactiveTintColor: theme.colors.successLight,
                tabBarActiveBackgroundColor: theme.colors.shapeCards,
                tabBarInactiveBackgroundColor: theme.colors.primaryDark,
                tabBarStyle: {
                    borderTopWidth: 0,
                    height: getBottomSpace()+RFValue(50),
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: theme.colors.primaryDark
                },
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.medium,
                    fontSize: RFValue(10),
                },
                tabBarLabelPosition: 'beside-icon',
                tabBarItemStyle: {
                    borderColor: theme.colors.primary,
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    borderTopWidth: 0.5,
                    marginHorizontal: -1
                }
            }}
        >

            <Screen
                name="Início"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => (
                        <Feather
                            size={RFValue(16)}
                            name="home"
                            color={color}
                        />
                    )),
                }}
            />

            <Screen
                name="Cadastrar"
                component={Register}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => (
                        <Feather
                            size={RFValue(16)}
                            name="dollar-sign"
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name="Resumo"
                component={Summary}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => (
                        <Feather
                            size={RFValue(16)}
                            name="pie-chart"
                            color={color}
                        />
                    ))
                }}
            />

        </Navigator>
    );
};