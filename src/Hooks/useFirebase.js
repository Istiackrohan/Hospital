import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                const user = result.user
                setUser(user);
                navigate("/home");
            }).catch((error) => {
                setError(error.message)
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                navigate("/sign-in");
            })
    }

    return {
        error,
        user,
        signInWithGoogle,
        logout
    }
};

export default useFirebase;