import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { fetchPolicies } from "../services/PolicyService";
import type { Policy } from "../types/Policy";

const ITEMS_PER_PAGE = 3;

type PolicyContextType = {
  currentPolicies: Policy[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

const PolicyContext = createContext<PolicyContextType | undefined>(undefined);

export function PolicyProvider({ children }: { children: ReactNode }) {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPolicies().then((data) => {
      const activeSortedPolicies = data
        .filter((policy) => policy.status === "Active")
        .sort(
          (a, b) =>
            new Date(a.policyStart).getTime() -
            new Date(b.policyStart).getTime()
        );

      setPolicies(activeSortedPolicies);
    });
  }, []);

  const totalPages = Math.ceil(policies.length / ITEMS_PER_PAGE);

  const currentPolicies = useMemo(() => {
    return policies.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [policies, currentPage]);

  return (
    <PolicyContext.Provider
      value={{
        currentPolicies,
        currentPage,
        totalPages,
        setCurrentPage,
      }}
    >
      {children}
    </PolicyContext.Provider>
  );
}

export function usePolicies() {
  const context = useContext(PolicyContext);

  if (!context) {
    throw new Error("usePolicies must be used inside PolicyProvider");
  }

  return context;
}