import { Categories } from "@/types";

export default async function getCategories() {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/categories"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Categories[] | undefined = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
