import type { NextApiRequest, NextApiResponse } from "next";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const url: string = `${process.env.TMDB_API_BASE}/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=1`;
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return res.status(200).json(responseJson);
  } catch (e) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
