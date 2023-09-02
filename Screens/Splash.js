import { View, Text , ImageBackground,Dimensions} from 'react-native'
import React ,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import Login from './Login';


const screenHeight = Dimensions.get('window').height*1.2;
const screenWidth = Dimensions.get('window').width;

const Splash = () => {
    const navigation = useNavigation();
  
    useEffect(() => {
        setTimeout(() => {
       navigation.navigate(Login)
        }, 3000);
      });
    return (
       
     <ImageBackground source={require('./Images/logo.jpg')}  resizeMode="cover"
     style={{ height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',}}>
            <View style={{alignItems:'center'}}>

    <View style={{alignItems:'center',}}>
     <Text style={{height:60,fontSize:50,fontStyle:'italic'}}> Women Safety App </Text>
    </View>
    </View>
        </ImageBackground>

 
  )
}

export default Splash