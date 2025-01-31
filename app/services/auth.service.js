import axios from "axios";

const API_URL = "http://3.145.36.214:8080/api/auth/";

class AuthService {
    // Login method
    login(username, password) {
        console.log("Attempting login with:", { username, password });
        
        // Ensure data is structured as expected by backend
        return axios
            .post(`${API_URL}signin`, { username, password }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => {
                console.log("Login successful:", response.data);
                if (response.data.accessToken) {
                    if(typeof window !== 'undefined'){
                        localStorage.setItem("user", JSON.stringify(response.data));
                    }
                }
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    console.error("Login failed with status:", error.response.status);
                    console.error("Error response data:", error.response.data);
                    alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
                } else {
                    console.error("Login error:", error.message);
                    alert(`Login error: ${error.message}`);
                }
                throw error; // Re-throw error for further handling
            });
    }

    // Logout method
    logout() {
        console.log("Logging out...");
        if(typeof window !== 'undefined'){
            localStorage.removeItem("user");
        }
    }

    // Register method
    register(username, password) {
        console.log("Attempting registration with:", { username, password });

        return axios
            .post(`${API_URL}signup`, { username, password }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => {
                console.log("Registration successful:", response.data);
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    console.error("Registration failed with status:", error.response.status);
                    console.error("Error response data:", error.response.data);
                    alert(`Registration failed: ${error.response.data.message || 'Unknown error'}`);
                } else {
                    console.error("Registration error:", error.message);
                    alert(`Registration error: ${error.message}`);
                }
                throw error; // Re-throw error for further handling
            });
    }

    // Get current user from localStorage
    getCurrentUser() {
        
        const userStr = typeof window !== 'undefined' ? localStorage.getItem("user") : null;
        if (userStr) {
            try {
                const user = JSON.parse(userStr);
                console.log("Current user:", user);
                return user;
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
                return null;
            }
        }
        console.log("No current user found.");
        return null;
    }
}

export default new AuthService();
