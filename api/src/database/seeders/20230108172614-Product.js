'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
        id: 37,
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
        id: 38,
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
        id: 39,
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
        id: 40,
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
        id: 41,
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
