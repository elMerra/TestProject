import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";


function DateScreen({ navigation }) {
        return (
            
            <View style={styles.container}>
                <Text>Date Screen</Text>
            </View>
        );
    }

export default DateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    }
});