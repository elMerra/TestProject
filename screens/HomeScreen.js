import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";


function HomeScreen({ navigation }) {
        return (
            
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});