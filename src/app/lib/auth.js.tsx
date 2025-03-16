import { signInWithEmailAndPassword, signOut  } from "firebase/auth";
import {auth} from "@/app/lib/firebase";



// Sign In
export const login = async (email:string, password:string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

// Sign Out
export const logout = async () => {
    await signOut(auth);
};
