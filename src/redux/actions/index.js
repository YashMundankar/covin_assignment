export const updateData=(data)=>{
    return {
        type : 'Update Data',
        payload : data
    }
}

export const updateSingleUserData=(data)=>{
    return {
        type : 'Update Single User Data',
        payload : data
    }
}

export const updateBtn=(id)=>{
    return {
        type : 'Update Btn',
        payload : id
    }
}


export const displayAction=()=>{
    return {
        type : 'Update Display',
        payload : true
    }
}