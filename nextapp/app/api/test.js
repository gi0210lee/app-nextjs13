// import { NextApiRequest, NextApiResponse } from "next";
// import withHandler from withHandler

export function handler(req, res) {
    res.status(200).json({text:'Hello'})    
}

// export default withHandler("GET", handler)