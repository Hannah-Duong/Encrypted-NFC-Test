import { useEffect, useState } from "react";
import api from "../api/axios.tx";

export default function ActivityCard() {
  const [status, setStatus] = useState("Waiting...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const e = params.get("e");
    const c = params.get("c");

    if (e && c) {
      api.post("/scan-secure", { e, c })
        .then((res) => setStatus(res.data.message))
        .catch(() => setStatus("Scan failed"));
    } else {
      setStatus("No scan detected");
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Activity Card</h1>
      <p>{status}</p>
    </div>
  );
}