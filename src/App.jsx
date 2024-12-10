import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Archive from "./pages/Archive";
import AddCard from "./pages/AddCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminPage } from "./pages/AdminPage";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, staleTime: 1000 * 6 * 5 },
      mutations: {},
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/Archive",
      element: <Archive />,
    },
    {
      path: "/AddCard",
      element: <AddCard />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
  ]);

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
