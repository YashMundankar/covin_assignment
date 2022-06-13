const initalState='';

const BtnReducer=(state=initalState,action)=>{
    switch(action.type){
        case 'Update Btn':return action.payload;
        default : return state
        
    }
}

export default BtnReducer;