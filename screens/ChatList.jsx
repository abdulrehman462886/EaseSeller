import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const chatData = [
  { id: '1', user: 'User 1', message: 'Hello there!' },
  { id: '2', user: 'User 2', message: 'Hi! How are you?' },
  // Add more chat data as needed
];

const ChatList = () => {
  const navigation = useNavigation();

  const navigateToChat = (user) => {
    navigation.navigate('Chat', { user });
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToChat(item.user)}> 
      <View style={styles.chatItem}>
        <Text style={styles.username}>{item.user}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontWeight: 'bold',
  },
  message: {
    marginTop: 5,
  },
});
