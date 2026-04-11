# Variables de entorno del proyecto Homez Dev (.env.local)
# Archivo: /home/z/my-project/ecosystem/web/homez-dev/.env.local

## Variables Activas

| Variable | Valor | Descripción |
|----------|-------|-------------|
| AUTH_PROVIDER | mock | Proveedor de autenticación (mock/ricco-id/database) |
| DATA_PROVIDER | mock | Proveedor de datos (mock/database) |
| DATA_SOURCE | DATABASE | Fuente de datos (DATABASE/API) |
| DATABASE_URL | file:./dev.db | URL de conexión a base de datos SQLite |
| NEXTAUTH_SECRET | dev-secret-key | Secreto para NextAuth.js (cambiar en producción) |
| NEXTAUTH_URL | http://localhost:3000 | URL base de autenticación NextAuth |
| NEXT_PUBLIC_APP_URL | http://localhost:3000 | URL pública de la aplicación |
| NEXT_PUBLIC_APP_NAME | Homez Dev | Nombre público de la aplicación |
| ENABLE_AI_FEATURES | true | Habilita funciones de IA (chat, etc.) |
| ENABLE_PAYMENT_FEATURES | true | Habilita funciones de pago |
| DEBUG_MODE | true | Modo depuración activado |
| LOG_LEVEL | debug | Nivel de logging (error/warn/info/debug) |

## Variables Disponibles en .env.example (no configuradas aún)

| Variable | Valor Default | Descripción |
|----------|---------------|-------------|
| API_GATEWAY_URL | http://api.ricco.com | URL principal del API Gateway |
| RICCO_ID_URL | http://id.ricco.com | Servicio de autenticación ricco-id |
| RICCO_ID_CLIENT_ID | homez-dev | Client ID para ricco-id |
| RICCO_ID_CLIENT_SECRET | your-client-secret | Client Secret para ricco-id |
| RICCO_AI_URL | http://api.ricco.com/v1/ai | Endpoint del servicio ricco-ai |
| RICCO_AI_API_KEY | your-ai-api-key | API Key para ricco-ai |
| RICCO_PAYMENT_URL | http://api.ricco.com/v1/payment | Endpoint de pagos |
| RICCO_PAYMENT_API_KEY | your-payment-api-key | API Key para pagos |
| GOOGLE_MAPS_API_KEY | your-google-maps-api-key | API Key para Google Maps |
| MAPBOX_ACCESS_TOKEN | your-mapbox-token | Token para Mapbox |
| STORAGE_PROVIDER | local | Proveedor de almacenamiento (local/s3/cloudinary) |
| S3_BUCKET | your-bucket-name | Nombre del bucket S3 |
| S3_ACCESS_KEY | your-access-key | Access Key S3 |
| S3_SECRET_KEY | your-secret-key | Secret Key S3 |
| S3_REGION | us-east-1 | Región S3 |
| SMTP_HOST | smtp.example.com | Servidor SMTP |
| SMTP_PORT | 587 | Puerto SMTP |
| SMTP_USER | your-smtp-user | Usuario SMTP |
| SMTP_PASSWORD | your-smtp-password | Contraseña SMTP |
| EMAIL_FROM | noreply@homez.com | Email remitente |
| NEXT_PUBLIC_GA_ID | G-XXXXXXXXXX | Google Analytics ID |
| NEXT_PUBLIC_SENTRY_DSN | (vacío) | Sentry DSN para tracking de errores |
| RATE_LIMIT_MAX | 100 | Límite máximo de peticiones |
| RATE_LIMIT_WINDOW_MS | 60000 | Ventana de rate limiting (ms) |
| ENABLE_VIRTUAL_TOURS | true | Habilita tours virtuales |
| ENABLE_MORTGAGE_CALCULATOR | true | Habilita calculadora de hipotecas |
