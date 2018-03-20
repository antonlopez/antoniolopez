



const INITIAL_STATE = {
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type){

        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                index: action.index
            };

        case 'LOGIN_USER_LOADING':
            return {
                ...state, loading: true
            };


        default:
            return state;





    }



}