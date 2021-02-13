import React from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';

export default function Input({submitHandler}) {

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


    return(
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
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
      }
})