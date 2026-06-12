import type { Policy } from "../types/Policy";

type Props = {
  policy: Policy;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

export default function PolicyCard({ policy }: Props) {
  const isAnnual = policy.type === "Annual";
  const destination = policy.destinations.map((d) => d.name).join(", ");

  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">
            <span className="text-blue-700">Policy number:</span>{" "}
            {policy.policyNumber}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p>
                <strong>Destination:</strong> {destination}
              </p>

              {isAnnual ? (
                <>
                  <p>
                    <strong>Policy start date:</strong>{" "}
                    {formatDate(policy.policyStart)}
                  </p>
                  <p>
                    <strong>Maximum trip duration:</strong> Up to{" "}
                    {policy.maxTripDuration} days
                  </p>
                </>
              ) : (
                <p>
                  <strong>Travel date:</strong>{" "}
                  {formatDate(policy.policyStart)} -{" "}
                  {formatDate(policy.policyEnd)}
                </p>
              )}
            </div>

            <div className="md:border-l md:pl-8">
              <p>
                <strong>Plan:</strong>{" "}
                {isAnnual
                  ? "Annual Multi-trip"
                  : `International ${policy.planName}`}
              </p>
              <p className="mt-3">
                <strong>Excess:</strong> ${policy.excess}
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-6 text-sm">
            <a href="#" className="underline underline-offset-2 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-blue-700">
              ↗ View PDS
            </a>
            <a href="#" className="underline underline-offset-2 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-blue-700">
              ↗ Certificate of Insurance
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button className="rounded-full border-2 border-blue-700 bg-yellow-200 px-6 py-3 font-semibold text-blue-700 focus:outline focus:outline-2">
            Make a claim
          </button>
          <button className="rounded-full border-2 border-blue-700 px-6 py-3 font-semibold text-blue-700 focus:outline focus:outline-2">
            Manage my policy
          </button>
        </div>
      </div>
    </article>
  );
}