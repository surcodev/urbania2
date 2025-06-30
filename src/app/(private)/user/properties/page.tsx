import PageTitle from '@/components/page-title'
import React from 'react'
import PropertiesTable from './_components/properties-table'
import LinkButton from '@/components/link-button'

function Properties() {
  return (
    <div className='py-5 lg:px-20 px-5'>
      <div className="flex justify-between items-center">
        <PageTitle title='Propiedades' />
        <LinkButton title='Crear propiedad' path='/user/properties/create-property' />
      </div>

      <PropertiesTable />
    </div>
  )
}

export default Properties