import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const products = await collection.find({}).limit(5).toArray();

  if (products.length === 0)
    // (if no products found)
    return response.status(404).json({ message: "No products found" });

  return response.status(200).json(products);
}
