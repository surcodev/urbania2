import PageTitle from '@/components/page-title';
import PropertiesForm from '../_components/properties-form';
import { Property } from "@prisma/client";
import prisma from "@/config/db";

async function CreatePropertyPage({ searchParams }: { searchParams: any }) {

    const cloneFrom = searchParams?.cloneFrom || "";
    let property: Property | null = null;

    if (cloneFrom) {
        property = (await prisma.property.findUnique({
            where: {
                id: cloneFrom,
            },
        })) as Property;
    }

    return (
        <div className='py-5 lg:px-20 px-5'>
            <PageTitle title='Crear propiedad' />
            <PropertiesForm initialValues={property ? property : {}} />
        </div>
    )
}

export default CreatePropertyPage