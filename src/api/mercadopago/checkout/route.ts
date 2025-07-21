import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const mercadopago = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
    const body = await req.json();
    const { plan } = body;

    try {
        const preference = await new Preference(mercadopago).create({
            body: {
                items: [
                    {
                        id: String(plan.id),
                        title: plan.title,
                        unit_price: plan.price,
                        quantity: 1,
                    },
                ],
                back_urls: {
                    success: "http://localhost:3000/pagos/exito",
                    failure: "http://localhost:3000/pagos/error",
                    pending: "http://localhost:3000/pagos/pendiente",
                },
                auto_return: "approved",
            }
        });

        return NextResponse.json({ init_point: preference.init_point });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
