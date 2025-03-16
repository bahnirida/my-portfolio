"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import {showErrorToast, showSuccessToast} from "@/app/services/toastUtils";
import {FaEnvelope, FaLock} from "react-icons/fa";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        setError("");
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin"); // Redirect after login
            showSuccessToast("Login successed !")
        } catch (error: any) {
            setError("Invalid email or password.");
            showErrorToast("Invalid email or password.")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{backgroundImage: 'url("/assets/admin/background-admin.jpg")'}}  // Add your image path here
        >
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center opacity-90">

                {/* Avatar Image */}
                <div className="flex justify-center mb-4">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-blue-200">
                        <img src="/assets/admin/admin-avatar.jpg" alt="Admin Avatar" className="w-full h-full object-cover"/>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

                <form onSubmit={handleLogin} className="flex flex-col">

                    {/* Email Input */}
                    <div className="flex items-center border rounded-md p-2 mb-4 bg-gray-50">
                        <FaEnvelope className="text-gray-500 mr-2"/>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent outline-none flex-1"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="flex items-center border rounded-md p-2 mb-4 bg-gray-50">
                        <FaLock className="text-gray-500 mr-2"/>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-transparent outline-none flex-1"
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className={`p-2 rounded-md text-white font-semibold transition ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
