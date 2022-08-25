import type { NextApiRequest, NextApiResponse } from "next";
import getClient from "../../../lib/database";

export const getNetworkObservables = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { type } = req.query;
  if (req.method === "GET") {
    try {
      const db = await getClient();

      const observables = await db
        .collection(type as string)
        .find()
        .toArray();

      return res.status(200).send(observables);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
};

export default getNetworkObservables;
