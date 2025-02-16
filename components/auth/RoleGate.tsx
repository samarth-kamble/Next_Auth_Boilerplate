"use client"

import React from 'react'
import {UserRole} from "@prisma/client";
import {useCurrentRole} from "@/hooks/use-current-role";
import {FormError} from "@/components/FormError";

interface RoleGateProps {
    children: React.ReactNode
    allowedRole:UserRole
}


const RoleGate = ({children, allowedRole}:RoleGateProps) => {
    const role = useCurrentRole();


    if(role !== allowedRole){
        return (
            <FormError message={'You dont have permission to view this content'} />
        )
    }
    return (
        <>{children}</>
    )
}
export default RoleGate
