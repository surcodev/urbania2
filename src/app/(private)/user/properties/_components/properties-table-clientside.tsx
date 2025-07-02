'use client'
import { Property } from "@prisma/client";
import { Button, Table } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ClientSidePropertiesTable({
    properties,
    fromAdmin = false,
}: {
    properties: Property[];
    fromAdmin?: boolean;
}) {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const columns: any = [
        {
            title: "Property Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render(price: number) {
                return `$${price}`;
            },
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Updated At",
            dataIndex: "updatedAt",
            render(updatedAt: Date) {
                return dayjs(updatedAt).format("DD MMM YYYY HH:mm A");
            },
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render(value: any, record: Property) {
                return (
                    <div className="flex gap-5">
                        <Button
                            size="small"

                        >
                            Consultas
                        </Button>
                        <Button size="small" >
                            <i className="ri-delete-bin-line"></i>
                        </Button>
                        <Button
                            size="small"
                            onClick={() =>
                                router.push(
                                    `/user/properties/create-property?cloneFrom=${record.id}`
                                )
                            }
                        >
                            <i className="ri-file-copy-line"></i>
                        </Button>
                        <Button
                            size="small"
                            onClick={() =>
                                router.push(`/user/properties/edit-property/${record.id}`)
                            }
                        >
                            <i className="ri-pencil-line"></i>
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="capitalize">
            <Table
                dataSource={properties}
                columns={columns}
                loading={loading}
                rowKey="id"
            />

        </div>
    )
}

export default ClientSidePropertiesTable