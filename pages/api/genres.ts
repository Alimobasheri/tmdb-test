import type {NextApiRequest, NextApiResponse} from "next"
export default async function(req: NextApiRequest, res: NextApiResponse) {
  const url: string = `${process.env.TMDB_API_BASE}/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return res.status(200).json(responseJson);
  } catch (error) {
    return res.status(500).json({message: "Error in fetching genres"})
  }
}