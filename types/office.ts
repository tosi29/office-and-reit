export interface OfficeData {
  month: string;
  vacancyRate: number; // average vacancy rate percentage
  rentalRate: number; // average rent in yen per tsubo
  reitIndex: number; // Tokyo Stock Exchange REIT index value
  date: string; // ISO date string
}

export interface OfficeApiResponse {
  data: OfficeData[];
  success: boolean;
}