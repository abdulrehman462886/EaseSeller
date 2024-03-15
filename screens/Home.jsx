import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Animatable.Text style={styles.text} animation="slideInDown" useNativeDriver={true} duration={2000}>Welcome to Chat Mania</Animatable.Text>
            <Animatable.Text style={styles.textTwo} animation="slideInUp" useNativeDriver={true} duration={3000}>Chat fater than the speed of light with Chat Mania</Animatable.Text>
            <Animatable.View style={styles.buttonContainer} animation="bounceIn" useNativeDriver={true} delay={3000}>
                <TouchableOpacity onPress={()=>navigation.navigate("ChatList")}><Text style={styles.buttonText}>Chat</Text></TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        padding: 20
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "700"

    },
    textTwo: {
        color: "white",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        marginTop: 10
    },
    buttonContainer: {
        width: 100,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#000000",
        marginTop: 40
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "700",
        color: "white"
    }
})