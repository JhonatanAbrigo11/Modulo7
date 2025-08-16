import { Company } from "../models/company";

export const companyData: Company = {
    id: '001',
    ruc: '1234567880',
    name: 'Fashion Trends',
    adress: {
        city: "Cuenca",
        principalStreet: "Manuel Muñoz",
        secondaryStreet: "Juan Carlos",
        code: "002"
    },
    sucursal: [
        {
            id: '002',
            name: "Fashion Trends 1",
            adrees: {
                city: "Quito",
                principalStreet: "CALLE 1",
                secondaryStreet: "CALLE 2",
                code: "01"
            },
            products: [
                {
                    id: 1,
                    name: 'Treaje',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "Formal"
                    },
                },
                {
                    id: 2,
                    name: 'Jeans',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "informal"
                    },
                }
            ]
        },
        {
            id: '003',
            name: "Fashion Trends 2",
            adrees: {
                city: "Guayaquil",
                principalStreet: "CALLE 1",
                secondaryStreet: "CALLE 2",
                code: "01"
            },
            products: [
                {
                    id: 1,
                    name: 'Saco',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "Formal"
                    },
                },
                {
                    id: 2,
                    name: 'Camiseta',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "informal"
                    },
                }
            ]
        },
        {
            id: '004',
            name: "Fashion Trends 3",
            adrees: {
                city: "Loja",
                principalStreet: "CALLE 1",
                secondaryStreet: "CALLE 2",
                code: "01"
            },
            products: [
                {
                    id: 1,
                    name: 'Camisa',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "Formal"
                    },
                },
                {
                    id: 2,
                    name: 'Pantaloneta',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "informal"
                    },
                }
            ]
        },
        {
            id: '005',
            name: "Fashion Trends 4",
            adrees: {
                city: "Zamora",
                principalStreet: "CALLE 1",
                secondaryStreet: "CALLE 2",
                code: "01"
            },
            products: [
                {
                    id: 1,
                    name: 'Corbata',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "Formal"
                    },
                },
                {
                    id: 2,
                    name: 'Sudaderas',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "informal"
                    },
                }
            ]
        },
        {
            id: '006',
            name: "Fashion Trends 5",
            adrees: {
                city: "Catamayo",
                principalStreet: "CALLE 1",
                secondaryStreet: "CALLE 2",
                code: "01"
            },
            products: [
                {
                    id: 1,
                    name: 'Vestido',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "Formal"
                    },
                },
                {
                    id: 2,
                    name: 'Bermuda',
                    stock: 10,
                    categoria: {
                        id: 1,
                        name: "informal"
                    },
                }
            ]
        }
    ]
} 
