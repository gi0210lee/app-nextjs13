import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res:NextApiResponse) {
    
    let json_response = {
        status: 200,
        results: 'hello'
    }
    return res.status(200).json(json_response)
}