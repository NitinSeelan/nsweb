// app/airmodules/layout.js

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthService from "../services/auth.service"; // Adjust path if necessary

export default function AirModulesLayout({ children }) {
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
    return <div></div>; // You can customize the loading state or spinner
  }

  return <div>{children}</div>; // Render the protected content only if the user is logged in
}
