"use client";
import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import Basic from "./basic";
import Location from "./location";
import Amenities from "./amenities";
import Media from "./media";
import Contact from "./contact";

export interface PropertiesFormStepProps {
    currentStep: number;
    setCurrentStep: (currentStep: number) => void;
    finalValues: any;
    setFinalValues: (finalValues: any) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isEdit?: boolean;
}

function PropertiesForm({
    initialValues = {},
    isEdit = false,
}: {
    initialValues?: any;
    isEdit?: boolean;
}) {
    const [finalValues, setFinalValues] = React.useState({
        basic: initialValues,
        location: initialValues,
        amenities: initialValues,
        media: {
            newlyUploadedFiles: [],
            images: initialValues?.images || [],
        },
        contact: initialValues,
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);

    const commonPropsForSteps: any = {
        currentStep,
        setCurrentStep,
        finalValues,
        setFinalValues,
        loading,
        setLoading,
        isEdit,
    };

    const steps = [
        {
            title: "Basic",
            content: <Basic {...commonPropsForSteps} />,
        },
        {
            title: "Location",
            content: <Location {...commonPropsForSteps} />,
        },
        {
            title: "Amenities",
            content: <Amenities {...commonPropsForSteps} />,
        },
        {
            title: "Media",
            content: <Media {...commonPropsForSteps} />,
        },
        {
            title: "Contact",
            content: <Contact {...commonPropsForSteps} />,
        },
    ];

    useEffect(() => {
        console.log(finalValues);
    }, [finalValues]);

    return (
        <div>
            <Steps
                className="text-sm"
                current={currentStep}
                onChange={(step) => setCurrentStep(step)} // 🔥 permite hacer clic en cualquier paso
                items={steps.map(({ title }) => ({ title }))}
            />

            <div className="mt-8">{steps[currentStep].content}</div>
        </div>
    );
}

export default PropertiesForm;
