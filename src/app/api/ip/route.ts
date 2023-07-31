import type { NextApiRequest, NextApiResponse } from 'next';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//     const useragent = req.headers['user-agent'];

//     res.status(200).json({ ip, useragent });
// };


import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const ip = request.headers.get('x-forwarded-for');
    const useragent = request.headers.get('user-agent');
    return NextResponse.json({ ip,useragent });
}