import express from 'express';
import cors from 'cors';
import {courseData} from './gradeData.js';

const app = express();
const PORT= process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get('/api/invoice',(req,res) => {
    console.log('Petición recibida:Obtener Factura');
    res.json(courseData);
});

app.get('/api/health',(req,res)=>{
    console.log('Peticion recibida: Verificar salud del servidor');
    res.json({
        status:'OK',
        message:'Backend funcionando correctamente',
        timestamp: new Date().toISOString(),
        endpoints:[
            'GET/api/invoice - Obtener datos de Factura',
            'GET/api/health - Verificar el estado del servidor',

        ]
    })
})
app.use((req, res) => {
    console.log('Ruta no encontrada:', req.url);
    res.status(404).json({
        message: 'API de ESTUDIANTES',
        description: 'Backend para servir datos de factura al frontend Angular',
        availableEndpoints: [
            'GET /api/invoice',
            'GET /api/health'
        ]
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 SERVIDOR BACKEND INICIADO');
    console.log(`🌐 URL local: http://localhost:${PORT}`);
});
