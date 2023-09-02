import React from 'react'
import { View,  Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Precaution from './Precaution';
import Fir from './Fir';
import About from './About';

const Bottomtabs = () => {
  const tabs = createBottomTabNavigator();
  return (
    <tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor:'yellow',
      }}>
      <tabs.Screen name='Home' component={Dashboard} options={{
        tabBarIcon: () => {
         return(
          <View style={{alignContent:'center',justifyContent:'center'}}>
          <Image source={require('../Screens/Images/home.png')} resizeMode='contain'
          style={{height:30,width:30,}}/>
        </View>
         );
      }
      }} />
      <tabs.Screen name='Precaution' component={Fir}  options={{
        tabBarIcon: () => {
         return(
          <View style={{alignContent:'center',justifyContent:'center'}}> 
          <Image source={require('../Screens/Images/police.png')}
          style={{height:30,width:30}}/>
         
        </View>
         );
        }
      }}/>
      <tabs.Screen name='edit' component={Precaution}  options={{
        tabBarIcon: () => {
         return(
          <View style={{alignContent:'center',justifyContent:'center'}}>
          <Image source={require('../Screens/Images/fighticon.png')}
          style={{height:30,width:30}}/>
        </View>
         );
        }
      }}/>
      <tabs.Screen name='About' component={About}  options={{
        tabBarIcon: () => {
         return(
          <View style={{alignContent:'center',justifyContent:'center',paddingTop:10,}}>
          <Image source={require('../Screens/Images/about.png')} resizeMode='contain'
          style={{height:30,width:30,}}/>
        </View>
         );
        }
      }}/>

    </tabs.Navigator>

  )

}

export default Bottomtabs