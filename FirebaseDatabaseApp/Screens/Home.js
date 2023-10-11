import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native"



function Home({navigation}) {

    return (

        <View>
            <Text> welcome to Home page</Text>
<Button
    title="Add items"
  onPress={() => navigation.navigate ('Additem')}
   
    
    />
<Button
    title="List item"
  onPress={() => navigation.navigate ('Listitem')}/>

        </View>

    )

}
export default Home;