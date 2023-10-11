import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight,StyleSheet } from "react-native"
import database from "@react-native-firebase/database";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Alert } from "react-native";

let additem = item => {

    database().ref('/Items').push({

        name: item
    })


}
function Additem() {
    const [name, setName] = useState('');

    const handlesubmit = () => {

        additem(name)
        setName('');
        Alert.alert('item add succesfully')

    }
    return (

        <View style={style.Main}>
            <Text style={style.title}> Additem page</Text>
            <TextInput 
            style={style.TextInput}
            
            onChangeText={text => setName(text)}/>
            <TouchableHighlight

            style={style.Button}
               onPress = {handlesubmit}>


                <Text style={style.text}> ADD</Text>
            </TouchableHighlight>
        </View>

    )

}
const style= StyleSheet.create({

Main:{
    flex:1,
    backgroundColor:`#4682b4`,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
  margin:2,
    

},
TextInput:{
backgroundColor:"#fff",
borderRadius:20,
width:230,
height:50,
paddingTop:13,
marginTop:15
},
Button:{
alignItems:"center",
justifyContent:"center",

   borderColor:"White" ,
   backgroundColor:`#2f4f4f`,
   width:150,
   height:50,
   margin:30,
   borderRadius:30
},
text:{
    fontSize:20,
    fontWeight:"bold",
    color:`#f5f5f5`
},
title:{

    fontSize:25,
    fontWeight:"bold",
    color:`#f5f5f5`
}
})
export default Additem;