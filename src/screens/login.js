import { useFocusEffect } from '@react-navigation/native'
import React,{useState,useEffect} from 'react'
import { Text,View,TextInput ,StyleSheet,Dimensions,Button, Alert, ScrollView} from 'react-native'
import {connect} from 'react-redux'
const {width,height}=Dimensions.get('screen')
import {UserLoggedIn,ResetFunc} from '../Redux/actions'

const loginScreen=({dispatch,navigation,email,password,isLoggedIn})=>{

    const [useremail,setEmail]=useState('')
    const [userpassword,setPassword]=useState('')
   
    useEffect(()=>{
        if (isLoggedIn){
            navigation.navigate('home')
        }    
    },[isLoggedIn])

    return (
        <View style={style.container}>
            <ScrollView keyboardShouldPersistTaps='handled'>
            <Text style={{fontSize:20,marginTop:height*0.1,marginBottom:height*0.02,alignSelf:'center'}}>Login</Text>
            <View style={{justifyContent:'flex-start',alignItems:'center'}}>
                <Text>Enter Email</Text>
                <TextInput 
                    placeholder="Enter Email"
                    value={useremail}
                    onChangeText={(value)=>setEmail(value)}
                    style={style.input}
                />
            </View>             
            <View style={{justifyContent:'flex-start',alignItems:'center'}}>
                <Text>Enter Password</Text>
                <TextInput 
                    placeholder="Enter Password"
                    value={userpassword}
                    onChangeText={(value)=>setPassword(value)}
                    style={style.input}
                />
            </View>             
            <Button 
            onPress={()=>
            {
                if(email=="" || password ==""){
                    Alert.alert(
                       "Error Occured",
                       "Please enter email or password"
                    )
                }
                else if (email!=useremail || password !=userpassword){
                    Alert.alert("Error Occured","Credentials Invalid")
                }
                if (useremail===email && userpassword==password){
                    dispatch(UserLoggedIn)
                    navigation.navigate("home")
                }
            }}       
            title="Login"
            style={{width:width*0}}/>
            <Button 
                title="Reset" 
                onPress={()=>{
                    dispatch(ResetFunc())
            }}/>
            </ScrollView>            
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        flexDirection:'column',
        alignItems:'center'
    },
    input:{
        width:width*0.9,
        borderWidth:2,
        textAlign:'center',
        marginVertical:5,
        color:'black'
    }
})

const mapStateToProps=(state,props)=>{
    return {
        email:state.AuthReducer.email,
        password:state.AuthReducer.password,
        isLoggedIn:state.AuthReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(loginScreen)
