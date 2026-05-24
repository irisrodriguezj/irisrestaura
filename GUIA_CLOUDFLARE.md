# Guía: Publicar web en Cloudflare Pages

## Paso 1: Crear cuenta en Cloudflare

1. Ir a [cloudflare.com](https://cloudflare.com)
2. Hacer clic en "Sign Up" (arriba a la derecha)
3. Registrarse con email y contraseña
4. Verificar email

---

## Paso 2: Crear proyecto en Cloudflare Pages

### Opción A: Usando GitHub (MÁS FÁCIL)

1. En Cloudflare, ir a **Pages** (lado izquierdo del menú)
2. Click en **"Create a project"**
3. Seleccionar **"Connect to Git"**
4. Autorizar Cloudflare con tu cuenta GitHub
5. Seleccionar el repositorio con tu web
6. Click en **"Save and Deploy"**

*Los archivos se subirán automáticamente cada vez que hagas push a GitHub*

### Opción B: Sin GitHub (RÁPIDO)

1. En Cloudflare, ir a **Pages**
2. Click en **"Create a project"** → **"Direct upload"**
3. Subir la carpeta `irisrestaura_web_v1` completa (con assets y todo)
4. Darle un nombre al proyecto
5. Click en **"Deploy"**

*Te dará un URL como: `irisrestaura.pages.dev`*

---

## Paso 3: Conectar tu dominio GoDaddy a Cloudflare

### En GoDaddy:

1. Ir a [godaddy.com](https://godaddy.com) → **My Products**
2. Encontrar tu dominio
3. Click en **"Manage DNS"** o **"DNS"**
4. Buscar **"Nameservers"** o **"Servidores de nombres"**
5. Copiar los nameservers de Cloudflare (ver paso siguiente)

### En Cloudflare:

1. En Pages, click en tu proyecto
2. Ir a **Settings** → **Custom Domain**
3. Escribir tu dominio (ej: `irisrestaura.com`)
4. Cloudflare te mostrará los **nameservers**:
   - `anna.ns.cloudflare.com`
   - `noah.ns.cloudflare.com`
5. Copiar estos nameservers

### Volver a GoDaddy:

1. En el apartado de Nameservers, **reemplaza** los actuales con los de Cloudflare
2. Guardar cambios
3. Esperar 5-48 horas (normalmente 30 minutos)

---

## Paso 4: Verificar que funciona

Una vez propagado (puedes tardar un rato):

1. Abrir navegador
2. Escribir tu dominio: `irisrestaura.com` (o el que sea)
3. ¡Debería cargar tu web!

---

## Troubleshooting

**La web no carga después de 1 hora:**
- En Cloudflare → Pages → Tu proyecto → Custom Domain
- Verifica que el dominio esté conectado correctamente
- Intenta limpiar caché del navegador (Ctrl+Shift+Supr)

**Ver los nameservers actuales de tu dominio:**
```
nslookup irisrestaura.com
```

---

## Próximos pasos (opcionales)

✅ **HTTPS automático** - Cloudflare lo activa por defecto
✅ **CDN global** - Tu web será rápida en todo el mundo
✅ **SSL/TLS** - Conexión segura automática
✅ **Análisis** - Ver visitas en Cloudflare Analytics

---

**¿Necesitas ayuda en algún paso?**
