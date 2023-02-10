import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(request, response) {
  const {
    query: { query },
  } = request;
  console.log(query);
  const objectId = new ObjectId(query);

  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  try {
    const results = await collection
      .find({
        _id: objectId,
      })
      .toArray();
    if (results.length === 0) {
      return response.status(404).json({ error: "Product not found" });
    }
    return response.status(200).json(results);
  } catch (error) {
    return response.status(500).json({ error: "Error searching for product" });
  }
}
