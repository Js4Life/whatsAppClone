import React from 'react'
import { Text } from 'react-native'
import { View } from '../Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const NewMessageButton = () => {

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Contacts')
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
                
             <MaterialCommunityIcons name="message-reply-text" size={28} color="white">                
             </MaterialCommunityIcons>
             </TouchableOpacity>
             </View>
    )
     
}
export default NewMessageButton;