import { usePolicies } from "../Context/PoliciesContext.tsx";

export default function Pagination() {
  const { currentPage, totalPages, setCurrentPage } = usePolicies();

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center gap-4" aria-label="Pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="text-3xl disabled:opacity-40 focus:outline focus:outline-2"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`h-9 w-9 rounded-full border focus:outline focus:outline-2 ${
              currentPage === page ? "bg-blue-700 text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="text-3xl disabled:opacity-40 focus:outline focus:outline-2"
      >
        ›
      </button>
    </nav>
  );
}