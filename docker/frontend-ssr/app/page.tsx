import { format } from "date-fns";
export default function Page() {
  return <p>bench ssr ok — {format(new Date(), "yyyy-MM-dd")}</p>;
}
