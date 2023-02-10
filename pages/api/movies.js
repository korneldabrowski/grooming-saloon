import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const movies = await collection
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  response.status(200).json(movies);
}
