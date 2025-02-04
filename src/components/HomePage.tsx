import { act, createContext, useReducer } from "react"
import { Action, User } from "../Types"
import Login from "./Login"
import { Typography } from "@mui/material"
// export const UserIdContext = createContext<number>(0);

// const userReducer = (state: User, action: Action): User =>{
//     switch(action.type){
//         case('CREATE'):
//             console.log('create new user');
            
//             return{
//                 id: action.data.id ?? state.id,
//                 firstName: action.data.firstName ?? state.firstName,
//                 lastName: state.lastName,
//                 email: state.email,
//                 password: action.data.password ?? state.password,
//                 phone: state.phone
//             }
        
//         case('UPDATE'):
//             console.log('update');
            
//             return{
//                 id: action.data.id ?? '',
//                 firstName: action.data.firstName ?? state.firstName,
//                 lastName: action.data.lastName ?? state.lastName,
//                 email: action.data.email ?? state.email,
//                 password: action.data.password ?? state.password,
//                 phone: action.data.phone ?? state.phone
//             }

//         case('DELETE'):
//             return state
        
//         default:
//             return state
        
//     }
// }

// export const emptyUser: User = {
//     id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phone: '',
// };

// export const UserContext = createContext<{
//     user: User;
//     dispatch: React.Dispatch<Action>;
//   }>({
//     user: emptyUser,
//     dispatch: () => {},
// });
const HomePage = () =>{
    // const [user, dispatch] = useReducer(userReducer,emptyUser)
    return<>
    <Typography>Welcome To The Recipies World!!!</Typography>
    
    </>
}
export default HomePage