import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet ,Image} from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebaseconfig'
import Login from './Login'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import Dashboard from './Dashboard'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handlecreateauser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Account Created')
        navigation.navigate(Dashboard)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const navigateinter = () => { navigation.navigate(Login) }
  return (
    <LinearGradient
      colors={['#D67D7C', 'pink']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0.2, y: 1 }}
      style={{ backgroundColor: '#D67D7C', height: '100%' }}>

     

      <ScrollView > 
        <View style={{ paddingBottom: 20, alignItems: 'center',paddingTop:150 }}>
          <Text style={{ fontSize: 70, paddingTop: 18, color: 'black' }}>
            Sign-up
          </Text>
        </View>
        <View>

          <View style={{ marginTop: 80, margin: 30, paddingLeft: 10 }}>

            <TextInput
              onChangeText={(text) => setEmail(text)}
              keyboardType='email-address'
              placeholder='E-mail'
              placeholderTextColor='black'

              style={{
                margin: 20,
                borderColor: 'black',
                fontSize: 20,
                paddingHorizontal: 8,
                height: 50,
                borderRadius: 20,
                borderWidth: 2
              }}
            />

            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor='black'
              style={{
                margin: 20,
                borderWidth: 2,
                borderColor: 'black',
                fontSize: 20,
                paddingHorizontal: 8,
                height: 50,
                borderRadius: 20,
                color: 'black'
              }}
            />

            <LinearGradient colors={['teal', 'grey']}
              style={{ height: 50, width: 280, margin: 30, borderRadius: 30 }}>
              <TouchableOpacity onPress={handlecreateauser}>
                <Text style={{ alignItems: 'center', paddingTop: 10, paddingLeft: 80, fontSize: 20, color: 'white', fontWeight: 'bold' }}>Create Account</Text>

              </TouchableOpacity>
            </LinearGradient>

          </View>
        </View>


      </ScrollView>
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  LinearGradient: {
    height: 50,
    width: 50
  }
})

export default Signup