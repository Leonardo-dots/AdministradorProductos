export const orders = [
    {
        id: 1001,
        customer: {
            name: "Juan Pérez",
            email: "juan.perez@email.com"
        },
        items: [
            {
                productId: 1,
                quantity: 2,
                price: 129.99
            },
            {
                productId: 5,
                quantity: 1,
                price: 59.99
            }
        ],
        status: "pending",
        date: "2026-09-28",
        shipping: {
            city: "Buenos Aires",
            country: "Argentina"
        }
    },
    {
        id: 1002,
        customer: {
            name: "Ana García",
            email: "ana.garcia@email.com"
        },
        items: [
            {
                productId: 3,
                quantity: 1,
                price: 249.99
            }
        ],
        status: "processing",
        date: "2026-09-27",
        shipping: {
            city: "Córdoba",
            country: "Argentina"
        }
    },
    {
        id: 1003,
        customer: {
            name: "Carlos Rodríguez",
            email: "carlos.rodriguez@email.com"
        },
        items: [
            {
                productId: 2,
                quantity: 3,
                price: 89.99
            }
        ],
        status: "completed",
        date: "2026-09-26",
        shipping: {
            city: "Rosario",
            country: "Argentina"
        }
    },
    {
        id: 1004,
        customer: {
            name: "Lucía Fernández",
            email: "lucia.fernandez@email.com"
        },
        items: [
            {
                productId: 7,
                quantity: 1,
                price: 399.99
            },
            {
                productId: 4,
                quantity: 2,
                price: 74.99
            }
        ],
        status: "cancelled",
        date: "2026-09-25",
        shipping: {
            city: "Mendoza",
            country: "Argentina"
        }
    },
    {
        id: 1005,
        customer: {
            name: "Martín López",
            email: "martin.lopez@email.com"
        },
        items: [
            {
                productId: 6,
                quantity: 1,
                price: 159.99
            },
            {
                productId: 2,
                quantity: 2,
                price: 89.99
            }
        ],
        status: "pending",
        date: "2026-09-24",
        shipping: {
            city: "La Plata",
            country: "Argentina"
        }
    },
    {
        id: 1006,
        customer: {
            name: "Sofía Martínez",
            email: "sofia.martinez@email.com"
        },
        items: [
            {
                productId: 8,
                quantity: 1,
                price: 299.99
            }
        ],
        status: "completed",
        date: "2026-09-23",
        shipping: {
            city: "Buenos Aires",
            country: "Argentina"
        }
    }
];