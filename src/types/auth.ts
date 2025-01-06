export type IJwt = {
  id: number;
  email?: {
    address: string;
    isConfirmed: boolean;
  };
  role?: string;
  otp: {
    isConfirmed: boolean;
  };
  iat: number;
  exp: number;
};
