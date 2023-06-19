import { NextApiRequest, NextApiResponse } from "next";
import pool from '@/lib/dbConfig';


// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM tablafechaciclos LIMIT 5";
        const response = await pool.query(query);
        return res.json(response.rows);
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}