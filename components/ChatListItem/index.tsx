import React from 'react'
import { View, Text, Image } from 'react-native';
import { ChatRoom } from '../../types';
var moment = require('moment');
import styles from './style';

export type ChatListItemProps = {
    chatRoom: ChatRoom
}
const ChatListItem = (props: ChatListItemProps) => {

    const { chatRoom } = props;
    const user = chatRoom.users[1]
    console.log('8845', user.imageUri)

    return (
        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={2} style={styles.lastmsg}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
            {/* <Text style={styles.time}>Yesterday</Text> */}
        </View>
    )
};

export default ChatListItem;