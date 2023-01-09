import React, { useState } from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './Styles/styles';
import HomeScreen from "./Screens/home";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./Screens/Profile_Screen";
import Screen_C from "./Screens/Screen_C";

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home Page',
          }}
          component={HomeScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{}} />
        <Stack.Screen name="C" component={Screen_C} options={{

        }} />
      </Stack.Navigator>

    </NavigationContainer >
  );
}



export default App;