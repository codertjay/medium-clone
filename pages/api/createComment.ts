// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from '@sanity/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}
const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config)


export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { _id, name, email, comment } = JSON.parse(req.body);
    try {
        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id,
            },
            name,
            email,
            comment
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ name: `couldnt submit comment ` });
    }
    console.log('comment submitted');

    res.status(200).json({ name: 'John Doe' })
}
