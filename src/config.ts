export const portfolioConfig = {
  name: 'Edna Castañeda',
  role: 'Desarrolladora frontend',
  profileImage: 'profile.jpg',
  email: 'ednacastaneda021@gmail.com',
  github: 'https://github.com/nenazapata021/nenazapata021',
  linkedin: 'https://www.linkedin.com/in/edna-casta%C3%B1eda-869769417/',
  whatsapp: 'https://wa.me/qr/WSVOIKRLHGQJL1',
  availability: 'Disponible para proyectos',
  intro: 'Construyo experiencias web limpias, rápidas y difíciles de olvidar.',
  about: [
    'Soy Edna, desarrolladora de software especializada en frontend. Trabajo con HTML, CSS, JavaScript y frameworks modernos para convertir ideas complejas en interfaces claras, vivas y fáciles de recorrer.',
    'Me gusta trabajar en el punto donde se encuentran el diseño y el código. Pienso en la estructura, la accesibilidad y el rendimiento desde el inicio, para que cada interfaz funcione bien y se vea mejor.',
    'Actualmente exploro animación web, sistemas de diseño y nuevas formas de contar historias a través de la tecnología. ¿Tienes un proyecto en mente? Hablemos.',
  ],
  stats: [
    { value: 12, suffix: '+', label: 'Proyectos terminados' },
    { value: 3, suffix: ' años', label: 'Creando interfaces web' },
    { value: 100, suffix: '%', label: 'Enfoque responsive' },
    { value: 8, suffix: '+', label: 'Tecnologías dominadas' },
  ],
  projects: [
    { number: '01', title: 'Ecologia Verde y Emocional(EVYE)', description: 'Ecología Verde y Emocional (EVYE) es una iniciativa que promueve el cuidado del medio ambiente, el amor por la naturaleza y el bienestar de las personas, fomentando hábitos sostenibles para construir un mundo más limpio, verde y saludable. 🌱💚', stack: ['React', 'TypeScript', 'TailwindCSS'], type: 'Sistema de datos', accent: 'violet' },
    { number: '02', title: 'Refugio Rodante', description: 'Refugio Rodante es una plataforma web que facilita la búsqueda y reserva de parqueaderos en Medellín mediante mapas interactivos y reservas digitales, mejorando la movilidad y la experiencia de los conductores.', stack: ['PHP', 'Laravel'], type: 'Experiencia de compra', accent: 'orange' },
    { number: '03', title: 'Fruty Fantasty', description: 'Fruty Fantasty es una tienda en línea que ofrece deliciosas preparaciones con frutas frescas, combinando sabor, creatividad y diversión. Nuestro propósito es promover hábitos saludables y demostrar que comer frutas puede ser una experiencia deliciosa y divertida. 🍓🍉🍒', stack: ['React', 'TypeScript', 'TailwindCSS'], type: 'Producto digital', accent: 'pink' },
  ],
  skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Git', 'APIs REST', 'Payload', 'Angular', 'TailwindCSS'],
  socials: [
    { label: 'GitHub', eyebrow: 'Código y experimentos', mark: 'GH', className: 'social-github', href: 'https://github.com/nenazapata021/nenazapata021' },
    { label: 'LinkedIn', eyebrow: 'Trayectoria profesional', mark: 'in', className: 'social-linkedin', href: 'https://www.linkedin.com/in/edna-casta%C3%B1eda-869769417/' },
    { label: 'WhatsApp', eyebrow: 'Hablemos directo', mark: 'WA', className: 'social-whatsapp', href: 'https://wa.me/3015579794' },
  ],
} as const
