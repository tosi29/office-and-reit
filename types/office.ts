export interface OfficeData {
  month: string;
  vacancyRate: number; // average vacancy rate percentage
  rentalRate: number; // average rental rate in yen per sqm per month (display converted to yen per tsubo)
  reitIndex: number; // Tokyo Stock Exchange REIT index value
  date: string; // ISO date string
}

export interface OfficeApiResponse {
  data: OfficeData[];
  success: boolean;
}