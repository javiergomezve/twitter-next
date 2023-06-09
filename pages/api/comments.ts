import {NextApiRequest, NextApiResponse} from "next";

import prisma from '@/libs/prismadb'
import serverAuth from "@/libs/serverAuth";
import postId from "@/pages/posts/[postId]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end()

    try {
        const {currentUser} = await serverAuth(req)
        const {body} = req.body
        const {postId} = req.query

        if (!postId || typeof postId !== 'string') {
            throw new Error('Invalid ID')
        }

        const comment = await prisma.comment.create({
            data: {
                body, postId, userId: currentUser.id, updatedAt: new Date(),
            },
        })

        try {
            const post = await prisma.post.findUnique({
                where: {id: postId},
            })

            if (post?.userId) {
                await prisma.notification.create({
                    data: {
                        body: 'Someone comment your tweet',
                        userId: post.userId,
                    },
                })

                await prisma.user.update({
                    where: {id: post.userId},
                    data: {hasNotification: true},
                })
            }
        } catch (e) {
            console.log(e)
        }

        return res.status(200).json(comment)
    } catch (e) {
        console.log(e)
        return res.status(400).end()
    }
}