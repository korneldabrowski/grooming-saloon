import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const results = await collection
    .find({
      rating: { $gt: 4.8 },
      discounted: true,
    })
    .toArray();

  return response.status(200).json(results);
}
