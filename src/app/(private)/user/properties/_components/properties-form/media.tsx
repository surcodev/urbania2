import { PropertiesFormStepProps } from '@/interfaces'
import React, { useState } from 'react'
import { Button, Upload } from 'antd'

function Media({ currentStep, setCurrentStep, finalValues, setFinalValues }: PropertiesFormStepProps) {

    const [tempFiles, setTempFiles] = useState<any[]>([]); // [
    const onFinish = () => {
        setFinalValues({
            ...finalValues,
            media: {
                newlyUploadedFiles: tempFiles,
                images: finalValues.media.images,
            },
        });
        setCurrentStep(currentStep + 1);
    };

    return (
        <div>
            <div className="flex flex-wrap gap-5 mb-5">
                {finalValues.media?.images?.map((image: string) => (
                    <div key={image} className="flex flex-col gap-3 border border-dashed border-gray-400 p-2 rounded justify-center items-center">
                        <img
                            src={image}
                            alt=""
                            className="w-20 h-20 object-cover rounded"
                        />
                        <span
                            className="text-red-500 underline text-sm cursor-pointer"
                            onClick={() => {
                                const filteredImages = finalValues.media?.images?.filter(
                                    (img: string) => img !== image
                                ) || [];

                                setFinalValues({
                                    ...finalValues,
                                    media: {
                                        newlyUploadedFiles: tempFiles,
                                        images: filteredImages,
                                    },
                                });
                            }}
                        >
                            Eliminar
                        </span>
                    </div>
                ))}

            </div>

            <Upload
                listType="picture-card"
                multiple
                beforeUpload={(file: any) => {
                    setTempFiles((prev) => [...prev, file]);
                    return false;
                }}
            >
                Subir imágen
            </Upload>
            <div className="flex justify-end gap-5">
                <Button
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(currentStep - 1)}
                >
                    Back
                </Button>
                <Button type="primary" onClick={() => onFinish()}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default Media