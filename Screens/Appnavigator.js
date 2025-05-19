// AppNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Signup';
import Login from './Login';
import Bottomtabs from './Bottomtabs';
import Splash from './Splash';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   <Stack.Navigator>
       <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
      <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name='Dashboard' component={Bottomtabs} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;
