import React, {useState} from 'react';
import { StyleSheet, View, FlatList,  Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './MyCardsProject/header';
import Item from './MyCardsProject/item';
import Input from './MyCardsProject/input';


export default function App() { 

   
  const[cards, setCards] = useState([
    {
      firstName: '',
      secondName: '',
      age:'',
      key: Math.random().toString()
    }
  ]);

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
          <Header></Header>
          <View style={styles.content}>
            <Input submitHandler={submitHandler}></Input>
            <View style={styles.list}>
              <FlatList 
              data={cards}
              renderItem={({item}) => (
                <Item item={item} pressHandler={pressHandler}/>
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
   }
 });