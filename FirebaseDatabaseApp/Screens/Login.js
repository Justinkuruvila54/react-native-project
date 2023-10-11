
import React, { useState } from "react";
import { Alert } from "react-native";
import { Button } from "react-native";
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from "react-native";
import auth from "@react-native-firebase/auth";

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [Password, setpassword] = useState("");



    const signup = () => {

        if (email != '' && Password != '') {
            auth().createUserWithEmailAndPassword(email, Password).then((res) => {
                console.log("response", res)
                Alert.alert(" create sucessfully,you can login")


            })
                .catch((error) => {

                    console.log("error_++++++++++++++++", error)
                    Alert.alert(error.message);

                })



        }
        else {
            Alert.alert("Both field are mandatory ")
        }
    }
    const login = () => {

        auth().signInWithEmailAndPassword(email,Password).then((res) => {
            console.log("response", res)
            navigation.navigate("Home")

        }
        )
            .catch((error) => {

                console.log("error_++++++++++++++++", error)
                Alert.alert(error.message);


            })
        }

        return (

            <View style={style.container}>
                <Text>Welcome To Login Page</Text>




                <TextInput style={style.TextInput}

                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"

                    placeholder="Email"
                >


                </TextInput>
                <TextInput style={style.TextInput}
                    placeholder="Password"
                    value={Password}
                    onChangeText={setpassword}


                >


                </TextInput>

                <View style={style.Button}>
                    <Button

                        title="SIGNUP"
                        onPress={signup}

                    >


                    </Button>


                    <Button

                        title="LOGIN"
                        onPress={login}

                    />



                </View>

            </View>


        )




    }


    const style = StyleSheet.create({

        container: {

            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            marginTop: 2


        },
        TextInput: {
            width: 320,
            height: 70,
            borderColor: "green",
            backgroundColor: "white",
            borderRadius: 20,
            borderWidth: 3,
            margin: 10


        },
        Button: {

            width: 250,
            marginTop: 20,
            height: 60,
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",

        },

    })


