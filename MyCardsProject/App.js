import React, {useState} from 'react';
import { StyleSheet, View,Text,TextInput,Button,TouchableOpacity, FlatList,  Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';



export default function App() { 

   
  const[cards, setCards] = useState([
    {
      firstName: '',
      secondName: '',
      age:'',
      key: Math.random().toString()
    }
  ]);

  const[textFirst, setTextFirst] = useState('');
  const[textSecond, setTextSecond] = useState('');
  const[textAge, setTextAge] = useState('')

  const handleFirstName = (text) => {
    setTextFirst(text)
  };
  const handleSecondName = (text) => {
    setTextSecond(text)
  };
  const handleAge = (text) => {
    setTextAge(text)
  };
  

  const pressHandler = (key) => {
    Alert.alert(
      "Message",
      "Remove this card?",
      [
        {
          text:"Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {setCards((card) => {
            return card.filter(nameItem => nameItem.key !== key)
          })}
        }
      ],
    );
  };

  const submitHandler = () => {
    setCards((prevCards) => {
      return [
        {
          firstName: textFirst,
          secondName: textSecond,
          age: textAge,
          key: Math.random().toString()
          },
          ...prevCards
      ];
    });
  };

   return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}> My Cards </Text>
        </View>
          <View style={styles.content}>
          <View>
              <TextInput
                style={styles.input} 
                placeholder = 'e.g. Angey'
                onChangeText={handleFirstName}
              />
              <TextInput
                style={styles.input} 
                placeholder = 'e.g. Ivanov'
                onChangeText={handleSecondName}
              />
              <TextInput
                style={styles.input} 
                placeholder = 'e.g. 35'
                keyboardType = 'numeric'
                onChangeText={handleAge}
              />
              <Button 
                color= 'orange'
                onPress = {() => submitHandler()}
                title = 'Add card'
              />
            </View>
            <View style={styles.list}>
              <FlatList 
              data={cards}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                  <Text style={styles.item}>
                      {item.firstName } {item.secondName } {item.age}
                  </Text>
               </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white',
   },
   content: {
     padding: 40,
     flex: 1
   },
   list: {
     marginTop: 20,
     flex: 1
   },
   text: {
     textAlign: 'center',
     color: 'green',
     fontSize: 15,
     fontWeight: 'bold'
   },
   input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'orange'
},
title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
}
 });