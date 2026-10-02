export const site = {
  name: "JAYRODZ",
  legal: "JAYRODZ & ASOCIADOS SRL",
  tagline: "La solución a tus problemas",
  product: "Préstamos semanales",
  country: "República Dominicana",
  phoneDisplay: "829-525-3411",
  phoneHref: "tel:+18295253411",
  whatsapp: "18295253411",
  instagram: "@prestamos.jayrodz",
  instagramHref: "https://instagram.com/prestamos.jayrodz",
  slogan: "Tu confianza, nuestro compromiso",
  rnc: "132759542",
  rncLine: "Jayrodz & Asociados S.R.L. · RNC 132759542",
  url: "https://prestamos-jayrodz.grok.me",
};

export const fraudNotice =
  "JAYRODZ & ASOCIADOS SRL no pide claves, códigos ni depósitos adelantados para aprobar un préstamo. Si te piden eso, no es de nosotros.";

export const requirements = [
  "Cédula o pasaporte, para depurar el crédito.",
  "Vivir o trabajar en una zona de cobertura.",
  "Empleo o negocio propio.",
  "Una referencia personal.",
  "Un garante.",
];

export const faqs = [
  {
    q: "¿De cuánto son los préstamos y en cuánto tiempo se pagan?",
    a: "De RD$ 5,000 a RD$ 100,000. El plazo es de 10 semanas. Desde RD$ 50,000 también puedes elegir 13 semanas. La cuota es fija y la ves en la tabla antes de pedir.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Semana a semana. Vamos a la puerta de tu casa o negocio, o pagas por transferencia. Como te quede más cómodo.",
  },
  {
    q: "¿Hace falta un garante?",
    a: "Sí. Se requiere un garante, con nombre, teléfono y parentesco. Sin garante no se evalúa el crédito.",
  },
  {
    q: "¿Qué significa «solo centro»?",
    a: "En esas localidades atendemos el centro del pueblo, no las afueras. Si no estás seguro, escríbenos y te decimos claro.",
  },
  {
    q: "¿En cuánto tiempo responden?",
    a: "Por WhatsApp te respondemos lo antes posible, en horario de atención. La aprobación está sujeta a evaluación y depuración de crédito.",
  },
  {
    q: "¿Qué documentos piden?",
    a: "La cédula o el pasaporte son obligatorios y se utilizan únicamente para depurar el crédito. También se solicitan los datos del empleo o negocio propio, una referencia personal y un garante.",
  },
  {
    q: "¿Y si mi pueblo no está en la lista?",
    a: "Escríbenos igual. Si no llegamos, te lo decimos. No inventamos cobertura.",
  },
  {
    q: "¿Me pueden pedir un depósito o una clave?",
    a: "No. Nadie de Jayrodz te pide depósito adelantado, clave ni código para aprobar. Si te lo piden, no es de nosotros.",
  },
];

export function coverageWaMessage(city?: string) {
  if (city) {
    return `Hola, quiero información sobre préstamos semanales de JAYRODZ & ASOCIADOS SRL en ${city}.`;
  }
  return "Hola, quiero saber si cubren mi zona. Busco un préstamo semanal de JAYRODZ & ASOCIADOS SRL.";
}

export function pageHead(path: string, title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    links: [{ rel: "canonical" as const, href: `${site.url}${path}` }],
  };
}

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Hola, quiero información sobre préstamos semanales de JAYRODZ & ASOCIADOS SRL.";

export type NavItem = { to: string; label: string };

export const navItems: NavItem[] = [
  { to: "/planes", label: "Tabla" },
  { to: "/cobertura", label: "Localidades" },
  { to: "/contacto", label: "Contacto" },
];

export type City = { name: string; centroOnly?: boolean };

export const cities: City[] = [
  { name: "Baní", centroOnly: true },
  { name: "Bonao", centroOnly: true },
  { name: "Cabarete" },
  { name: "Cabrera" },
  { name: "Constanza" },
  { name: "El Seibo" },
  { name: "Gaspar Hernández" },
  { name: "Hato Mayor" },
  { name: "La Romana" },
  { name: "La Vega", centroOnly: true },
  { name: "Moca", centroOnly: true },
  { name: "Montellano" },
  { name: "Puerto Plata", centroOnly: true },
  { name: "Río San Juan" },
  { name: "Samaná" },
  { name: "San Cristóbal", centroOnly: true },
  { name: "Sosúa" },
  { name: "Tenares" },
  { name: "Veragua" },
];

