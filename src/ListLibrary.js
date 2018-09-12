import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';


class ListLibrary extends Component {
    constructor(props) {
        super(props)
        
    }
    renderItem(library){
        return(
            <ListItem library ={library} />
        )
    }
   
    render() {
        return (
            <View>
                <FlatList data = {this.props.libraries} 
                          renderItem = {this.renderItem}
                          keyExtractor={(library)=>library.id}
                />
            </View>
        )   
    }
}

const mapStateToProps = (state) => {
    return {libraries:state.libraries};
}

export default connect(mapStateToProps)(ListLibrary);