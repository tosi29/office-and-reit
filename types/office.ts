export interface OfficeData {
  month: string;
  vacancyRate: number; // percentage
  rentalRate: number; // yen per sqm per month
  reitIndex: number; // Tokyo REIT index value
  date: string; // ISO date string
}

export interface OfficeApiResponse {
  data: OfficeData[];
  success: boolean;
}