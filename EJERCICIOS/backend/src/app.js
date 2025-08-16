import express from 'express';
import cors from 'cors';
import { companyData } from './companyData.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/company', (req, res) => {
    console.log('Petición recibida: Obtener company');
    res.json(companyData);
});

app.get('/api/product', (req, res) => {
    console.log('Petición recibida: Obtener company');
    res.json(companyData.sucursal);
});

app.get('/api/health', (req, res) => {
    console.log('Petición recibida: Verificar salud del servidor');
    res.json({
        status: 'OK',
        message: 'Backend funcionando correctamente',
        timestamp: new Date().toISOString(),
        endpoints: [
            'GET /api/company - Obtener datos de comania',
            'GET /api/product - Obtener datos de los productos',
            'GET /api/health - Verificar estado del servidor'
        ]
    });
});

app.use((req, res) => {
    console.log('Ruta no encontrada:', req.url);
    res.json({
        message: 'API de Facturación',
        description: 'Backend para servir datos de factura al frontend Angular',
        availableEndpoints: [
            'GET /api/company',
            'GET /api/product',
            'GET /api/health'
        ]
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 SERVIDOR BACKEND INICIADO');
    console.log('🌐 URL local: http://localhost:${PORT}');
});