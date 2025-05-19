import Signup from './Screens/Signup';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtabs from './Screens/Bottomtabs';
import Splash from './Screens/Splash';
import AppNavigator from './Screens/Appnavigator';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
  <AppNavigator/>
  </NavigationContainer>
  );
}
