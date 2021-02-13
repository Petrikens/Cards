import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Item({item}){

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
                  <Text style={styles.item}>
                      {item.firstName } {item.secondName } {item.age}
                  </Text>
               </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
      }
})