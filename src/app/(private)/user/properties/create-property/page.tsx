import PageTitle from '@/components/page-title'
import React from 'react'
import PropertiesForm from '../_components/properties-form'

function CreatePropertyPage() {
    return (
        <div className='py-5 lg:px-20 px-5'>
            <PageTitle title='Crear propiedad' />
            <PropertiesForm />
        </div>
    )
}

export default CreatePropertyPage