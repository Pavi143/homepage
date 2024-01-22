import { NextResponse } from "next/server";

export async function GET() {
    console.log("discord token:" , process.env.DISCORD_TOKEN)
    const data = await fetch(`https://discord.com/api/guilds/1008950812778704897?with_counts=true`, {
        method : 'GET',
        headers: {
            "Authorization" : `Bot ${process.env.DISCORD_TOKEN}`
        }
    }).then(res => res.json());
    return NextResponse.json(data)
    
}