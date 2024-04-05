import { NextResponse } from "next/server"

export async function POST (req: any) {
    console.log(typeof req)
    const body = await req.json()
    console.log(body)
    return NextResponse.json(body)
}