export const fetchHygraphQuery = async (
  query: string,
  revalidate = 60 * 60 * 24
) => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKNE}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate,
    },
  });

  const { data } = await response.json();

  return data;
};
