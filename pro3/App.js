import React, { Component, useState } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  Vibration


} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyComponent = () => {
  const [data, setdata] = useState("")

  const Add = async () => {
    try {
      await AsyncStorage.setItem("note", "hi welcome 7890bbbhhh")

    } catch (e) {
      console.error(e);

    }
  }
  const get = async () => {
    try {
      const value = await AsyncStorage.getItem("note")
      if (value != null) {
        setdata(value);
      }

    } catch (e) {
      console.error(e);

    }
  }



  return (

    <View style={style.container}>
      <Text style={style.text}> {data}

      </Text>
      <View style={style.button}>
        <Button

          title={"EDIT TEXT"}


        />
      </View>
      <View style={style.button}>
        <Button

          title={"Add"}
          onPress={Add}

        >
        </Button>
      </View>
      <View style={style.button}>
        <Button

          title={"get"}
          onPress={get}

        />
      </View>


      <TouchableHighlight style={style.get}>
        <Text style={style.gettext}>Get text

        </Text>
      </TouchableHighlight>
    </View>

  )


}




const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    alignItems: 'center',
    backgroundColor: "#fff8dc",
    marginTop: 30



  },
  text: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    marginStart: 30,
    fontStyle: "italic"
  },
  get: {
    backgroundColor: "green",
    height: 40,
    width: 180,
    alignItems: "center",
    fontSize: 50,
    color: "white",
    marginTop: 20

  },
  gettext: {
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white"


  },
  button: {
    marginTop: 40,
    width: 205,
    height: 50
  }

})

export default MyComponent