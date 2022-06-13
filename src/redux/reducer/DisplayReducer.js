const initalState=false;

const DisplayReducer=(state=initalState,action)=>{
    switch(action.type){
        case 'Update Display':return action.payload
        default : return state
        
    }
}

export default DisplayReducer;