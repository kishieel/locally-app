import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OffersList from './offers/OffersList'
import NewOffer from './offers/NewOffer'
import Home from './profile/Home'
import Auth from './profile/Auth'
import {
  StyleSheet,
} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OffersList" component={OffersList} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="NewOffer" component={NewOffer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})
