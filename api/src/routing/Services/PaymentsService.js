"use strict";
const axios = require("axios");

class PaymentService {
  async createPayment({ name, total, id, quantity }) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    //aca deberiamos poner nuestro producto. va a venir en el req del front, leemos el body del req y ahi recibir items desde el fontend y ahi pasarlos al controller y de ahi al service para popular este array
    const body = {
      payer_email: "test_user_1292738543@testuser.com",
      items: [
        {
          title: name,
          category_id: id,
          quantity: quantity,
          unit_price: total,
        },
      ],
      back_urls: {
        failure: "",
        pending: "",
        success: "http://ganasdegusto.vercel.app/checkout",
      },
      auto_return: 'approved',
      binary_mode: true, // no permite pagos pendientes (rapipago etc)
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }

  async createSubscription() {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Suscripción de ejemplo",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 10,
        currency_id: "ARS",
      },
      back_url: "https://google.com.ar",
      payer_email: "test_user_1284197311@testuser.com",
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }
}

module.exports = PaymentService;
