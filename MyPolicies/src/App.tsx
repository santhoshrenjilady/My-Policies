import PolicyList from "./components/PolicyList";
import Pagination from "./components/Pagination";
import { PolicyProvider } from "./Context/PoliciesContext";

export default function App() {
  return (
    <PolicyProvider>
      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto max-w-5xl space-y-8">
          <PolicyList />
          <Pagination />
        </div>
      </main>
    </PolicyProvider>
  );
}