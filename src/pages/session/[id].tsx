import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Session() {
  const router = useRouter();
  const { id } = router.query;

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/showtimes/${id}/seats`);

      setSeats(data);
    }

    fetchData();
  }, [id]);
}
