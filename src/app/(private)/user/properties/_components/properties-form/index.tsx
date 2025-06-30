'use client';
import React, { useState } from 'react'
import { Steps } from 'antd'

import Basic from "./basic";
import Location from "./location";
import Amenities from './amenities';
import Media from "./media";
import Contact from "./contact";
import { PropertiesFormStepProps } from '@/interfaces';

function PropertiesForm() {

    const [finalValues, setFinalValues] = React.useState({
        basic: {},
        location: {},
        amenities: {},
        media: {},
        contact: {}
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

    return (
        <div>
            <Steps className="text-sm" current={currentStep} items={steps} />

            <div className="mt-8">{steps[currentStep].content}</div>
        </div>
    )
}

export default PropertiesForm