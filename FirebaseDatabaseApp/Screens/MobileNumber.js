import React, { useState } from "react";
import { StyleSheet,View,Text,TextInput,Button } from "react-native";


export default function MobileNumber(props){
const [phoneNumber,SetPhoneNumber] =useState(null);
return(

<View style={style.container
}>
<Text> Enter Phone Number</Text>
<TextInput
style={style.TextInput}
autoFocus
value={phoneNumber}
onChangeText={SetPhoneNumber}
/>
<Button title="Sign In With OTP" onPress={() => props.onSubmit(phoneNumber)} />

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
margin:30,
borderWidth:3


    }
})