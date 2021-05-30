import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBarMenu from "./components/CustomSideBarMenu"
export const AppDrawerNavigator = createDrawerNavigator({

    Home : { screen : AppTabNavigator }, },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:"Home"
    }

)