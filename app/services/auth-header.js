export default function authHeader() {
    try {
        // Retrieve user data from localStorage
        let userStr;
        if (typeof window !== 'undefined'){
            userStr = localStorage.getItem("user");
        }
        const user = userStr ? JSON.parse(userStr) : null;

        if (user && user.accessToken) {
            // Return the x-access-token if a valid token exists
            return { 'x-access-token': user.accessToken };
        }

        // Return an empty Authorization header if no token found
        return { Authorization: "" };
    } catch (error) {
        console.error("Error in authHeader:", error); // Log any errors
        return { Authorization: "" }; // Return a fallback header
    }
}
