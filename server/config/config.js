// 
// Puerto
//
process.env.PORT = process.env.PORT || 3000;

//
// Entorno
//
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//
// Vencimiento del Token
//
process.env.CADUCIDAD_TOKEN = Number(60 * 60 * 24 * 30);

//
// Seed
//
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//
// BD
//
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//
// Google Cliente ID
//
process.env.CLIENT_ID = process.env.CLIENT_ID || '468740813744-4tiqm2gfcndi72lgarvfumegdl5t3l8k.apps.googleusercontent.com';