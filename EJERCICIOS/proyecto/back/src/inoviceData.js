export const inoviceData = {
    id: 'INV-001',
    company: {
        ruc: '12345567890',
        name: 'Tech Solutions',
        addrees: {
            city: 'San Francisco',
            principalStreet: '123 Tech Lane',
            secondaryStreet: 'Suite 100',
            code: '94105'
        },
    },
    customer: {
        id: '1234567891',
        name: 'Brayan',
        surname: 'Raura',
        addrees: {
            city: 'Los Angeles',
            principalStreet: '456 Elm Street',
            secondaryStreet: 'Canelo',
            code: '90001'
        }
    },
    items: [
        {
            id: '1',
            product: {
                id: 1,
                name: 'Laptop',
                price: 1200,
                description: 'High-performance laptop',
                category: {
                    id: 1,
                    name: 'Electronics'
                }
            },
            quantity: 2
        },
        {
            id: '2',
            product: {
                id: 2,
                name: 'Mouse',
                price: 25,
                description: 'Wireless mouse',
                category: {
                    id: 2,
                    name: 'Accessories'
                }
            },
            quantity: 3
        }
    ]
}