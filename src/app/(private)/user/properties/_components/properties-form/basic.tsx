import { PropertiesFormStepProps } from '@/interfaces'
import { Button, Form, Input } from 'antd'
import React from 'react'

function Basic({ currentStep, setCurrentStep, finalvalues, setFinalValues }: PropertiesFormStepProps) {

    const onFinish = (values: any) => {
        setFinalValues({ ...finalvalues, basic: values });
        setCurrentStep(currentStep + 1);
    }

    return (
        <Form
            layout='vertical'
            initialValues={finalvalues.basic}
        >
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <Form.Item
                    name='name'
                    label='Nombre de la propiedad'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese el nombre de la propiedad'
                        }
                    ]}
                >
                    <Input placeholder='Nombre de la propiedad' />
                </Form.Item>
            </div>

            <div className='flex justify-end gap-5'>
                <Button disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)} >Volver</Button>
                <Button type='primary' onClick={() => setCurrentStep(currentStep + 1)} >Siguiente</Button>
            </div>
        </Form>
    )
}

export default Basic