import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import cookie from 'js-cookie';
import Router from 'next/router';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = await formatUser(rawUser);
            const { token, ...userWithoutToken } = user;

            createUser(user.uid, userWithoutToken);
            setUser(user);

            cookie.set('braindump-auth', true, {
                expires: 1
            });

            return user;
        } else {
            Router.push('/')
            setUser(false);
            cookie.remove('braindump-auth');

            return false;
        }
    };

    const signinWithGithub = () => {
        Router.push('/dash');
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => handleUser(response.user));
    };

    const signout = () => {
        Router.push('/'); //Exits everything when logging out
        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false));
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

        return () => unsubscribe();
    }, [])

    return {
        user,
        signinWithGithub,
        signout
    };
}

const formatUser = async (user) => {
    const token = await user.getIdToken();

    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        // token: user.ya, // Makes sure you are only getting your sites
        provider: user.providerData[0].providerId,
        token
    };
};