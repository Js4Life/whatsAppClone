import React, { useState } from 'react'
import { View } from '../Themed'
import { Text ,TextInput} from 'react-native'
import styles from '../InputBox/styles'
import { MaterialCommunityIcons, FontAwesome5 ,Entypo,Fontisto, MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


const InputBox = () => {

    const [msg,SetMsg] = useState('');

   const onMicroPhonePress = () => {
       console.warn('microphone')
   }

   const onSendPress = () => {
       console.warn('sending to backend')
       SetMsg('')
   }

    const onPress = () => {
        if(!msg) {
            onMicroPhonePress()
        } else {
            onSendPress()
        }
    }

    return (
     <View style= {styles.container}>

            <View style= {styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color="grey" />
            <TextInput  style={styles.textInput} multiline value={msg} onChangeText={SetMsg} placeholder={"Type a message"}/>
            <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
            {!msg && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}
            </View>

        <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
            {!msg ?   <MaterialCommunityIcons name="microphone" size={28} color="white"/> :   <MaterialIcons name="send" size={28} color="white"/>}
          </View>
        </TouchableOpacity>
    </View>
    )
}

export default InputBox;