/**
 * Efecto 3D Hover para imágenes
 * Simula perspectiva 3D al pasar el mouse, similar a Aceternity UI
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
      card.style.perspective = `${this.options.perspective}px`;
      card.style.cursor = 'pointer';

      const img = card.querySelector('img');
      if (img) {
        img.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
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

    const rotateX = ((mouseY - centerY) / centerY) * this.options.intensity;
    const rotateY = ((centerX - mouseX) / centerX) * this.options.intensity;

    const img = card.querySelector('img');
    if (img) {
      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${this.options.scale})`;
    }
  }

  onMouseLeave(card) {
    const img = card.querySelector('img');
    if (img) {
      img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    }
  }
}

// Aplicar efecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  // Efecto para Pierre Flores
  new Card3DEffect('.pierre-card', {
    perspective: 1200,
    intensity: 20,
    scale: 1.05,
  });

  // Efecto para Galería
  new Card3DEffect('.gallery-item', {
    perspective: 1000,
    intensity: 15,
    scale: 1.08,
  });
});
