import { View, Text , StyleSheet,Image,ScrollView} from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'

const Precaution = () => {
  return (

    <ScrollView style={{height:100}}>
   <LinearGradient colors={['#D67D7C','pink']} style={{height:'100%'}}>

    <View style={{alignItems:'center',top:90}}>
      <Text style={{fontSize:50,color:'white'}}>
        Precautions
      </Text>
    </View>

   <View style={{top:30}}>
   <BlurView tint='light' style={styles.viewcontainer}>
      <Image source={require('./Images/callmg.png')} style={styles.imagestyles}/>
    <Text style={styles.textstyle}> HelpLines Numbers</Text>
    </BlurView>

    <BlurView tint='light' style={styles.viewcontainer}>
      <Image source={require('./Images/safetygadget.jpg')} style={styles.imagestyles}/>
    <Text style={styles.textstyle}>Safety Gadgets</Text>
    </BlurView>

    <BlurView tint='light'intensity={50} style={styles.viewcontainer}>
    <Image source={require('./Images/fighting.jpg')} style={styles.imagestyles}/>
    <Text style={styles.textstyle}>Fighting tips</Text>
    </BlurView>

    <BlurView tint='light'intensity={50} style={styles.viewcontainer}>
    <Image source={require('./Images/psychology.jpg')} style={styles.imagestyles}/>
    <Text style={styles.textstyle}>Psychology</Text>
    </BlurView>

    <BlurView tint='light'intensity={50} style={styles.viewcontainer}>
    <Image source={require('./Images/tipsandtricks.jpg')} style={styles.imagestyles}/>
    <Text style={styles.textstyle}>Tips & Trick</Text>
    </BlurView>
   </View>


    </LinearGradient>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainview:{
    display:'flex',
    flexDirection:'column',
  },
  viewcontainer:{
    height:90,
    width:'90%',
    alignItems:'center',top:100,
    margin:16,
    borderRadius:50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  textstyle:{
    fontSize:20,
    fontWeight:'bold'
  },
  imagestyles:{
    height:60,
    width:60,
    borderRadius:20,
    margin:16
  }
})

export default Precaution