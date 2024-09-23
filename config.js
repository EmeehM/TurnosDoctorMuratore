import * as process from './process';
require('dotenv').config();

const config = {
    API_KEY_SUPABASE: process.env.REACT_API_KEY_SUPABASE,
    API_URL_SUPABASE : process.env.REACT_API_KEY_SUPABASE,
    CODIGO_ACCESO: process.env.REACT_APP_CODIGO_ACCESO
};