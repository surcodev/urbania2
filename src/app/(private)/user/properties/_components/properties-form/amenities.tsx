import { PropertiesFormStepProps } from '@/interfaces'
import { Button } from 'antd'

function Amenities({ currentStep, setCurrentStep }: PropertiesFormStepProps) {
    return (
        <div>
            <span>
                Comodidades
            </span>
            <div>
                <div className='flex justify-end gap-5'>
                    <Button disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)} >Volver</Button>
                    <Button type='primary' onClick={() => setCurrentStep(currentStep + 1)} >Siguiente</Button>
                </div>
            </div>
        </div>
    )
}

export default Amenities