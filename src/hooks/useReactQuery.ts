import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface reqParamsProps {
  key: string;
  url: string;
  path: string;
}
async function fetchData(url: string, path: string) {
  const response = await axios.get(url + path);

  return response?.data;
}

export function useReactQuery() {
  const [reqParams, setReqParams] = useState<reqParamsProps | undefined>();

  const query = useQuery({
    queryKey: [reqParams?.key],
    queryFn: () => {
      if (reqParams) {
        return fetchData(reqParams?.url, reqParams?.path);
      }
      return Promise.reject("Parameters not defined");
    },
    enabled: !!reqParams,
  });
  return { query, setReqParams };
}
