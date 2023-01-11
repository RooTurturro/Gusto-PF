'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        id: "494de2d4-142b-4820-801b-42e5f671d7cd",
        name: "Hamburguesa Simple con Papas",
        description:
          "Pan de papa, un medallón de carne de 100 gr, queso cheddar, toppings a elección y papas fritas.",
        price: 1090,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613609197510.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "96b89481-24c6-4690-8b8c-e4755b4b9e5e",
        name: "Hamburguesa Doble con Papas",
        description:
          "Pan de papa, dos medallones de carne de 100 gr, queso cheddar, toppings a elección y papas fritas.",
        price: 1290,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613609246384.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "48e1fa45-b369-4724-b475-0717d2a8bd86",
        name: "Hamburguesa Triple con Papas",
        description:
          "Pan de papa, tres medallones de carne de 100 gr, queso cheddar, toppings a elección y papas fritas.",
        price: 1490,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613609306550.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "521438bb-eb0b-4eec-92cc-cae97c6ad4ac",
        name: "Hamburguesa Cuadruple con Papas",
        description:
          "Pan de papa, cuatro medallones de carne de 100 gr, queso cheddar, toppings a elección y papas fritas.",
        price: 1690,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613609328654.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "0c8969a4-e26c-49d0-8aab-b8326465634c",
        name: "Gusto Onion BBQ",
        description:
          "Una Onion BBQ, con receta propia de la casa, es una hamburguesa al mejor estilo americano, doble medallón de carne con cheddar, Bacon Ahumado y Barbacoa, Coronado con 3 Aros de cebolla Fritos dentro de la hamburguesa. Incluye porción de papas.",
        price: 1390,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1648154547108.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "4e22302c-4c59-4554-afa6-1056168c9f2e",
        name: "Gusto Argentina",
        description:
          "Una Max Argentina es receta propia, al autentico estilo y sabores argentinos, con doble medallón de carne, queso tybo, mayonesa chimichurri y verduras asadas. Incluye porción de papas.",
        price: 1440,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1648154682427.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "67f0bfe2-ee27-4b1a-bc27-17dd40390f84",
        name: "Gusto Mexicana",
        description:
          "Es una hamburguesa con receta propia, inspirada en el estilo y sabores 100% mexicanos, doble medallón de carne con una salsa de guacamole casera, una pizca de mayonesa, queso tybo y lechuga. Incluye porción de papas.",
        price: 1440,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1648154641873.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "648ed557-f70e-4e03-8ed3-5c7db6702a4d",
        name: "Gusto Vacío Desmenuzado",
        description:
          "Una Burguer que combina diferentes texturas y cocciones de carne, en primer parte nuestro medallón blend seleccionado, junto al vacio cocinado por 3 horas en sus propios jugos y desmenuzado. Acompañado con Salsa Wonder, Cheddar y Bacon.",
        price: 1490,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1654193879971.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "b4e34845-da68-487f-b2ad-02e162224213",
        name: "Gusto Pulled Pork",
        description:
          "Una hamburguesa con carne de cerdo cocinada a fuego bajo y remojada en salsa barbacoa durante 6 horas. Acompañada de ingredientes sutiles, lechuga, tomate y mayonesa, para dejar apreciar el sabor Pulled Pork",
        price: 1890,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1654193998260.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "1b00d754-52a8-4699-a6ba-0ee0765cafd4",
        name: "Gusto Roquefort",
        description:
          "Hamburguesa con doble medallón de carne, que combina ingredientes excepcionales, queso roquefort, jamón crudo y una pizca de cebolla morada.",
        price: 1390,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1654194079583.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "2b1800fc-fe27-411c-b901-93f2b8f29f80",
        name: "Hamburguesa Veggies",
        description:
          "Pan de papa, medallones veggies (a elección), queso cheddar, toppings a elección y papas fritas.",
        price: 1090,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657232853714.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "7d586ffe-b330-4868-a392-9762e572a3c9",
        name: "Hamburguesa de Pollo",
        description:
          "Pan de papa, medallones de pollo, queso cheddar, toppings a elección y papas fritas.",
        price: 1090,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657232893213.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "af06c881-3a73-4f86-8437-f8b1a21242f9",
        name: "Gusto Cajita Feliz",
        description:
          "Hamburguesa simple (pan, carne, mayonesa y queso cheddar), papas, bebida y huevo kinder.",
        price: 1090,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1622435071849.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "2b5494db-5c1f-4bc7-8bc1-386569c68b46",
        name: "Papas",
        description: "Porción de papas.",
        price: 790,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613612343809.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "63930ab9-0ef3-4a44-96aa-fb6736d0baf1",
        name: "Papas con Cheddar",
        description: "Porción de papas con cheddar, bacon y cebolla de verdeo.",
        price: 940,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613611182274.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "acdc1098-8d51-4cff-8f11-e47ce8fcb80c",
        name: "Papas con Salsa Wonder",
        description: "Porción de papas con salsa wonder y cebolla de verdeo.",
        price: 840,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613611198257.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "a868a37a-7a21-499d-828c-b70d09f6ebe7",
        name: "Papas Gusto Mexicanas",
        description: "Papas fritas + Guacamole + Bacon",
        price: 1040,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1661454073974.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "9157af18-c5da-4490-b8a8-17f6d0d0097b",
        name: "Papas Gusto Argentinas",
        description: "Papas fritas + Verduras Asadas + Mayonesa Chimichurri",
        price: 990,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1661454115945.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "eb765ce5-8639-40cf-8369-83ef3107768e",
        name: "Papas Gusto Pulled Pork",
        description: "Papas Fritas + Pulled Pork + BBQ",
        price: 1290,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1661454151053.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "48bb34c3-8c31-4274-b029-6c08147a1b62",
        name: "Papas Gusto 4 Formaggi",
        description:
          "Papas Fritas + queso cheddar + queso roquefort + queso reggiano + queso sardo",
        price: 890,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1661454187250.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "000c6201-9641-41bf-b09b-266e85a3531a",
        name: "Nuggets de Pollo",
        description: "10 Nuggets de pollo + 2 Salsas a Elección",
        price: 1140,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657232996375.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "fa50c53c-9bec-43ab-b19f-ba8df0bb6373",
        name: "Aros de Cebolla",
        description: "12 Aros de Cebolla + 2 Salsas a Elección",
        price: 990,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657233053043.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "e04589d4-7d8d-4663-88fe-6f952c584420",
        name: "Bastones de Muzzarella",
        description: "10 Bastones de Muzzarella + 2 Salsas a Elección",
        price: 1590,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657233110916.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "b4b2b90a-014e-496a-aacb-3ccc8a39ff2a",
        name: "Strips de Pollo",
        description: "10 strips de pollo + 2 Salsas a Elección",
        price: 1140,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657233163664.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "72d65f88-1ee4-479e-aed1-9aed333d1248",
        name: "Jamon & Queso",
        description:
          "Wrap de harina con jamón y muzzarella, incluye papas fritas.",
        price: 1390,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1639070509665.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "27ccfa7c-740c-4f38-8171-366143930e31",
        name: "Carne",
        description:
          "Wrap de harina con vacío al horno desmechado con queso cheddar y cebolla asada, incluye papas fritas.",
        price: 1640,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1639070544521.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "4a892362-68c9-4d45-af45-db72cc21136c",
        name: "Veggie",
        description:
          "Wrap de harina integral con choclo, zanahoria, champiñones y queso muzzarella, incluye papas fritas.",
        price: 1640,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1639070579125.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "86748767-2b6a-44be-b155-ee80172e8ea8",
        name: "Ensalada Clasica",
        description:
          "Ensalada clasica con lechuga, tomate, un extra a elección (Strips de pollo o aros de cebolla) y 1 salsa Hellmann's a elección. (Cesar o Vinagreta)",
        price: 1090,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1643482665785.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "eeb66e61-ec08-448f-847f-d05ad98c41a5",
        name: "Easy CHEESEBURGUER SIMPLE",
        description: "Pan, Carne y  Queso Cheddar, (No incluye papas)",
        price: 499,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1659567695711.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "90bd7ca7-64b6-4532-a269-6ac928e9b726",
        name: "Easy CLASICA SIMPLE",
        description: "Mayonesa, Lechuga, Tomate y Cheddar, (No incluye papas)",
        price: 590,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1659570268812.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "48618d21-6ab9-4696-b90e-585acda1e856",
        name: "Easy AMERICANA DOBLE",
        description:
          "Ketchup, Cheddar, Cebolla Morada y Bacon, (No incluye papas)",
        price: 990,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1659570345055.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "644d0f61-917a-4a73-a7da-27f7b8c92cc1",
        name: "Easy D-CHEESE SIMPLE",
        description: "Doble cheddar, Mayonesa y Bacon, (No incluye papas)",
        price: 690,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1659570594942.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "2f9b1b51-80d4-413c-bca5-81a33ef87ce0",
        name: "Easy POLLO CRISPY SIMPLE",
        description:
          "Medallón de Pollo, Mayonesa, Lechuga, Tomate y Cheddar, (No incluye papas)",
        price: 590,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1659571038333.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "ebe4c47c-154e-4d48-9ec9-07437e47c58c",
        name: "Easy VEGGIE SIMPLE",
        description:
          "Medallón Veggie Mixto + Salsa Wonder, Lechuga, Tomate y Queso Tybo, (No incluye papas)",
        price: 590,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1659571113997.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "d99fdd83-4e58-43e7-814b-59efe97a99b7",
        name: "Gaseosa 500ML",
        description: "Gaseosas de linea Coca Cola (500ML)",
        price: 280,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613612321630.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "0aec01f4-405b-478f-aeb3-093fea649c30",
        name: "Agua Alpes 500ML",
        description: "Aguan en botella",
        price: 240,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613772806638.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "a43c50a6-f091-46d2-82fc-65e4214737d9",
        name: "Lata de Cerveza 473CC",
        description:
          "Latas de Cerveza de 473CC (Imperial, Heineken, Schneider)",
        price: 340,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1613772889669.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "6db94554-2993-496c-8010-66344ae88f90",
        name: "Torta Oreo",
        description:
          "Postre a base de galleta Oreo, dulce de leche y crema chantillí.",
        price: 390,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657233274557.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "2e728063-40c0-4e2d-8996-07dab54ef968",
        name: "Chocotorta",
        description:
          "Postre a base de galletas Chocolinas, dulce de leche y crema dulce.",
        price: 390,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657233311052.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "2305d3dc-3fd9-4d69-b374-edc11a1cf6b1",
        name: "Tiramisú",
        description: "Postre de vainillas, bañadas en crema, café y cacao.",
        price: 390,
        image:
          "https://cdn.pedix.app/0ao2sQszGjCmaj8b4lwG/products/1657233336736.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "0b19a27b-ca83-49b9-a961-c6be98451a7d",
        name: "Berrys",
        description:
          "Frambuesas bañadas con chocolate negro y chocolate de leche.",
        price: 599,
        image:
          "https://cdn.pedix.app/SNuejDASf5U8tWQDBNeB/products/1657232672976.png?size=800x800",
        state: "Disponible",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
