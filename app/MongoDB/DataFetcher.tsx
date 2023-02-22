import "server-only";

import { connectToDatabase } from "./mongodb";
import { ObjectId } from "mongodb";

export async function getRecommended() {
  //@ts-ignore
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const discountedProductList = await collection
    .aggregate([
      {
        $match: {
          rating: { $gt: 4.5 },
          discounted: true,
        },
      },
      {
        $addFields: {
          discount: {
            $multiply: [
              { $subtract: ["$old_price", "$price"] },
              100,
              { $divide: [1, "$old_price"] },
            ],
          },
        },
      },
      {
        $match: {
          discount: { $gte: 20 },
        },
      },
      {
        $sort: {
          discount: -1,
        },
      },
    ])
    .limit(10)
    .toArray()
    .catch((err: Error) => {
      console.log("Error while retrieving recommended products:", err);
    });

  return discountedProductList;
}

export async function getRecommendedByQuery({
  categories,
  size,
  country,
  pet,
  searchString,
  rating = 0,
  discount,
}: {
  categories?: string;
  size?: string;
  country?: string;
  pet?: string;
  searchString?: string;
  rating?: number;
  discount?: number;
}) {
  //@ts-ignore
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const query: Record<string, string> = {};
  if (pet) {
    query["pet_types"] = pet;
  }
  if (categories) {
    query["categories"] = categories;
  }
  if (size) {
    query["sizes"] = size;
  }
  if (country) {
    query["countries"] = country;
  }
  if (searchString) {
    // @ts-ignore
    query["product_name"] = { $regex: new RegExp(searchString, "i") };
  }

  const discountedProductList = await collection
    .aggregate([
      {
        $match: {
          rating: { $gt: rating },
          // discounted: true,
        },
      },
      {
        $addFields: {
          discount: {
            $multiply: [
              { $subtract: ["$old_price", "$price"] },
              100,
              { $divide: [1, "$old_price"] },
            ],
          },
        },
      },
      {
        $match: {
          discount: { $gte: discount },
        },
      },
    ])
    .limit(10)
    .toArray()
    .catch((err: Error) => {
      console.log("Error while retrieving recommended products:", err);
    });

  console.log(discountedProductList);
  return discountedProductList;
}

export async function getSizeOfCollectionByTypes({
  categories,
  size,
  country,
  pet,
  searchString,
}: {
  categories: string;
  size: string;
  country: string;
  pet: string;
  searchString: string;
}) {
  // @ts-ignore
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const query: Record<string, string> = {};
  if (pet) {
    query["pet_types"] = pet;
  }
  if (categories) {
    query["categories"] = categories;
  }
  if (size) {
    query["sizes"] = size;
  }
  if (country) {
    query["countries"] = country;
  }
  if (searchString) {
    // @ts-ignore
    query["product_name"] = { $regex: new RegExp(searchString, "i") };
  }

  const sizeOfCollection = await collection

    .find(query)
    .count()
    .catch((err: Error) => {
      console.log("Error while retrieving size of collection:", err);
    });

  return sizeOfCollection;
}

export async function getProductByTypes({
  categories,
  size,
  country,
  pet,
  searchString,
  page = 1,
}: {
  categories?: string;
  size?: string;
  country?: string;
  pet?: string;
  searchString?: string;
  page?: number;
}) {
  // @ts-ignore
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const query: Record<string, string> = {};
  if (pet) {
    query["pet_types"] = pet;
  }
  if (categories) {
    query["categories"] = categories;
  }
  if (size) {
    query["sizes"] = size;
  }
  if (country) {
    query["countries"] = country;
  }
  if (searchString) {
    // @ts-ignore
    query["product_name"] = { $regex: new RegExp(searchString, "i") };
  }

  const pageSize = 10;
  const skipCount = (page - 1) * pageSize;

  const productByTypes = await collection
    .find(query)
    .sort({ rating: -1 }) // Sort by rating
    .skip(skipCount)
    .limit(pageSize)
    .toArray()
    .catch((err: Error) => {
      console.log("Error while retrieving products:", err);
    });
  return productByTypes;
}

export async function getProductByID({ id }: { id: string }) {
  const objectId = new ObjectId(id);

  // @ts-ignore
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  try {
    const results = await collection
      .find({
        _id: objectId,
      })
      .toArray();
    if (results.length === 0) {
      return null;
    }
    return results[0];
  } catch (error) {
    return null;
  }
}
