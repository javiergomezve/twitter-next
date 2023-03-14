import {Fragment} from "react";

import usePosts from "@/hooks/usePosts";
import PostItem from "@/components/posts/PostItem";

interface PostsFeedProps {
    userId?: string
}

const PostsFeed: React.FC<PostsFeedProps> = ({userId}) => {
    const {data: posts = []} = usePosts(userId)

    return (
        <Fragment>
            {posts.map((post: Record<string, any>) => (
                <PostItem
                    key={post.id}
                    userId={userId}
                    data={post}
                />
            ))}
        </Fragment>
    )
}

export default PostsFeed