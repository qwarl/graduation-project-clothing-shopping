import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Image } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListProducts from './screens/ListProducts';
import ShopProduct from './screens/ShopProduct';
import FavoriteProduct from './screens/FavoriteProduct';
import UserProduct from './screens/UserProduct';
import { IcFavorite, IcHome, IcShop, IcUser } from '../../assets/svg/icon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function searchScreen(){
//     <Stack.Navigator
//         screenOptions={{
//             headerStyle:
//             {
//                 backgroundColor: '#F67952'
//             },
//         }}>

//         <Stack.Screen component={SearchProduct} name='SearchProduct' />
//     </Stack.Navigator>
// }

export default function ProductNavigation() {
    return (

        <Tab.Navigator
            screenOptions={{
                headerStyle:
                {
                    backgroundColor: '#F67952'
                },
            }}
            tabBarOptions={{
                showLabel: false,
                style: {
                    ...styles.container
                }
            }}
        >
            <Tab.Screen name="Home" component={ListProducts}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={IcHome}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#F67952' : '#C2C2C2'
                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="Shop" component={ShopProduct}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={IcShop}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#F67952' : '#C2C2C2'
                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="Favorite" component={FavoriteProduct}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={IcFavorite}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#F67952' : '#C2C2C2'
                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="User" component={UserProduct}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={IcUser}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#F67952' : '#C2C2C2'
                                }}
                            />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})