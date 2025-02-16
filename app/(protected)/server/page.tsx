import React from 'react'
import {currentUser} from "@/lib/auth";
import UserInfo from "@/components/UserInfo";

// This is with hook and in the server components is the auth

// If you want to use within the client component use useCurrentUser, if you want to use in a server component use the currentUser
const ServerPage = async() => {
    const user = await currentUser();
    return (
        <UserInfo user={user} label={'💻 Server Component'}  />
    )
}
export default ServerPage
