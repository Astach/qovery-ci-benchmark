import { format } from "date-fns";
export default function Page() {
  return <p>bench ssr ok — {format(new Date(), "yyyy-MM-dd")}</p>;
}

// oct rerun frontend-ssr warm 1

// oct rerun frontend-ssr warm 2
