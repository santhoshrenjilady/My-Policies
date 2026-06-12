export type PolicyType = "Single Trip" | "Annual";

export type Destination = {
  code: string;
  name: string;
};

export type Policy = {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  status: "Active" | "Expired";
  destinations: Destination[];
  type: PolicyType;
  excess: number;
  maxTripDuration: number;
  planName: string;
};