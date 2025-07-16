import { Invoice } from "../model/Invoice";

export const invoiceData:Invoice = {
    id: '001',
    company: {
        ruc: '1234567891001',
        name: 'Clear Minds Consulteres',
        address: {
            city: 'Quito',
            principalStreet: 'Juan Pablo Sanz',
            secondaryStreet: 'Iñaquito',
            code: 'N-57',
        },
    },
    customer: {
        id: '0123456789001',
        name: 'Jhonatan',
        surname: 'Abrigo',
        addrees: {
            city: 'Cuenca',
            principalStreet: 'Manuela de Garaicoa',
            secondaryStreet: 'Juan Pedro',
            code: '010101',
        },
    },
    items: [
        {
            id: 100,
            product: {
                id: 500,
                name: 'Papas Rufles',
                price: 0.50,
                description: 'Las papas mas sabrosonas',
                category:{
                    id:1,
                    name: 'Fritura'
                },
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: 550,
                name: 'Doritos',
                price: 0.60,
                description: 'De queso',
                category:{
                    id:2,
                    name: 'Fritura'
                },
            },
            quantity: 50,
        },
        {
            id: 102,
            product: {
                id: 580,
                name: 'kchitos',
                price: 0.30,
                description: 'cachudos',
                category:{
                    id:1,
                    name: 'Fritura'
                },
            },
            quantity: 100,
        }
    ],
}
