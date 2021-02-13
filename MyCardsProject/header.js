import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.titile}> My Cards </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop:38,
        backgroundColor:'green'
    },
    title: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold'
    }
})