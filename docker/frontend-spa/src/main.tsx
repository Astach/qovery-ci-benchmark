import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { format } from "date-fns";
import clsx from "clsx";

const queryClient = new QueryClient();

function Home() {
  return <p className={clsx("p-4")}>bench spa ok — {format(new Date(), "yyyy-MM-dd")}</p>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter><Routes><Route path="/" element={<Home />} /></Routes></BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
