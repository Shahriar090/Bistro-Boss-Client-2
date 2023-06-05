import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase.config";


// step two : create the context outside of the function
export const AuthContext = createContext(null)
const auth = getAuth(app);

// step one : create a function
const AuthProvider = ({children}) => {
    
    // step three: set the children props and set authcontext provider.and set the children props to their stomach!
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;