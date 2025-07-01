import { PropertiesFormStepProps } from '@/interfaces'
import React from 'react'
import { Button, Form, Input } from 'antd'

function Location({ currentStep, setCurrentStep, finalValues, setFinalValues }: PropertiesFormStepProps) {

    const onFinish = (values: any) => {
        setFinalValues({ ...finalValues, location: values });
        setCurrentStep(currentStep + 1);
    }

    // city , pincode , lanmark , address
    return (
        <Form layout="vertical" onFinish={onFinish}
            initialValues={finalValues.location}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <Form.Item
                    name="city"
                    label="Ciudad"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese la ciudad!",
                        },
                    ]}
                >
                    <Input autoComplete="off" placeholder="Ciudad" />
                </Form.Item>
                <Form.Item
                    name="pincode"
                    label="Codigo Postal"
                    rules={[
                        {
                            required: true,
                            message: "por favor ingrese el código postal!",
                        },
                    ]}
                >
                    <Input autoComplete="off" className="w-full" placeholder="Código Postal" />
                </Form.Item>
                <Form.Item
                    name="landmark"
                    label="Punto de referencia"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el punto de referencia!",
                        },
                    ]}
                >
                    <Input autoComplete="off" placeholder="Punto de referencia" />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Dirección"
                    rules={[
                        {
                            required: true,
                            message: "por favor ingrese la dirección!",
                        },
                    ]}
                    className="col-span-1 lg:col-span-3"
                >
                    <Input.TextArea autoComplete="off" rows={6} placeholder="Dirección" />
                </Form.Item>
            </div>
            <div className="flex justify-end gap-5 mt-7">
                <Button
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(currentStep - 1)}
                >
                    Volver
                </Button>
                <Button htmlType="submit" type="primary">
                    Siguiente
                </Button>
            </div>
        </Form>
    );
}

export default Location