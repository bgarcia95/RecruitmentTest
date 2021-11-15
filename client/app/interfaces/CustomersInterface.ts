// Generated by https://quicktype.io

export interface CustomerResponse {
  status: string;
  revenues: number;
  id: string;
  sessionBalance?: number;
  name: string;
  email: null | string;
  phone: string;
  stripeId: string;
  userId: string;
  __v: number;
  password?: string;
  balance?: {[key: string]: number};
}
