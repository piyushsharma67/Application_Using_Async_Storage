import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import SignupScreen from '../screens/signup'
import { Icon } from 'react-native-elements/'
import LoginScreen from '../screens/login'
import HomeScreen from '../screens/home'
import SurveyScreen from '../screens/survey'

const Stack=createStackNavigator()

const Navigation=(props)=>{
    return (
        <Stack.Navigator >
            <Stack.Screen name="signup" component={SignupScreen} options={{headerTitleAlign:'center'}}/>
            <Stack.Screen name="login" component={LoginScreen} options={{headerTitleAlign:'center'}}/>
            <Stack.Screen name="home" component={HomeScreen} options={{headerTitleAlign:'center',
                    headerRight: () => (
                       <Icon
                        onPress={() => props.navigation.navigate("survey")}
                        name="add"
                        type="ionicon"
                        color="#fff"
                        />
                    )}}/>
            <Stack.Screen name="survey" component={SurveyScreen} />
        </Stack.Navigator>
    )
}

export default Navigation