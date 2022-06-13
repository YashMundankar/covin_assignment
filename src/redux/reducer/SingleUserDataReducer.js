const initalState={data:{id:0,email:"--",first_name:"--",last_name:"--",avatar:"#"},support:{url:"https://reqres.in/#support-heading",text:"To keep ReqRes free, contributions towards server costs are appreciated!"}};

const SingleUserDataReducer=(state=initalState,action)=>{
    switch(action.type){
        case 'Update Single User Data':return action.payload
        default : return state
        
    }
}

export default SingleUserDataReducer;