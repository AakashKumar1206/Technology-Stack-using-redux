import React, { Component } from 'react'
import { TextInput,Text } from 'react-native';
import firebase from 'firebase';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import Input from './Input'
import Spinner from'./Spinner'



export default class Inputfields extends Component{

constructor(props){
    super(props)
    this.state={email:'',password:'',error:'',loading:false};
};
onButtonPress(){
    const {email,password}=this.state;
    this.setState({error:'',loading:true});

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this))
        })
    }


onLoginSuccess() {
    this.setState({
        email:'',
        password:'',
        loading:false,
        error:''
    });
}

onLoginFail(){
    this.setState({
        loading:false,
        error:'Authentication Failed'
    });
};
renderButton(){
    if(this.state.loading){
        return <Spinner size='small'/>;
    }

    return (
        <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    )

}


    render(){
        return (
            <Card> 
            <CardSection>    
                <Input 
                    secureTextEntry={false}
                    label='Email'
                    value={this.state.email} 
                    onChangeText ={email=>this.setState({email})} 
                    placeholder='abc@example.com'>
                </Input> 
            </CardSection>
            <CardSection>
                <Input 
                    secureTextEntry
                    label='Password'
                    value={this.state.password} 
                    onChangeText ={password=>this.setState({password})} 
                    placeholder='Password'>
                </Input> 
            </CardSection>
           <Text style={styles.errorStyle}>
               {this.setState.error}
           </Text>
            <CardSection> 
                {this.renderButton()}
            </CardSection>
            
            </Card>
        )
    }

}

const styles={
    Inputs:{
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    errorStyle:{
        fontSize:20,
        color:'red',
        alignSelf: 'center',
    }
}


