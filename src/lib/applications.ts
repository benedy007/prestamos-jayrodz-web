const KEY = "jayrodz-solicitudes";

export type PersonalRef = {
  name: string;
  phone: string;
  relation: string;
};

export type LoanApplication = {
  id: string;
  source: string;
  sourceName: string;
  name: string;
  nickname: string;
  idKind: string;
  cedula: string;
  phone: string;
  phone2: string;
  city: string;
  sector: string;
  street: string;
  house: string;
  housing: string;
  housingTime: string;
  landmark: string;
  latitude: string;
  longitude: string;
  workKind: string;
  workName: string;
  workRole: string;
  workPhone: string;
  workTime: string;
  workSector: string;
  workStreet: string;
  workHouse: string;
  workLandmark: string;
  workLatitude: string;
  workLongitude: string;
  ref1: PersonalRef;
  guarantor: PersonalRef;
  plan: 10 | 13;
  amount: number;
  weekly: number;
  total: number;
  notes: string;
  createdAt: string;
};

export function loadApplications(): LoanApplication[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as LoanApplication[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveApplication(
  input: Omit<LoanApplication, "id" | "createdAt">,
): LoanApplication {
  const application: LoanApplication = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [application, ...loadApplications()].slice(0, 30);
  localStorage.setItem(KEY, JSON.stringify(next));
  return application;
}
