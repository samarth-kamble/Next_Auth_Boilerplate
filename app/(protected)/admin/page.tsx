"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RoleGate from "@/components/auth/RoleGate";
import { FormSuccess } from "@/components/FormSuccess";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {admin} from "@/actions/admin"
//same for the role as in the user .

const AdminPage = () => {

       const onApiRouteClick = () => {
            fetch("/api/admin").then((response) => {
                if(response.ok) {
                    toast.success(" Allowed Api Route!");
                } else {
                    toast.error("Forbidden Api Route!");
                }
            })
        }
        const onServerActionClick = () => {
            admin().then((data) => {
                if(data.error) {

                    toast.error("Forbidden Api Route!");
                }
                if(data.success) {
                    toast.success(" Allowed Api Route!");
                }
            })
        }

  return (
    <Card className={"w-[600px]"}>
      <CardHeader>
        <p className={"text-2xl font-semibold text-center"}>🔑 Admin</p>
      </CardHeader>
      <CardContent className={"space-y-4"}>
        <RoleGate allowedRole={"ADMIN"}>
          <FormSuccess
            message={"You have the permission to view this content"}
          />
            <div className={'flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'}>
                <p className={'text-sm font-medium'}>
                    Admin-only API Route
                </p>
                <Button onClick={onApiRouteClick}>
                    Click to Test
                </Button>
            </div>
            <div className={'flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'}>
                <p className={'text-sm font-medium'}>
                    Admin-only Server Route
                </p>
                <Button onClick={onServerActionClick}>
                    Click to Test
                </Button>
            </div>
        </RoleGate>
      </CardContent>
    </Card>
  );
};
export default AdminPage;
