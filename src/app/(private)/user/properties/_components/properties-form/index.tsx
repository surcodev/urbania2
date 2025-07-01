'use client';
import React, { useEffect, useState } from 'react'
import { Steps } from 'antd'

import Basic from "./basic";
import Location from "./location";
import Amenities from './amenities';
import Media from "./media";
import Contact from "./contact";

function PropertiesForm({
    initialValues = {},
    isEdit = false,
}: {
    initialValues?: any;
    isEdit?: boolean;
}) {

    const [finalValues, setFinalValues] = useState({
        basic: initialValues,
        location: initialValues,
        amenities: initialValues,
        media: {
            newlyUploadedFiles: [],
            images: initialValues?.images || [],
        },
        contact: initialValues,
    });
    const [currentStep = 0, setCurrentStep] = useState(0);
    const commonPropsForSteps: any = {
        currentStep,
        setCurrentStep,
        finalValues,
        setFinalValues
    }

    const steps = [
        {
            title: "Básico",
            content: <Basic {...commonPropsForSteps} />,
        },
        {
            title: "Ubicación",
            content: <Location {...commonPropsForSteps} />,
        },
        {
            title: "Comodidades",
            content: <Amenities {...commonPropsForSteps} />,
        },
        {
            title: "Media",
            content: <Media {...commonPropsForSteps} />,
        },
        {
            title: "Contacto",
            content: <Contact {...commonPropsForSteps} />,
        },
    ];

    useEffect(() => {
        console.log(finalValues);
    }, [finalValues])

    return (
        <div>
            <Steps className="text-sm" current={currentStep} items={steps} />

            <div className="mt-8">{steps[currentStep].content}</div>
        </div>
    )
}

export default PropertiesForm