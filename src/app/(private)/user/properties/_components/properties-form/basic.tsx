import { PropertiesFormStepProps } from '@/interfaces'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { propertyStatuses, propertyTypes } from "@/constants";

function Basic({ currentStep, setCurrentStep, finalValues, setFinalValues }: PropertiesFormStepProps) {

    const onFinish = (values: any) => {
        setFinalValues({ ...finalValues, basic: values });
        setCurrentStep(currentStep + 1);
    }

    return (
        <Form
            onFinish={onFinish}
            layout='vertical'
            initialValues={finalValues.basic}
        >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Form.Item
                    name='name'
                    label='Nombre de la propiedad'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese el nombre de la propiedad'
                        }
                    ]}
                    className='col-span-1 lg:col-span-3'
                >
                    <Input autoComplete="off" placeholder='Nombre de la propiedad' />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Descripción"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese una descripción!",
                        },
                    ]}
                    className="col-span-1 lg:col-span-3"
                >
                    <Input.TextArea rows={6} placeholder="Descripción" />
                </Form.Item>

                <Form.Item
                    name="type"
                    label="Tipo"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el tipo!",
                        },
                    ]}
                >
                    <Select options={propertyTypes} />
                </Form.Item>

                <Form.Item
                    name="status"
                    label="Estado"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el estado!",
                        },
                    ]}
                >
                    <Select options={propertyStatuses} />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Precio"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el precio!",
                        },
                    ]}
                >
                    <InputNumber className="w-full" type="number" placeholder="precio" />
                </Form.Item>
            </div>

            <div className='flex justify-end gap-5 mt-7'>
                <Button disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)} >Volver</Button>
                <Button htmlType='submit' type='primary' >Siguiente</Button>
            </div>
        </Form>
    )
}

export default Basic