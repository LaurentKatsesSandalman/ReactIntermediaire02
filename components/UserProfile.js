import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
    const { isOnline, setIsOnline } = useContext(UserContext)
    return (
        <>
            <p>User is {isOnline ? "online" : "offline"} </p>

            <button onClick={() => setIsOnline((prev) => prev = !prev)}>click to change user status </button>
        </>
    );
}

export default UserProfile;