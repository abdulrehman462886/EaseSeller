import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState , useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

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

    setIsLoading(true); // Set loading to true when login process starts

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully:', userCredential.user);
      // You can navigate to another screen upon successful login
      navigation.navigate('Home');
    } catch (error) {
      console.log('Login error:', error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setPasswordError('Invalid email or password');
      }
    } finally {
      setIsLoading(false); // Set loading to false when login process ends
    }
  };
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in, navigate to Home screen
        navigation.push('Home');
      }
    });

    // Clean up subscription on unmount
    return unsubscribe;
  }, []);
  return (
    isLoading ? (
      <View style={styles.container}>
        {isLoading && <Animatable.Image source={require("../assets/images/splash.png")} style={{ width: 100, height: 100 }} />}
      </View>
    ) :
    <View style={styles.container}>
      <Animatable.Text style={styles.loginText} animation="slideInUp" useNativeDriver={true}>
        Login
      </Animatable.Text>

      <TextInput
        style={[styles.textInput, emailError && styles.errorInput]}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}

      <TextInput
        style={[styles.textInput, passwordError && styles.errorInput]}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        keyboardType={'number-pad'}
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.btnTxt}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
    backgroundColor: '#240A34',
    color: "white"
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    width: '30%',
    height: 40,
    backgroundColor: '#240A34',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  btnTxt: {
    fontWeight: '900',
    color: "white"
  },
});
