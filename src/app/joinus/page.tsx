"use client"
import { SessionType } from "@/lib/auth";
import { Button, Container, Step, StepButton, StepConnector, StepContent, StepLabel, Stepper } from "@mui/material";
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function Join() {
    const { data: session } = useSession() as { data: SessionType | null }
    const [nick, setNick] = useLocalStorageState("nick", { defaultValue: "" })
    const [activeStep, setActiveStep] = useState(0)
    const [status, setStatus] = useState("")

    useEffect(() => {
        console.log(session)
        if (!session) return setActiveStep(0)
        if (session?.provider === "google") {
            setNick(session.user?.name!)
            setActiveStep(1)
            return
        }
        if ((session?.provider === "discord") && nick) {
            fetch("/api/discord/add-member", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    access_token: session.access_token,
                    nick
                })
            }).then(res => res.json()).then(res => {
                setActiveStep(2)
            })
            return
        }
    }, [session, nick])

    const steps = [
        {
            component: (<div className="bg-mantle max-w-[500px] p-4 rounded flex flex-col gap-4">
                <p> Allow us to verify if you belong to our internal organization, which is <a className="text-blue" href="https://gct.ac.in"> gct.ac.in </a>.</p>
                <Button className="w-20" variant="outlined" onClick={() => signIn("google")}> Sign In </Button>
            </div>),
            label: "Authenticate with Google"
        },
        {
            component: (<div className="bg-mantle max-w-[500px] p-4 rounded flex flex-col gap-4">
                <p> We use Discord as our main platform for communication, allow us to automatically add you in our official discord server. If you are already present in the server, the process would assign you the Verified role. </p>
                <Button className="w-20" variant="outlined" onClick={() => signIn("discord")}> Sign In </Button>
            </div>),
            label: "Authenticate with Discord"
        },
        {
            component: (<div>
            </div>),
            label: "Voila"
        },
    ]

    return <Container className="p-4">
        <div className="flex flex-col my-4 gap-4">
            <p className="text-3xl"> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, vel! </p>
        </div>
        <div className="my-4">
            <Stepper orientation="vertical" activeStep={activeStep}>
                {steps.map((step, i) => <Step key={i}>
                    <StepLabel> {step.label} </StepLabel>
                    <StepContent> {step.component} </StepContent>
                </Step>)}
            </Stepper>
        </div>


    </Container>
}