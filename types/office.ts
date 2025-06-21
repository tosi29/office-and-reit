export interface OfficeData {
  month: string;
  vacancyRate: number; // percentage
  rentalRate: number; // yen per sqm per month
  date: string; // ISO date string
}

export interface OfficeApiResponse {
  data: OfficeData[];
  success: boolean;
}