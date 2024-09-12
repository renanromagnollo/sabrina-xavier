import { getFakeData } from "@/utils/fakeServer";
import { useQuery } from "@tanstack/react-query";

function fetchInstagram() {
  const data = getFakeData("instagramPosts");
  return data;
}

export function useInstagramQuery() {
  const query = useQuery({
    queryKey: ["instagramPosts"],
    queryFn: fetchInstagram,
    refetchOnWindowFocus: false,
  });
  return query;
}
