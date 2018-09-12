// import * as actions from '../actions'


export default (state=null,action)=>{
    
    switch (action.type){
        case 'Select_Library':
        return action.payload
        default:
        return state;
    }
}