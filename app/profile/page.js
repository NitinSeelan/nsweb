'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

export default function Profile() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) {
            router.push("/"); // Redirect to login page if not logged in
        } else {
            setUser(currentUser); // Set user information if logged in
        }
    }, [router]);

    if (!user) {
        return <div></div>; // Show a loading state while redirecting or fetching data
    }

    return (
        <div className="profilePage">
            <h1>Welcome, {user.username}!</h1>
            <div className="profileDetails">
                <p><strong>Username:</strong> {user.username}</p>
            
            </div>
                <button className="logoutButton" 
                    onClick={() => {
                        AuthService.logout();
                        router.push("/"); // Redirect to login page after logout
                        window.location.reload();
                    }}>
                    Logout
            </button>
        </div>
    );
}
