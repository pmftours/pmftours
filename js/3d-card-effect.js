/**
 * Efecto 3D Hover para imágenes - VERSIÓN MEJORADA
 * Perspectiva 3D que funciona incluso con overflow:hidden
 * Rotación suave al mover el mouse sobre la tarjeta
 */

class Card3DEffect {
  constructor(selector, options = {}) {
    this.selector = selector;
    this.cards = document.querySelectorAll(selector);
    this.options = {
      perspective: options.perspective || 1000,
      intensity: options.intensity || 15,
      scale: options.scale || 1.02,
      ...options,
    };
    
    this.init();
  }

  init() {
    this.cards.forEach((card) => {
      // Aplicar perspectiva al contenedor
      card.style.perspective = `${this.options.perspective}px`;
      card.style.cursor = 'pointer';
      card.style.transformStyle = 'preserve-3d';
      
      const img = card.querySelector('img');
      if (img) {
        // Configurar la imagen para transformaciones suaves y fluidas
        img.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)';
        img.style.transformStyle = 'preserve-3d';
        img.style.willChange = 'transform';
        img.style.backfaceVisibility = 'hidden';
        img.style.display = 'block'; // Evitar espacios en blanco
      }
      
      card.addEventListener('mouseenter', () => this.onMouseEnter(card));
      card.addEventListener('mousemove', (e) => this.onMouseMove(e, card));
      card.addEventListener('mouseleave', () => this.onMouseLeave(card));
    });
  }

  onMouseEnter(card) {
    const img = card.querySelector('img');
    if (img) {
      img.style.transform = `scale(${this.options.scale})`;
    }
  }

  onMouseMove(e, card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calcular ángulos de rotación basados en la posición del mouse
    const rotateX = ((mouseY - centerY) / centerY) * this.options.intensity;
    const rotateY = ((centerX - mouseX) / centerX) * this.options.intensity;
    
    const img = card.querySelector('img');
    if (img) {
      // Aplicar transformación 3D suave con translateZ para efecto de profundidad
      img.style.transform = `
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(${this.options.scale})
        translateZ(20px)
      `;
    }
  }

  onMouseLeave(card) {
    const img = card.querySelector('img');
    if (img) {
      // Transición suave al estado inicial
      img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)';
    }
  }
}

// Aplicar efecto al cargar la página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEffects);
} else {
  // Si el documento ya está cargado (scripts defer)
  initializeEffects();
}

function initializeEffects() {
  console.log('🎨 Inicializando efectos 3D...');
  
  // Efecto para Pierre Flores (Nosotros)
  new Card3DEffect('.pierre-card', {
    perspective: 1200,
    intensity: 25,    // Mayor intensidad de rotación
    scale: 1.06,      // Escala más pronunciada
  });
  
  // Efecto para Galería (Momentos Capturados)
  new Card3DEffect('.gallery-item', {
    perspective: 1000,
    intensity: 18,    // Intensidad moderada
    scale: 1.10,      // Escala más visible
  });
  
  console.log('✅ Efectos 3D activados en Pierre Flores y Galería');
}
