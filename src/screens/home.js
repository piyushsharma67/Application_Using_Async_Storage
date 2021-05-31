import React,{useEffect} from 'react'
import { Text,View,Button } from 'react-native'
import {connect} from 'react-redux'
import {ResetFunc} from '../Redux/actions'

const HomeScreen=(props)=>{   
    // useEffect(()=>{
    //     if(isLoggedIn!=true){
    //         navigation.navigate('login')
    //     }
    // },[isLoggedIn]) 
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hi this is home Screen</Text>
            <Button 
                title="Reset" 
                onPress={()=>{
                    props.dispatch(ResetFunc())
            }}/>            
        </View>
    )
}

const mapStateToProps=(state,props)=>{
    return {
        isLoggedIn:state.AuthReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(HomeScreen)
