import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


export default function VerifyCode(props) {
    const [code, setCode] = useState('');
    return (
        <View style={style.container}>
            <Text> Enter OTP</Text>
            <TextInput
            style={style.TextInput}
                autoFocus
                keyboardType="numeric"
                value={code}
                onChangeText={setCode}
            />


            <Button

                title=" Confirm OTP" onPress={() => props.onSubmit(code)}
            />
        </View>



    )

}
const style=StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"

    },
    TextInput:{
height:70,
width:270,
backgroundColor:"white",
borderColor:"black",
borderWidth:3,
margin:30


    }
})