"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { auth, db } from "../firebase"; // Adjust the path to your Firebase initialization file
import { collection, addDoc } from "firebase/firestore";
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
auth.useDeviceLanguage();

const Dashboard = () => {
  const [user, setUser] = useState(null); // State to store user info

  // Login Handler
  const handleSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence); // Persist user session in local storage
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;

      // Update user state with required information
      const userData = {
        uid: loggedInUser.uid,
        displayName: loggedInUser.displayName,
        email: loggedInUser.email,
        phoneNumber: loggedInUser.phoneNumber || "Not provided",
        photoURL: loggedInUser.photoURL,
      };

      setUser(userData);

      // Save user details to Firestore (optional)
      await addDoc(collection(db, "users"), {
        uid: loggedInUser.uid,
        displayName: loggedInUser.displayName,
        email: loggedInUser.email,
        phoneNumber: loggedInUser.phoneNumber || "Not provided",
        photoURL: loggedInUser.photoURL,
        createdAt: new Date(),
      });

      console.log("User signed in and data saved!");
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Failed to sign in. Please try again.");
    }
  };

  // Logout Handler
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset the user state
      alert("You have been logged out.");
    } catch (error) {
      console.error("Error during sign-out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  // Listen for Authentication State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email,
          phoneNumber: currentUser.phoneNumber || "Not provided",
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  return (
    <div className="dashboard-container">
      {!user ? (
        <>
          <h1>Welcome to the Dashboard</h1>
          <button className="login-button" onClick={handleSignIn}>
            Sign In with Google
          </button>
        </>
      ) : (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <Image
            className="profile-picture"
            src={user.photoURL}
            alt="Profile Picture"
            width={100}
            height={100}
          />
          <p>Email: {user.email}</p>
          <p>Phone: {user.phoneNumber}</p>
          <button className="logout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
