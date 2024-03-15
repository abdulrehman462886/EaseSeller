import {StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login")
        }, 2000)
    }, [])


  return (
    <View style={styles.container}>
      <Animatable.Image
        source={require("../assets/images/splash.png")}
        style={styles.image}
        animation="fadeInUp" // Choose your desired animation
        useNativeDriver={true} // Enable native driver for smoother animations
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7DED0"
  },
  text: {
    fontSize: 35,
    fontWeight: "700",
    color: "black",
  },
});
