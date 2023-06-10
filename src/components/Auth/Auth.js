import React, { useState } from 'react';
## import { initializeApp } from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import 'firebase/auth';

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => console.error('Error:', error));
    };

    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleSignUp}>Sign up</button>
        </div>
    );
}

export default Auth;
