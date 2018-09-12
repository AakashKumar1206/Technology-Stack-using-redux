/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import { View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers'
import ListLibrary from './src/ListLibrary';
import  Header  from "./src/Common/Header";


export default class App extends Component{
    render() {
        return (
             <Provider store={createStore(reducers)}>
                
                <View>
                    <Header title = {"TechStack"} />
                    <ListLibrary />
                </View>

             </Provider>
        );
    }
}