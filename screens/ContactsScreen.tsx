import * as React from 'react';
import { StyleSheet, FlatList, } from 'react-native';
import { View } from '../components/Themed';

import ChatListIem from '../components/ChatListItem'
import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';
import ContactListItem from '../components/ContactListItem';
import Users from '../data/Users';



export default function ContactsScreen() {
  console.log('9945', ChatRooms[0])
  return (
    <View style={styles.container}>
      {/* <ChatListIem chatRoom={ChatRooms[0]} /> */}
      <FlatList
        style={{ width: "100%" }}
        data={Users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
