import { PropertiesFormStepProps } from '@/interfaces'
import React from 'react'
import { Button } from 'antd'

function Location({ currentStep, setCurrentStep }: PropertiesFormStepProps) {
    return (
        <div>
            <div>
                <div className='flex justify-end gap-5'>
                    <Button disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)} >Volver</Button>
                    <Button type='primary' onClick={() => setCurrentStep(currentStep + 1)} >Siguiente</Button>
                </div>
            </div>
        </div>
    )
}

export default Location