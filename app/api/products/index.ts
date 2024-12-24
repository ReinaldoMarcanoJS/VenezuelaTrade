import { Product } from "@/types";

export default async function getProducts() {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?limit=15"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Product[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
