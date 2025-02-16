"use client";


// This is with hook and in the server components is the auth

// If you want to use within the client component use useCurrentUser, if you want to use in a server component use the currentUser
import React from 'react'
import {useCurrentUser} from "@/hooks/use-current-user";
import UserInfo from "@/components/UserInfo";

const ClientPage =  () => {
    const user =  useCurrentUser();

    return (
        <UserInfo label={"📱 Client Component"} user={user}/>
    )
}
export default ClientPage
