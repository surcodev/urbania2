import { PropertiesFormStepProps } from '@/interfaces'
import { Button, Input, Select, InputNumber, Form } from "antd";
import { facingTypes, parkingTypes, furnishingTypes } from "@/constants";

function Amenities({ currentStep, setCurrentStep, finalValues, setFinalValues, }: PropertiesFormStepProps) {

    const onFinish = (values: any) => {
        setFinalValues({ ...finalValues, amenities: values });
        setCurrentStep(currentStep + 1);
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={finalValues.amenities}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <Form.Item
                    name="bedrooms"
                    label="Habitaciones"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el # de habitaciones!",
                        },
                    ]}
                >
                    <InputNumber className="w-full" placeholder="Habitaciones" />
                </Form.Item>
                <Form.Item
                    name="bathrooms"
                    label="Baños"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el # de baños!",
                        },
                    ]}
                >
                    <InputNumber className="w-full" placeholder="Baños" />
                </Form.Item>
                <Form.Item
                    name="balconies"
                    label="Balcones"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese # de balcones!",
                        },
                    ]}
                >
                    <InputNumber className="w-full" placeholder="Balconies" />
                </Form.Item>
                <Form.Item
                    name="parking"
                    label="Aparcamiento"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese # de aparcamientos!",
                        },
                    ]}
                >
                    <Select options={parkingTypes} />
                </Form.Item>
                <Form.Item
                    name="furnishing"
                    label="Moviliario"
                    rules={[
                        {
                            required: true,
                            message: "por favor introduzca el # de moviliario!",
                        },
                    ]}
                >
                    <Select options={furnishingTypes} />
                </Form.Item>
                <Form.Item
                    name="floors"
                    label="Pisos"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese # de pisos!",
                        },
                    ]}
                >
                    <InputNumber className="w-full" placeholder="Pisos" />
                </Form.Item>
                <Form.Item
                    name="area"
                    label="Área"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el área!",
                        },
                    ]}
                >
                    <InputNumber className="w-full" placeholder="Área" />
                </Form.Item>
                <Form.Item
                    name="facing"
                    label="frente a"
                    rules={[
                        {
                            required: true,
                            message: "Please input facingPor favor ingrese el dato!",
                        },
                    ]}
                >
                    <Select options={facingTypes} />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="Edad"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese la edad!",
                        },
                    ]}
                >
                    <InputNumber className="w-full" placeholder="Edad" />
                </Form.Item>
            </div>

            <div className="flex justify-end gap-5 mt-7">
                <Button
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(currentStep - 1)}
                >
                    Volver
                </Button>
                <Button type="primary" htmlType="submit">
                    Siguiente
                </Button>
            </div>
        </Form>
    );
}

export default Amenities