import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import SignupScreen from '../screens/signup'

import LoginScreen from '../screens/login'
import HomeScreen from '../screens/home'
import SurveyScreen from '../screens/survey'

const Stack=createStackNavigator()

const Navigation=(props)=>{
    console.log("props nav",props)
    return (
        <Stack.Navigator >
            <Stack.Screen name="signup" component={SignupScreen} options={{headerTitleAlign:'center'}}/>
            <Stack.Screen name="login" component={LoginScreen} options={{headerTitleAlign:'center',headerLeft:null}}/>
            <Stack.Screen name="home" component={HomeScreen} options={{headerTitleAlign:'center',headerLeft:null,
                }}/>
            <Stack.Screen name="survey" component={SurveyScreen} />
        </Stack.Navigator>
    )
}

export default Navigation