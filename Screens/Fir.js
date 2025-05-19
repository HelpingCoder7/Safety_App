import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,  Alert,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import firebase from 'firebase/compat/app'
import { BlurView } from 'expo-blur'


const Fir = () => {

    const [name, SetName] = useState([])
    const [Phoneno, setPhoneno] = useState([])
    const [Address, setAddress] = useState([])
    const [Desc, setDesc] = useState([])

    function createdata() {
        try {
            const todoref = firebase.firestore().collection('firdatabase')
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();

            const data = { name: name, Phoneno: Phoneno, Address: Address, Fir_Desc: Desc, createdAt: timestamp }

            todoref.add(data)
            Alert.alert('Alert', 'Fir send successfully')
            console.log('Fir Fired')


        } catch (error) {
            console.log(error)
        }

    }



    return (
        <LinearGradient colors={['#D67D7C','pink']}
       
        
        style={{height:'100%'}}>
            <LinearGradient colors={['pink', '#D67D7C']} style={{
                justifyContent: 'center',
                alignItems: 'center', top: 40, backgroundColor: '#D67D7C',
                height: 150, borderBottomLeftRadius: 80, borderBottomRightRadius: 80
            }}>

                <Text style={{ fontSize: 40, top: 5, fontWeight: 'bold', color: 'black' }}>
                    REGISTER FIR
                </Text>
            </LinearGradient>

            <ScrollView>
                <View>

                    <BlurView  tint="dark" style={{
                        backgroundColor: 'gray',
                        height:440, top:10, width: '90%', marginLeft: 20, borderRadius: 50
                    }}>
                        <TextInput placeholder=' Name'
                            placeholderTextColor='black'

                            onChangeText={(text) => { SetName(text) }}
                            style={styles.textinputstyle}
                        />
                        <TextInput placeholder=' Phone Number'
                            placeholderTextColor='black'

                            onChangeText={(text) => setPhoneno(text)}
                            style={styles.textinputstyle}
                        />
                        <TextInput placeholder=' Address'
                            placeholderTextColor='black'

                            onChangeText={(text) => setAddress(text)}
                            style={styles.textinputstyle}
                        />
                        <TextInput placeholder='Describe'
                            placeholderTextColor='black'
                            onChangeText={(text) => setDesc(text)}
                            style={styles.textinputstyle}
                        />


                        <TouchableOpacity onPress={createdata}>
                            <LinearGradient
                                colors={['teal', 'black']}
                                style={styles.LinearGradient}
                               start={{ x: 0, y: 0.2 }}
                  end={{ x: 1, y: 0.5 }}>
                                <View style={{ alignItems: 'center', top: 5 }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}> Submit FIR</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </BlurView>
                </View>

            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    textinputstyle: {
        top: 12,
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 12,
        fontSize: 20,
    },
    LinearGradient: {
        height: 50,
        width: '70%',
        left: 50,
        top: 20,
        borderRadius: 20
    }
})

export default Fir