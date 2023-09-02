import Signup from './Screens/Signup';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtabs from './Screens/Bottomtabs';
import Splash from './Screens/Splash';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
      <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name='Dashboard' component={Bottomtabs} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
