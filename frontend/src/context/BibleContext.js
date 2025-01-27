
import { createContext, useReducer } from "react";

export const BibleContext = createContext();

export const bibleReducer = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return {
                bibles: action.payload
            }
        case 'CREATE_DATA':
            return {
                bibles: [action.payload, ...state.workouts]
            }
        case 'DELETE_DATA':
            // console.log('we are in the thigns')
            return {
                bibles: state.bibles.filter(bible => bible._id!== action.payload._id)
            
            }
             case 'ADDBOOMARK':
                        return {
                            user: state.user,
                            bookmarks: [ action.payload,...state.bookmarks]
                        }
                    case 'REMOVEBOOKMARK':
                        return {
                            user: state.user,
                            bookmarks: state.bookmarks.filter(bookmark=>bookmark._id!==action.payload)
                        }
                    case 'ADDHIGHLIGHT':
                        return {
                            user: state.user,
                            highlights: [ action.payload,...state.highlights]
                        }
                    case 'REMOVEHIGHLIGHT':
                        return {
                            user: state.user,
                            highlights: state.highlights.filter(highlight=>highlight._id!==action.payload)
                        }

            default: 
            return state;
    }

}
export const BibleContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(bibleReducer, {
        bibles: null
    })



    return (
        <BibleContext.Provider value={{...state, dispatch}}>
            {children}
        </BibleContext.Provider>
    )
}