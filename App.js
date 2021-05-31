import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Screens from './src/Navigation/stack_app_navigation'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './src/Redux/store'

const app=()=>{
  return (
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor} >
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
     </PersistGate>    
  </Provider>
  )
}

export default app