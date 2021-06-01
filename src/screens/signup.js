import { useFocusEffect } from '@react-navigation/native'
import React,{useEffect, useState} from 'react'
import { Text,View,TextInput ,StyleSheet,Dimensions,Button, Alert, ScrollView} from 'react-native'
import {connect} from 'react-redux'
const {width,height}=Dimensions.get('screen')
import {SignUpDetails,ResetFunc} from '../Redux/actions'

const signUpScreen=(props)=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')


   useEffect(()=>{
       if(props.isSignedUp==true){
        console.log("isSignedUp",props.isSignedUp)
        props.navigation.navigate("login")        
    }      
   },[props.isSignedUp])

    return (
        <View style={style.container}>
            <ScrollView keyboardShouldPersistTaps='handled'>
            <Text style={{fontSize:20,marginTop:height*0.1,marginBottom:height*0.02,alignSelf:'center'}}>Signup</Text>
            <View style={{justifyContent:'flex-start',alignItems:'center'}}>   
                <Text>Enter Name</Text>             
                <TextInput 
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={(value)=>setName(value)}
                    style={style.input}
                />
            </View>
            <View style={{justifyContent:'flex-start',alignItems:'center'}}>
                <Text>Enter Email</Text>
                <TextInput 
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={(value)=>setEmail(value)}
                    style={style.input}
                />
            </View>             
            <View style={{justifyContent:'flex-start',alignItems:'center'}}>
                <Text>Enter Password</Text>
                <TextInput 
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={(value)=>setPassword(value)}
                    style={style.input}
                />
            </View>             
            <View style={{justifyContent:'flex-start',alignItems:'center'}}>
                <Text>Enter Phone</Text>
                <TextInput 
                    placeholder="Enter phone"
                    value={phone}
                    keyboardType='number-pad'
                    onChangeText={(value)=>setPhone(value)}
                    style={style.input}
                />
            </View>
            <Button 
            onPress={()=>
            {
                if(email=="" || password =="" || name==""||  phone==""){
                   return  Alert.alert(
                       "Error Occured",
                       "Any Feild cannot be left empty"
                    )
                }
                else if(email){
                    let reg=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    if (reg.test(email)==0){
                        return Alert.alert(
                            "Error Occured",
                            "Please enter valid email"
                        )
                    }
                }
                props.dispatch(SignUpDetails({email,password,name,phone}))    
                setEmail('')
                setPassword('')
                setName('')
                setPhone('')           
            }
            }
            title="Submitt"
            style={{width:width*0.4}}/>
            {/* <Button 
                title="Reset" 
                style={{marginTop:40}}
                onPress={()=>{
                    props.dispatch(ResetFunc())
                    
            }}/> */}
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
        isSignedUp:state.AuthReducer.isSignedUp
    }
}

export default connect(mapStateToProps)(signUpScreen)
