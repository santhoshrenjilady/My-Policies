import { mockPolicies } from "../data/Policies";
import type { Policy } from "../types/Policy";


export const fetchPolicies = async (): Promise<Policy[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPolicies), 300);
  });
};