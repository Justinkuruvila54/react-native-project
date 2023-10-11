import React from "react";

import {View,Text,StyleSheet} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Additem from "./Screens/Additem";
import Listitem from "./Screens/Listitem";
import Login from "./Screens/Login";
import MobileLogin from "./Screens/MobileLogin"
const Stack=createStackNavigator();

function App(){
return(
///<View style={style.container}>
  <NavigationContainer>

<Stack.Navigator>
 {/*<Stack.Screen name ="Login"  component={Login} ></Stack.Screen> */}

 <Stack.Screen name="MobileLogin"  component={MobileLogin}></Stack.Screen>

<Stack.Screen name="Home"  component={Home}></Stack.Screen>

<Stack.Screen name="Additem"  component={Additem}></Stack.Screen>

<Stack.Screen name="Listitem"  component={Listitem}></Stack.Screen>

</Stack.Navigator>

  </NavigationContainer>
//</View>

)

}

const style=StyleSheet. create({
container:{
flex:1,
backgroundColor:"red",
alignItems:"center",
justifyContent:"center",


},
text:{
fontSize:30

},





})
export default App;