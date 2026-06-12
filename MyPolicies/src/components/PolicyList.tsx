import { usePolicies } from "../Context/PoliciesContext.tsx";
import PolicyCard from "./PolicyCard";

export default function PolicyList() {
  const { currentPolicies } = usePolicies();

  return (
    <div className="space-y-8">
      {currentPolicies.map((policy) => (
        <PolicyCard key={policy.policyNumber} policy={policy} />
      ))}
    </div>
  );
}