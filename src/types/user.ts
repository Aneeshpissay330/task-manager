export interface UserProfile {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  isVerified: boolean;
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
}
