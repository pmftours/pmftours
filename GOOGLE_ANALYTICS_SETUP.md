# 📊 Configuración Google Analytics 4 - PMF Tours

## ¿Qué es Google Analytics 4?
- **Herramienta GRATIS** de Google para medir tráfico web
- Ver visitantes, comportamiento, conversiones, ubicación, dispositivos, etc.
- Actualizaciones en tiempo real
- Sin límite de datos

---

## ✅ Paso 1: Crear Cuenta en Google Analytics

1. Ve a **https://analytics.google.com/**
2. Haz clic en **"Empezar"** o inicia sesión con tu cuenta Google
3. Haz clic en **"Crear propiedad"**
4. Completa el formulario:
   - **Nombre de la propiedad:** `PMF Tours`
   - **Zona horaria:** `America/Panama`
   - **Moneda:** `USD` o `PAB`
5. Haz clic en **"Crear"**

---

## ✅ Paso 2: Crear Flujo de Datos (Web)

1. En la sección **"Recopilación de datos"**, haz clic en **"Crear flujo"**
2. Selecciona **"Web"**
3. En el formulario:
   - **URL del sitio web:** `https://pmftours.github.io/pmftours/`
   - **Nombre de la transmisión:** `PMF Tours Website`
4. Haz clic en **"Crear transmisión"**

---

## ✅ Paso 3: Obtener tu ID de Medición

1. Google te mostrará una página con tu **ID de medición** (formato: `G-XXXXXXXXXX`)
2. **COPIA ese ID** (ej: `G-ABC123DEF45`)

---

## ✅ Paso 4: Agregar el ID al Sitio

### Opción A: Manual (Recomendado)

1. Abre el archivo `index.html` en tu editor
2. Busca esta línea (aparece 2 veces):
   ```
   G-XXXXXXXXXX
   ```
3. Reemplaza `G-XXXXXXXXXX` con tu **ID de medición real**

   **Ejemplo:**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF45"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-ABC123DEF45');  ← Reemplaza aquí también
   </script>
   ```

4. Guarda el archivo
5. Haz commit y push:
   ```bash
   git add index.html
   git commit -m "feat: agregar Google Analytics 4 a PMF Tours"
   git push
   ```

---

## ✅ Paso 5: Verificar que Funciona

1. Espera **10-15 minutos** a que GitHub Pages actualice
2. Ve a tu sitio: https://pmftours.github.io/pmftours/
3. Abre **DevTools** (F12) → Consola
4. Escribe: `gtag` y presiona Enter
5. Si ves una función, ¡Google Analytics está cargado! ✅

---

## ✅ Paso 6: Ver los Datos en Google Analytics

1. Regresa a https://analytics.google.com/
2. En el menú lateral, ve a **"Informes"** → **"Tiempo real"**
3. Podrás ver visitantes en vivo 📊

---

## 📋 Checklist Final

- [ ] Cuenta Google Analytics creada
- [ ] Propiedad y flujo de datos (Web) creados
- [ ] ID de medición obtenido (G-XXXXXXXXXX)
- [ ] ID reemplazado en `index.html` (2 lugares)
- [ ] Cambios committed y pusheado
- [ ] GitHub Pages actualizado (10-15 min)
- [ ] Verificación en DevTools completada
- [ ] Datos visibles en Google Analytics después de 24-48 horas

---

## 💡 Consejos

- **Datos no aparecen inmediatamente**: GA tarda 24-48 horas en procesar datos iniciales
- **Tú no eres rastreado**: Si usas tu mismo navegador, desactiva GA desde DevTools o usa modo incógnito
- **Combina con Search Console**: Enlaza tu cuenta de Search Console a Analytics para más insights

---

## 📞 ¿Necesitas ayuda?

Si tienes dudas sobre cómo obtener el ID o configurar GA, pregunta y te ayudaré 👍
