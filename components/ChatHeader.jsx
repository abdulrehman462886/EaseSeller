import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth'; // Import Firebase auth module
import { useNavigation } from '@react-navigation/native';

const ios = Platform.OS == 'ios';

const ChatHeader = () => {
    const navigation = useNavigation();
    const top = useSafeAreaInsets().top;

    // Function to handle sign-out
    const handleSignOut = async () => {
        try {
            const currentUser = auth().currentUser;
            if (currentUser) {
                await auth().signOut(); // Sign out the current user
                navigation.navigate("Login")
            } else {
                console.warn('No user is currently signed in.');
            }
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    

    return (
        <View style={[styles.container, { paddingTop: ios ? top : top + 30 }]}>
            <Animatable.Text animation="slideInLeft" useNativeDriver={true} style={styles.text}>Chats</Animatable.Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text style={styles.signOut}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChatHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "indigo",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold'
    },
    signOut: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold'
    }
});
