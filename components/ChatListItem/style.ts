import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        padding:10,
    },
    lefContainer: {
        flexDirection:'row'
    },
    midContainer:{
        justifyContent:'space-around'
    },
    avatar: {
        width:60,
        height:60,
        marginRight:15,
        borderRadius:50
    },
    username:{
        fontWeight:'bold'
    },
    lastmsg:{
        fontSize:16,
        color:'grey',
        
    },
    time:{
        fontSize:16,
        color:'grey' 
    }
})

export default styles;