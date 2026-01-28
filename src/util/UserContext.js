import {createContext} from 'react'

export const UserContext = createContext({
    loggedUser : "Guest User"
});

export default UserContext;
