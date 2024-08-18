import { View, Text, StyleSheet, Image, TouchableOpacity,ToastAndroid } from 'react-native'
import React ,{useEffect} from 'react'
import * as SMS from 'expo-sms';
import { Linking } from 'react-native';



const Dashboard =  () => {

  useEffect(()=>{
    console.log('toast')
    setTimeout(() => {
      ToastAndroid.show(
        'Welcome to Women Safety App',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
       
    }, 2700);
})


const phno =['+919827763713']

sendsms = async ()=>{
  const {result} = await SMS.sendSMSAsync(
   phno,
     ' PLEASE HELP ME..... ',
   );}


const makephonecall =  ()=>{
  try {
    console.log('call')
    Linking.openURL('tel:+919827763713')
    .catch(err => console.error('Error making phone call:', err));
     
  } catch (error) {
    console.log(error)
  }
 
}
test = async()=>{console.log('hello')} 

  return (
    <View style={styles.container}>

      <View style={styles.emergencyviewstyle}>
        <TouchableOpacity>
          <Image source={require('./Images/emergency.jpeg')} style={styles.emregencystyle} />
          <Text style={styles.emersound} > Emergency sound</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pannel}>

        <View style={styles.imagesview}>

          <TouchableOpacity onPress={makephonecall}>
            <Image source={require('./Images/callmg.png')} style={styles.imagestyle} />
            <Text style={styles.textstyle}> EMERGENCY CALL</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./Images/location.jpeg')} style={styles.imagestyle} />
            <Text style={styles.textstyle}> SHARE LOCATION</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.imagesview}>

          <TouchableOpacity onPress={sendsms}>
            <Image source={require('./Images/smsimage.jpg')} style={styles.imagestyle} />
            <Text style={styles.textstyle}> EMERGENCY SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./Images/policelogo.jpeg')} style={styles.imagestyle} />
            <Text style={styles.textstyle}> CONTACT POLICE</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.imagesview}>

          <TouchableOpacity>
            <Image source={require('./Images/womenhelplogo.jpg')} style={styles.imagestyle} />
            <Text style={styles.textstyle}> WOMEN HELPLINE</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./Images/voice.png')} style={styles.imagestyle} />
            <Text style={styles.textstyle}> Voice Message</Text>
          </TouchableOpacity>

        </View>
      </View>
    
    </View>

  )
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: '#D67D7C',
  },
  pannel: {
    paddingTop: 30,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginTop: 10,
    borderRadius: 80,

  },
  imagesview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30
  },
  imagestyle: {
    height: 70,
    width: 70,
    marginLeft: 30,
    marginTop:10
  },

  textstyle: {
    marginRight: 40,
    paddingTop: 10
  },
  emregencystyle: {
    height: 130,
    width: 130,
    marginTop: 150,
    borderRadius: 60
  },
  emergencyviewstyle: {
    alignItems: 'center',
  },
  emersound:{
    fontSize:20,
    fontWeight:'bold'
  }
}

);

export default Dashboard