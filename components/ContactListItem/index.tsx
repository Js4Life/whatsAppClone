import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, User } from '../../types';
var moment = require('moment');
import styles from './style';
import {useNavigation} from '@react-navigation/native'

export type ContactListItemProps = {
    user: User
}
const ContactListItem = (props: ContactListItemProps) => {

    const { user } = props;

  


    const navigation = useNavigation();
    const onclick = () =>{
       // console.warn(`Clicked on ${user.name}`)
        //navigae to chat room
    }

    return (
        <TouchableWithoutFeedback onPress={onclick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
};

export default ContactListItem;