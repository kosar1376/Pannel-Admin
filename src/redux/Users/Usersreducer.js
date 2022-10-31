const initialstateusers={
    loading:false,
    users:[],
    user:{},
    error:""
}


const usersRedecer=(state=initialstateusers,action)=>{
    switch(action.type)
    {
        case "FETCH_USERS_REQUEST":
            return{
                ...state,
                loading:true,
            }

            case "FETCH_USERS_SUCCESS":
                return{
                    ...state,
                    loading:false,
                    users:action.payload,
                   
                }

                case "FETCH_USERS_FAILIARE":
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }

                    
                    case "GET_SINGLE_USER":
                        return{
                            ...state,
                            user:action.payload
                        }

                        case "UPDATE_USER" :
                            return{
                                ...state
                            }



        default:
            return state;
    }

}

export default usersRedecer;