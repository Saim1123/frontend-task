"use client";

import { useState } from "react";

import Layout from "@/components/Layout";

import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

export interface UserData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(33);
  const [userData, setUserData] = useState<UserData>({ name: "", email: "", phone: "", message: "" });

  const nextStep = () => {
    setStep(prevState => prevState + 1);
    if (progress === 66) {
      setProgress(prevStep => prevStep + 34);
      return;
    }
    setProgress(prevStep => prevStep + 33);
  };

  const backStep = () => {
    if (progress <= 34) return;

    setStep(prevState => prevState - 1);
    setProgress(prevState => prevState - 33);
  };

  console.log(userData);

  return (
    <Layout progress={progress} backStep={backStep}>
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} setUserData={setUserData} />}
      {step === 3 && <Step3 />}
    </Layout>
  );
}
