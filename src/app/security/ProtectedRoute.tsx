"use client"; // ✅ Required for Next.js App Router

import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation"; // ✅ Use this instead of "next/router"
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function ProtectedRoute<P extends object>(Component: ComponentType<P>) {
    return function WrappedComponent(props: P) {
        const [user, setUser] = useState<User | null>(null);
        const router = useRouter();

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    router.push("/admin/login"); // Redirect if not logged in
                } else {
                    setUser(user);
                }
            });
            return () => unsubscribe();
        }, [router]);

        if (!user) return <p>Loading...</p>;

        return <Component {...props} />;
    };
}
