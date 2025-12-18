import { initialData, type onNextArgument, type SignUpData, type SignupStep } from "@modules/signup/model/types";
import { useState } from "react"
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { BirthdayForm } from "../BirthdayForm/BirthdayForm";

export function SignUpWizard() {
    const [step, setStep] = useState<SignupStep>("signup");
    const [data, setData] = useState<SignUpData>(initialData);

    const onNext = (value: onNextArgument) => {
        setData(prev => ({
            ...prev,
            email: value.email,
            password: value.password,
            username: value.username,
            name: value.name,
        }))
        
        setStep("birthday");
    }

    const toBack = () => {
        setStep("signup");
    }

    return (
        step === "signup"
        ? <SignUpForm
            initialData={{...data, password: ""}}
            onNext={onNext} />
        : <BirthdayForm
            initialData={{...data.birthday}}
            toBack={toBack} />
    )
}