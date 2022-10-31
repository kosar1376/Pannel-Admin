import axios from "axios";


const fetchusersRequest=()=>{
    return{
        type:"FETCH_USERS_REQUEST"
    };
};


const fetchusersSuccess=(users)=>{
    return{
        type:"FETCH_USERS_SUCCESS",
        payload:users

    };
};


const fetchusersFaliare=(error)=>{
    return{
        type:"FETCH_USERS_FAILIARE",
        payload:error
    };
};

const deleteUser = () => {
    return {
      type: "DELETE_USER",
    };
  };

  const getOneuser = (user) => {
    return {
      type: "GET_SINGLE_USER",
      payload: user,
    };
  };

  const updateUser = () => {
    return {
      type: "UPDATE_USER",
    };
  };


export const fetchusers=()=>{
    return (dispatch)=>{
        dispatch(fetchusersRequest());
        axios.get("http://localhost:8000/users")
        .then(response=>{
            const users=response.data;
            dispatch(fetchusersSuccess(users));
        })
        .catch((error)=>{
            const errorm=error.message;
            dispatch(fetchusersFaliare(errorm))

        })

        }


    }

    
export const Deleteuser = (id) => {
    return (dispatch) => {
      axios
        .delete(`http://localhost:8000/users/${id}`)
        .then((response) => {
          const Del = response.data;
          dispatch(deleteUser());
        })
  
        .catch((error) => {
          const errormsg = error.message;
          console.log(errormsg);
        });
    };
  };

  export const getSingleuser = (id) => {
    return (dispatch) => {
      axios
        .get(`http://localhost:8000/users/${id}`)
        .then((response) => {
          const single = response.data;
          dispatch(getOneuser(single));
        })
  
        .catch((error) => {
          const errormsg = error.message;
          console.log(errormsg);
        });
    };
  };


  export const userUpdator = (id, user) => {
    return (dispatch) => {
      axios
        .put(`http://localhost:8000/users/${id}`, user)
        .then((response) => {
          const update = response.data;
          dispatch(updateUser());
        })
  
        .catch((error) => {
          const errormsg = error.message;
          console.log(errormsg);
        });
    };
  };



  
      

