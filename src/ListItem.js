import React, { Component } from 'react';
import { View,Text , TouchableWithoutFeedback} from 'react-native';
import CardSection from './Common/CardSection'
import { connect } from 'react-redux';
import * as actions from './actions'

class ListItem extends Component {
    
    renderLibraryDescription(){
        if(this.props.library.item.id===this.props.selectedLibraryId){
            <Text>{this.props.library.item.description}</Text>
        }
    }
    SelectLibrary(){
       return this.props.library.item.id;
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.SelectLibrary}>
                <CardSection>
                    <View>
                        <Text>{this.props.library.item.title}</Text>
                    </View>
                    <CardSection>{this.renderLibraryDescription()}</CardSection>
                </CardSection>

               
             </TouchableWithoutFeedback>
        );
    }
}



const mapStateToProps = state =>{
    return {selectedLibraryId:state.selectedLibraryId}
}
export default connect (mapStateToProps,actions) (ListItem);
