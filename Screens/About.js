import { View, Text ,StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const About = () => {
  return (
    <LinearGradient colors={['pink','pink']} 
    style={{height:'100%',}}>

  <View style={{alignItems:'center',top:70}}>
  <Image source={require('./Images/logo2.jpeg')}
    style={styles.logostyle}/>
  </View>

    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',}}>
    <LinearGradient 
    colors={['black','black']} 
    
    style={styles.regfir}>
        <Text style={styles.boxtexstyle}>Registerd FIR</Text>
      </LinearGradient>

    <LinearGradient
      colors={['black','black']}
      
    
    style={styles.regfir}>
        <Text style={styles.boxtexstyle}>Update Profile</Text>
      </LinearGradient>

    </View>

  <View style={styles.view}>

<TouchableOpacity style={styles.holeiconview}>

<Image source={require('./Images/smsimage.jpg')} 
    style={styles.image}/>
    <Text style={styles.textsms}>Update SMS</Text>

</TouchableOpacity>


<TouchableOpacity style={styles.holeiconview}>
<Image source={require('./Images/voice.png')} style={styles.image}/>
<Text style={{left:20,fontWeight:'bold',fontSize:25}}>Update Voice Message</Text>
</TouchableOpacity>

  <TouchableOpacity style={styles.holeiconview}>
  <Image source={require('./Images/callmg.png')} style={styles.image}/>
  <Text style={{left:10,fontWeight:'bold',fontSize:25}}>Add Emergency Contacts</Text>
  </TouchableOpacity>

  </View>

  
    </LinearGradient>
  )
}



const styles = StyleSheet.create({
  image: {
  height:80,
  width:80,
  borderRadius:30,
  marginBottom:15
 
  },
  textstyle:{
    fontSize:20,
    fontWeight:'bold'
  },
  regfir:{
    height:80,
    width:130,
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    top:170,
    borderRadius:20
  },
  boxtexstyle:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  logostyle:{
    height:180,
    width:190,
    borderRadius:100
  },
  view:{
    top:180,
    margin:16
  },
  holeiconview:{
  display:'flex',
  flexDirection:'row',
  },
  textsms:{
    fontSize:25,
    left:20,
    top:12,
    fontWeight:'bold'
  }


})

export default About