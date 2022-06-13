const initalState=[];

const DataReducer=(state=initalState,action)=>{
    switch(action.type){
        case 'Update Data':return [...action.payload]
        default : return state
        
    }
}

export default DataReducer;