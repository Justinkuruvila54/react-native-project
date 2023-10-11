

import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay'
function App() {

const handlePayment =() => {
  var options ={
    name:'inmakes',
    description: "for test payment",
    currenct:'INR',
    amount:1000000,
    key:"rzp_test_3FuFDOkWRKqiii",
    prefill:{
      email:"jjjj@gmail.com",
      contact:"1234567890",
      name:"demo"
    },
    theme:{color:'#f37251'}
  }

RazorpayCheckout.open(options).then((data) => {
  console.log("data",data)
  Alert.alert('sucess');
})

.catch((error)=>{

  Alert.alert(`Error :${error.code} | ${error.description}`)
})

}


  return (
    <View style={style.container}>
      <Image
        style={style.productImg}
        source={require("./assets/book1.jpg")}

      />
      <Text style={style.text1}>Book</Text>
      <Text style={style.text2}>Rs 100 </Text>
      <View   style={style.button}>
        <Button
         
          title='Buy' onPress={() =>handlePayment()}/>
      </View>
    </View>
  )

}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   paddingTop:190,
    backgroundColor:"#607d8b"
   
  },
  productImg: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
   text1: {
    fontSize: 23,
   color:"#03a9f4"
  },
  text2: {
    fontSize: 30,
   color:"red",
   marginTop:40
  },
  button: {
    width: 200,
    height: 300,
    marginTop:40
  }

})

export default App;
