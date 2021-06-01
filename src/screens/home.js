import React,{useEffect} from 'react'
import { Text,View,Button } from 'react-native'
import {connect} from 'react-redux'
import {ResetFunc} from '../Redux/actions'
import { Icon } from 'react-native-elements/'

const HomeScreen=(props)=>{   
    useEffect(()=>{
        if(props.isLoggedIn!=true){
            console.log("logged in",props.isLoggedIn)
            props.navigation.navigate('login')
        }
    },[props.isLoggedIn]) 

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
            <Icon
                onPress={() => props.navigation.navigate("survey")}
                name="add"
                type="ionicon"
                color="black"
                size={25}
                style={{marginLeft:30}}
            />
          ),
        });
      }, [props.navigation]);
    
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
