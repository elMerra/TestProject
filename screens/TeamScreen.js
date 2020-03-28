import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

function TeamScreen({ navigation }) {
        return (
            
            <View style={styles.container}>
                <Text>Team Screen</Text> 
            </View>
        );
    }

export default TeamScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    }
});