import * as React from 'react';
import { StyleSheet ,FlatList,} from 'react-native';
import { View } from '../components/Themed';

import ChatListIem from '../components/ChatListItem'
import ChatRooms from '../data/ChatRooms';



export default function ChatScreen() {
  console.log('9945',ChatRooms[0])
  return (
    <View style={styles.container}>
      {/* <ChatListIem chatRoom={ChatRooms[0]} /> */}
      <FlatList 
      style={{width:"100%"}}
      data={ChatRooms}
      renderItem={ ({item}) => <ChatListIem chatRoom={item} /> }
      keyExtractor={(item)=> item.id}
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
