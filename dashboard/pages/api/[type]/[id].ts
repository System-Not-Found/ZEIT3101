import type { NextApiRequest, NextApiResponse } from "next";
import getClient from "../../../lib/database";

export const getNetworkObservables = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { type, id } = req.query;
  if (req.method === "GET") {
    try {
      const db = await getClient();

      const observable = await db.collection(type as string).findOne({ id });

      return res.status(200).send(observable);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
};

export default getNetworkObservables;
