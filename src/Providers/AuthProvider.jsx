import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase.config";


// step two : create the context outside of the function
export const AuthContext = createContext(null)
const auth = getAuth(app);

// step one : create a function
const AuthProvider = ({children}) => {
    
    // step three: set the children props and set authcontext provider.and set the children props to their stomach!
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email, password);
    };

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    // Get the currently signed-in user
    useEffect(()=>{
     const unsubScribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubScribe();
        }
    },[])
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;