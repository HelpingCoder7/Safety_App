import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseconfig";
import { useNavigation } from "@react-navigation/native";

import Dashboard from "./Dashboard";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./Signup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleuserlogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Loged in successfull");
        navigation.navigate(Dashboard);
      })
      .catch((error) => {
        Alert.alert("Alert", "worng password or email address");
        console.log(error);
      });
  };

  return (
    <>
      <LinearGradient
        colors={["white", "pink"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ backgroundColor: "", height: "100%" }}
      >
        <ScrollView style={{ top: 150 }}>
          <View style={{ paddingBottom: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 70, paddingTop: 50, color: "black" }}>
              Login
            </Text>
          </View>

          <View>
            <View style={{ marginTop: 50, margin: 30, paddingLeft: 10 }}>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                placeholder="E-mail"
                placeholderTextColor="black"
                style={{
                  margin: 20,
                  borderColor: "black",
                  fontSize: 20,
                  paddingHorizontal: 8,
                  height: 50,
                  borderRadius: 30,
                  borderWidth: 2,
                }}
              ></TextInput>

              <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="black"
                style={{
                  margin: 20,
                  borderWidth: 2,
                  borderColor: "black",
                  fontSize: 20,
                  paddingHorizontal: 8,
                  height: 50,
                  borderRadius: 30,
                  color: "black",
                }}
              ></TextInput>

              <TouchableOpacity>
                <View style={{ alignItems: "center", paddingLeft: 150 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                  >
                    Forgot Password
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleuserlogin}>
                <LinearGradient
                  colors={["teal", "black"]}
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{
                    height: 50,
                    width: 280,
                    margin: 50,
                    borderRadius: 30,
                  }}
                >
                  <Text
                    style={{
                      alignItems: "center",
                      paddingTop: 8,
                      paddingLeft: 100,
                      fontSize: 25,
                      color: "white",
                    }}
                  >
                    Login
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  top: 20,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {" "}
                  Create New Account |
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "blue",
                    }}
                    onPress={() => {
                      navigation.navigate(Signup);
                    }}
                  >
                    {" "}
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default Login;
