import React from 'react';
import { useState } from 'react';

const UserContext = new React.createContext()

export const UserProvider = ( {children} ) => {
    const [ user, setUser ] = useState(null);

    return (
        <UserContext.Provider value={ {user, setUser} }>
            {children}
        </UserContext.Provider >
    );
};


export default UserContext;