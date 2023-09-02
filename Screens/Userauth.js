import { View, Text } from 'react-native'
import React from 'react'

const Userauth = () => {
  return (
      )
      function handlesignup = () => {
          createUserWithEmailAndPassword(getAuth, email, password)
            .then(() => {
              console.log('Account Created')
            })
            .catch(error => {
              console.log(error)
            })
        }
}

export default Userauth