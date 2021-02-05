import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'

import {getUser} from './src/graphql/queries'
import { createUser } from './src/graphql/mutations';


 Amplify.configure(config)

 const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

function App() {

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  //RUN when app loads only and useffect should have non-async fn
 useEffect(()=>{
  const fetchUser = async () => {
      //get auth user from auth
    const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true})
//   console.log(userInfo)

    if(userInfo) {
        //get user from backend with user id from auth
        const userData = await API.graphql(graphqlOperation(getUser,
          {
            id: userInfo.attributes.sub
          }
          )
        )
        console.log('99456',userData)

        if(userData.data.getUser) {
          console.log('user is already registered in db')
          return
        }
       //if there is no user in DB with the id, then create one
        const newUser = {
          id:userInfo.attributes.sub,
          name:userInfo.username,
          imageUri:getRandomImage(),
          status:'Hey I am using whatsapp'
        }

      //  console.log(newUser)
        await API.graphql(graphqlOperation(createUser,{input:newUser}))
    }    
  }

  fetchUser()

},[])

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)