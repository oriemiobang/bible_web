import { useAuthContext } from "./useAuthContext";
// import { useWorkoutContext } from "./userBibleContext";
import { useBibleContext } from "./userBibleContext";

export const useLogout = ()=> {
    const {dispatch}  = useAuthContext();
    const {dispatch: bibleDispatch} = useBibleContext();

    const logout = ()=> {
        // remove user from the local storage
        localStorage.removeItem('user');
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        bibleDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}

}