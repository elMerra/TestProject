import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import ServiceScreen from './screens/ServiceScreen'
import TeamScreen from './screens/TeamScreen'
import DateScreen from './screens/DateScreen'
import {FontAwesome} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions = {{
        activeTintColor:'#FFFFFF',
        inactiveTintColor: '#FFFFFF',
        showLabel: true,
            style: {
              backgroundColor: "#173F5F",
              height: 90,
            } 
      }}
      > 
      <Tab.Screen  
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={35} color="#00a8cc" />
        }}
        /> 
        <Tab.Screen 
        name="Servicios" 
        component={ServiceScreen} 
        options={{
          tabBarIcon: () => <FontAwesome name="heart" size={30} color="#00a8cc" />
        }}
        />
        <Tab.Screen 
        name="Equipo" 
        component={TeamScreen} 
        options={{
          tabBarIcon: () => <FontAwesome name="user-md" size={35} color="#00a8cc"/>
        }}
        />
        <Tab.Screen 
        name="Cita" 
        component={DateScreen} 
        options={{
          tabBarIcon: () => <FontAwesome name="calendar" size={30} color="#00a8cc"/>
        }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};





