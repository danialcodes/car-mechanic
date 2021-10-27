import { onAuthStateChanged, signOut, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorMessage);
            }).finally(() => setIsLoading(false)
            );
    }

    useEffect(() => {
        if (user.uid) {
            console.log(user.displayName,"Just Appared 👦");
        }
    }, [user]);
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
                setUser({});
            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, []);



    const redirect = (history, func, url) => {
        func();
        if (!isLoading) { history.push(url); }
    }
    const logOut = () => {
        setIsLoading(true);
        let temp = user;
        signOut(auth).then(() => {
            console.log("Hope You come back", temp.displayName);
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        }).finally(() => setIsLoading(false)
        );
    }


    return {
        user,
        isLoading,
        signInWithGoogle,
        logOut,
        redirect
    }
}

export default useFirebase;