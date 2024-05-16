export async function getData(api) {
  const res = await fetch(`https://dummyjson.com/products${api}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
