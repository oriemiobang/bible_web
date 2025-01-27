// import { WorkoutsContext } from "../context/WorkoutContext";
import { BibleContext } from "../context/BibleContext";
import { useContext} from "react";


 export const useBibleContext = ()=>{
    const context = useContext(BibleContext)

    if(!context){
        throw new Error('users bible context must used inside an WorkoutContextProvider')
    }
    return context
 }