import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import database from '@react-native-firebase/database'




let itemRef = database().ref('/Items');




function Listitem() {

    const [itemArray, SetItemArray] = useState([]);
    const [keys, SetKeys] = useState([]);
    const [ifUpdate, setIfUpdate] = useState(false);
    const [updateText, setUpdateText] = useState('');
    const [updateIndex, setUpdateIndex] = useState(null);
  

    useEffect(() => {


        itemRef.on('value', snapshot => {
            let data = snapshot.val();
            console.log(data)
            const items = Object.values(data);
            SetKeys(Object.keys(data))
            console.log(keys)
            SetItemArray(items);
            
             
            
   
        })

    }, [])
    const handleonfocus=()=>{
       SetItemArray("")
    }
 
    const handleDelete = (index) => {

        let childKey = keys[index];

        itemRef.child(childKey).remove();
    }

    const handleUpdate = (name, index) => {

        setUpdateText(name)
        setUpdateIndex(index)
        setIfUpdate(true)
    }
    const submitUpdate = () => {
        let childKey = keys[updateIndex];
        itemRef.child(childKey).update({
            name: updateText
        })
        setIfUpdate(false)
    }

    return (

        <View>
            {(itemArray.length > 0)
                ?
                ifUpdate
                    ?

                    <View>
                        <TextInput
                            style={style.TextInput}
                            value={updateText}
                            onFocus={() => handleonfocus()} 
                            onchangeText={setUpdateText}/>
                        


                        <Button title="Submit" onPress={() => submitUpdate()} />
                        <Button title="cancel" onPress={() => setIfUpdate(false)} />

                    </View>

                    :
                    <View style={style.Listitem}>


                        {itemArray.map((item, index) => {
                            return (
                                <View style={style.Listitem}>
                                    <Text style={style.text}>{item.name}</Text>

                                    <View style={style.listview2}>
                                        <Button title="update" onPress={() => handleUpdate(item.name, index)}
                                        />

                                        <Button title="Delete " onPress={() => handleDelete(index)}
                                        />

                                    </View>
                                </View>

                            )




                        }



                        )}

                    </View>
                : <Text> no item</Text>

            }



        </View>

    );

}

const style = StyleSheet.create({

    Listitem: {

        //fontSize: 170,

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `#d8bfd8`,

        flexDirection: "column"


    },
    text: {
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold",
        color: "black",
    },
    listview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around",
        flexDirection: "row",
        margin: 2
    },
    listview2: {
        height: 170,
        width: 170,

        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",

    },
    button: {
        flexDirection: "row",
        padding: 6,
        height: 3,
        width: 100,
        margin: 20
    },
    TextInput: {
        borderWidth: 2,
        borderColor: "green"
    }

})




export default Listitem;