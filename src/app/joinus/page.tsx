"use client"
import { SessionType } from "@/lib/auth";
import { Button, Stepper } from "@mui/material";
import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react";



export default function Join() {
    const { data: session } = useSession() as { data: SessionType | null }
    useEffect(() => {
        console.log(session)

    }, [session])


    const steps = [
        { component: <Button onClick={() => signIn("google")}>Login with Google</Button> },
        { component: <Button onClick={() => signIn("discord")}>Login with Discord</Button> }
    ];
    const activeStep = 0;

    return <div>
        <div>
            <Stepper>
                {steps.map((step,i)=><div key={i}>
                   {step.component}

                </div>) }
            </Stepper>
        </div>


    </div>
}