export type LoanOption = { amount: number; weekly: number };

export const plan10: LoanOption[] = [
  { amount: 5000, weekly: 700 },
  { amount: 6000, weekly: 840 },
  { amount: 10000, weekly: 1400 },
  { amount: 15000, weekly: 2100 },
  { amount: 20000, weekly: 2800 },
  { amount: 25000, weekly: 3500 },
  { amount: 30000, weekly: 4200 },
  { amount: 40000, weekly: 5600 },
  { amount: 50000, weekly: 7000 },
  { amount: 60000, weekly: 8400 },
  { amount: 75000, weekly: 10500 },
  { amount: 80000, weekly: 11200 },
  { amount: 100000, weekly: 14000 },
];

export const plan13: LoanOption[] = [
  { amount: 50000, weekly: 5400 },
  { amount: 55000, weekly: 5940 },
  { amount: 60000, weekly: 6480 },
  { amount: 65000, weekly: 7020 },
  { amount: 70000, weekly: 7560 },
  { amount: 75000, weekly: 8100 },
  { amount: 80000, weekly: 8640 },
  { amount: 85000, weekly: 9180 },
  { amount: 90000, weekly: 9720 },
  { amount: 95000, weekly: 10260 },
  { amount: 100000, weekly: 10800 },
];

export type PlanId = 10 | 13;

export const MIN_PLAN13_AMOUNT = 50000;

export function optionsFor(plan: PlanId): LoanOption[] {
  return plan === 10 ? plan10 : plan13;
}

export function findOption(plan: PlanId, amount: number): LoanOption | undefined {
  return optionsFor(plan).find((o) => o.amount === amount);
}

export function weeklyFor(plan: PlanId, amount: number): number {
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  const listed = findOption(plan, amount);
  if (listed) return listed.weekly;
  const total = plan === 13 ? 1.404 : 1.4;
  return Math.round((amount * total) / plan);
}

export function totalPay(weekly: number, weeks: PlanId) {
  return weekly * weeks;
}

export function formatRD(n: number) {
  return `RD$ ${n.toLocaleString("es-DO")}`;
}

export function formatCedula(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11) return value.trim();
  return `${digits.slice(0, 3)}-${digits.slice(3, 10)}-${digits.slice(10)}`;
}

export function formatPhone(value: string) {
  const nums = value.replace(/\D/g, "").slice(0, 10);
  if (nums.length <= 3) return nums;
  if (nums.length <= 6) return `${nums.slice(0, 3)}-${nums.slice(3)}`;
  return `${nums.slice(0, 3)}-${nums.slice(3, 6)}-${nums.slice(6)}`;
}

export const benefits = [
  {
    title: "Aprobación rápida",
    body: "Te respondemos pronto. Sin vueltas innecesarias ni papeles eternos.",
  },
  {
    title: "Total discreción",
    body: "Tu caso se trata en privado. Solo hablamos contigo.",
  },
  {
    title: "Pago fácil",
    body: "Vamos a la puerta de tu casa o negocio, o pagas por transferencia. Como te quede más cómodo.",
  },
  {
    title: "Atención personalizada",
    body: "Te acompañamos pueblo a pueblo. No eres un número en una fila.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Elige el monto",
    body: "Mira la tabla de 10 o 13 semanas y escoge lo que te sirve.",
  },
  {
    n: "02",
    title: "Llena la solicitud",
    body: "Nombre, teléfono, ciudad y monto. Te toma un minuto.",
  },
  {
    n: "03",
    title: "Te contactamos",
    body: "Te escribimos por WhatsApp para confirmar y coordinar.",
  },
  {
    n: "04",
    title: "Pagas semana a semana",
    body: "Cuota fija. Vamos a tu casa o negocio, o pagas por transferencia.",
  },
];
