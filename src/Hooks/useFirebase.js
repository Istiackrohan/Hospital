import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                const user = result.user
                setUser(user);
                navigate(-1);
            }).catch((error) => {
                setError(error.message)
            })
    };

    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result.user)
                const user = result.user
                setUser(user);
                navigate(-1);
            }).catch((error) => {
                setError(error.message)
            })
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user)
                const user = result.user
                setUser(user);
                navigate(-1);
            }).catch((error) => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [user])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                navigate("/login", { replace: true });
            })
    }

    return {
        error,
        user,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        setUser,
        navigate,
        auth,
        logout
    }
};

export default useFirebase;