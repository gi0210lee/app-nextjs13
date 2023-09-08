import { NextResponse } from "next/server";

export default (req, res) => {
    res.status(200).json({text: 'hello'})
}