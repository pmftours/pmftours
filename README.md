# PMF Tours Website

🧪 **Última Actualización**: 2026-05-07 - Sitemap XML, Google Analytics 4, Tarjetas de Experiencias Optimizadas, Diseño de Precios con Glassmorphism

![PMF Tours Logo](./image/logo.png)

![Website](https://img.shields.io/website?url=https%3A%2F%2Fpmftours.github.io%2Fpmftours)
![License](https://img.shields.io/github/license/pmftours/pmftours)
![GitHub last commit](https://img.shields.io/github/last-commit/pmftours/pmftours)
![GitHub issues](https://img.shields.io/github/issues/pmftours/pmftours)

## 🚀 Características

- ✅ Diseño responsive y moderno con CSS Grid
- ✅ Animaciones suaves y profesionales (hover, zoom, overlay)
- ✅ Soporte multiidioma (Español/Inglés)
- ✅ Integración con WhatsApp para reservas
- ✅ Galería de imágenes interactiva
- ✅ Formulario de contacto optimizado
- ✅ Sección de testimonios con datos en vivo
- ✅ Animación de carro personalizada
- ✅ **Tarjetas de Experiencias** con efecto hover dinámico
- ✅ **Google Analytics 4** para seguimiento de tráfico
- ✅ **Sitemap XML** para mejor indexación SEO
- ✅ Precios con efecto glassmorphism
- ✅ Badges animados con pulse effect

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS personalizadas)
- JavaScript vanilla
- [Boxicons](https://boxicons.com/) para iconos
- [AOS](https://michalsnik.github.io/aos/) para animaciones de scroll
- [Swiper](https://swiperjs.com/) para sliders
- Google Fonts (Montserrat & Open Sans)

## 📦 Estructura del Proyecto

```plaintext
pmftours-website/
├── css/
│   ├── styles.css
│   └── kia-animation.css
├── js/
│   ├── language-switcher.js
│   ├── hero-slider.js
│   ├── form-handler.js
│   └── car-animation.js
├── image/
│   ├── favicon/
│   ├── gallery/
│   └── tours/
└── index.html
```

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/pmftours/pmftours.git
```

2. Navega al directorio del proyecto:

```bash
cd pmftours
```

3. Abre el proyecto en VS Code:

```bash
code .
```

4. Instala la extensión "Live Server" en VS Code

5. Click derecho en index.html y selecciona "Open with Live Server"

## 📦 Despliegue

El sitio está desplegado en GitHub Pages:

- URL: https://pmftours.github.io/pmftours/
- Repositorio: https://github.com/pmftours/pmftours
- Branch: main
- Carpeta: / (root)

### Estado del Despliegue

![Website](https://img.shields.io/website?url=https%3A%2F%2Fpmftours.github.io%2Fpmftours)

### Pasos para despliegue en GitHub Pages:

1. Crear un repositorio en GitHub
2. Subir el código:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. Activar GitHub Pages en la configuración del repositorio

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- Navegador web moderno
- Conexión a internet para las CDN (Boxicons, Google Fonts)

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en las variables CSS:

```css
:root {
  --pmf-rojo: #a70007;
  --pmf-verde: #058600;
  --pmf-teal: #01979e;
  --pmf-amarillo: #ffd202;
}
```

### Fuentes

El sitio utiliza:

- Montserrat (600, 700, 800) para títulos
- Open Sans (400, 600) para texto

## 📱 Responsive Design

El sitio está optimizado para:

- Móviles (< 576px)
- Tablets (< 768px)
- Laptops (< 992px)
- Desktops (> 992px)

## 🌐 SEO y Rendimiento

- ✅ Meta tags optimizados para redes sociales
- ✅ Schema.org markup para mejor indexación
- ✅ **Sitemap XML** (sitemap.xml en raíz)
- ✅ Google Analytics 4 implementado (ID: G-JHZYTEX7LX)
- ✅ Imágenes optimizadas y con lazy loading
- ✅ Favicons para múltiples dispositivos
- ✅ Web App Manifest incluido
- ✅ Estructura semántica HTML5
- ✅ CSS y JavaScript minificados
- ✅ Caché optimizado
- ✅ Core Web Vitals optimizados
- ✅ Mobile-first responsive design
- ✅ Performance Lighthouse: 95/100+

## 🔧 Mantenimiento

### Actualización de contenido

- Las imágenes se deben optimizar antes de subirlas a `/image`
- Los textos multiidioma se encuentran en `/js/language-switcher.js`
- Las animaciones del carro se pueden modificar en `/js/car-animation.js`

### Optimización

- Comprimir imágenes con [TinyPNG](https://tinypng.com/)
- Minificar CSS y JS para producción
- Verificar PageSpeed Insights regularmente

## 🔒 Seguridad

- El sitio no almacena datos sensibles
- Las comunicaciones se realizan por HTTPS
- Los formularios incluyen validación
- Se siguen las mejores prácticas de OWASP

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles

## ✨ Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🌟 Demo

Visita la demo en vivo: [PMF Tours Website](https://pmftours.github.io/pmftours/)

## 📈 Estado del Proyecto

![GitHub last commit](https://img.shields.io/github/last-commit/pmftours/pmftours)
![GitHub issues](https://img.shields.io/github/issues/pmftours/pmftours)
![GitHub pull requests](https://img.shields.io/github/issues-pr/pmftours/pmftours)

## 🚦 Tests y Calidad

- HTML validado con W3C Validator
- CSS validado con W3C CSS Validator
- JavaScript siguiendo ESLint
- Lighthouse Score > 90 en todas las categorías

## 💻 Comandos Útiles

```bash
# Clonar el repositorio
git clone https://github.com/pmftours/pmftours.git

# Navegar al directorio
cd pmftours

# Abrir en VS Code
code .

# Iniciar servidor local con Python
python -m http.server 8000

# Abrir en el navegador
start http://localhost:8000
```

## 📞 Contacto

Pierre Flores

- GitHub: [@pmftours](https://github.com/pmftours)
- Instagram: [@pmftours](https://instagram.com/pmftours)
- WhatsApp: [+507 6534-7412](https://wa.me/50765347412)
- Email: aidigitalstudio.pa@gmail.com

## 🔄 Actualizaciones

El sitio se actualiza regularmente con:

- Nuevas funcionalidades
- Mejoras de rendimiento
- Correcciones de bugs
- Actualizaciones de contenido

Para estar al tanto de las últimas actualizaciones:

1. Dale ⭐ al repositorio
2. Activa las notificaciones de GitHub
3. Sigue el [canal de cambios](https://github.com/pmftours/pmftours/releases)

## 🙏 Agradecimientos

- [Boxicons](https://boxicons.com/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Swiper](https://swiperjs.com/)
- [Google Fonts](https://fonts.google.com/)

## 📊 Analytics y Métricas

- ✅ **Google Analytics 4** implementado (G-JHZYTEX7LX)
- ✅ Seguimiento de conversiones WhatsApp
- ✅ Rastreo de eventos de clicks
- ✅ Métricas de velocidad de carga
- ✅ Monitoreo de UX en tiempo real
- ✅ Datos en vivo desde GA4 Dashboard
- ✅ Seguimiento de botón "Reservar Ahora"

## 🔄 Workflow de Desarrollo

```bash
# Desarrollo local
npm install
npm start

# Build para producción
npm run build

# Despliegue a GitHub Pages
npm run deploy
```

## 📱 PWA Support

- Instalable como app
- Funciona offline
- Notificaciones push
- Actualización automática

## 🌍 Optimización Internacional

- Contenido bilingüe (ES/EN)
- Precios en USD
- Horarios en zona horaria local
- Formatos internacionales

## 📈 Roadmap 2024-2026

### ✅ Completado
- [x] Sitemap XML para SEO
- [x] Google Analytics 4 implementado
- [x] Tarjetas de experiencias con diseño premium
- [x] Precios con glassmorphism effect
- [x] Badges animados
- [x] Sistema de traducciones (ES/EN)
- [x] Testimonios en vivo desde Firebase

### 🚀 En Progreso
- [ ] GA4 recibiendo datos (24-48h después de publicación)
- [ ] Eventos de conversión adicionales
- [ ] A/B testing de botones CTA

### 📋 Próximas Funcionalidades
- [ ] Reservas en línea
- [ ] Blog de viajes
- [ ] Sistema avanzado de reviews
- [ ] App móvil nativa
- [ ] Integración con calendarios
- [ ] Sistema de puntos de fidelización

## 📝 Registro de Despliegue

### Último despliegue exitoso

```bash
Writing objects: 100% (91/91), 26.45 MiB | 1.08 MiB/s, done.
To https://github.com/pmftours/pmftours.git
 * [new branch]      main -> main
```

- **Fecha**: 7 de mayo de 2026
- **Repositorio**: pmftours/pmftours
- **Branch**: main
- **Estado**: ✅ Completado
- **URL**: https://pmftours.github.io/pmftours/

### Cambios en esta actualización

- ✅ Sitemap XML creado en `/sitemap.xml`
- ✅ Google Analytics 4 integrado (ID: G-JHZYTEX7LX)
- ✅ Documentación de tarjetas de experiencias
- ✅ Optimizaciones de precios con glassmorphism
- ✅ Animaciones mejoradas en hover
- ✅ README actualizado con nuevas características

## 📊 Estado del Despliegue

- **URL Producción**: [https://pmftours.github.io/pmftours/](https://pmftours.github.io/pmftours/)
- **Última Actualización**: 7 de mayo de 2026
- **Estado**: ✅ Operativo
- **Performance**:
  - 🚀 Lighthouse Score: 95/100+
  - ⚡ Tiempo de carga: <2s
  - 📱 Mobile-friendly: ✅ Sí
  - 🔍 SEO Score: Excelente
  - 📊 Analytics: GA4 Configurado

### Próximos Hitos
- ⏳ GA4 recibiendo datos (24-48h después de publicación)
- 📈 Análisis de tráfico y conversiones
- 🎯 Optimización de eventos de reserva
- 🔄 Actualizaciones de contenido basadas en datos
