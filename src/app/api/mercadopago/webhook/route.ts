// ✅ Nuevo webhook corregido para MercadoPago

import { NextResponse } from "next/server";
import { SaveSubscription } from "@/actions/subscriptions";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("📥 Webhook recibido:", JSON.stringify(body, null, 2));

        const topic = body.type || body.topic;
        const data = body.data || body;

        if (topic === "payment") {
            const paymentId = data.id || data.payment_id;

            const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
                headers: {
                    Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
                },
            });

            if (!mpRes.ok) {
                throw new Error("No se pudo obtener el detalle del pago desde MercadoPago");
            }

            const payment = await mpRes.json();
            console.log("✅ Detalles del pago:", payment);

            if (payment.status === "approved") {
                const plan = {
                    title: payment.additional_info?.items?.[0]?.title || "Sin Título",
                    price: payment.transaction_amount || 0,
                };

                await SaveSubscription({
                    paymentId: payment.id,
                    plan,
                });

                console.log("🎉 Suscripción guardada exitosamente");
            }
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error("❌ Error en webhook:", error.message);
        return new NextResponse("Error en webhook", { status: 400 });
    }
}
