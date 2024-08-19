export const getFakeData = async (query: string) => {
  const fakeResponse = await fetch("http://localhost:3333/" + query, {
    next: { revalidate: 0 },
  });
  const { data } = await fakeResponse.json();
  console.log(data);
  return data;
};
