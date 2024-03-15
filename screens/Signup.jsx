import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";

const Signup = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const createAccount = async () => {
        setIsLoading(true); 
        try {
          await auth().createUserWithEmailAndPassword(email, password); // Correct usage: auth()
          console.log("Account created Successfully");
          navigation.goBack();
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false); 
        }
      };
      

    const handleSignup = () => {
        // Reset all errors
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        // Validation checks
        if (name.trim() === '') {
            setNameError('Name is required');
            return;
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email');
            return;
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
            return;
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return;
        }

        if (confirmPassword.trim() === '') {
            setConfirmPasswordError('Please confirm your password');
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }

        createAccount();
    };

    return (
        isLoading ? (
          <View style={styles.container}>
            {isLoading && <Animatable.Image source={require("../assets/images/splash.png")} style={{ width: 100, height: 100 }} />}
          </View>
        ) : (
          <View style={styles.container}>
            <Animatable.Text style={styles.loginText} animation="slideInUp" useNativeDriver={true}>
              Signup
            </Animatable.Text>
      
            <TextInput
              style={styles.textInput}
              placeholder="Enter your Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
            {nameError && <Text style={styles.errorText}>{nameError}</Text>}
      
            <TextInput
              style={styles.textInput}
              placeholder="Enter your Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
            />
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}
      
            <TextInput
              style={styles.textInput}
              placeholder="Enter your Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />
            {confirmPasswordError && <Text style={styles.errorText}>{confirmPasswordError}</Text>}
      
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.btnTxt}>Signup</Text>
            </TouchableOpacity>
      
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        )
      );
      
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 20,
    },
    loginText: {
        fontSize: 34,
        fontWeight: '600',
        color: 'white',
        marginBottom: 30,
    },
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: "#240A34"
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    button: {
        width: "30%",
        height: 40,
        backgroundColor: "#240A34",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 10
    },
    btnTxt: {
        fontWeight: "900",
    }
});