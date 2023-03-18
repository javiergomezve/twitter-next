import {Fragment} from "react";
import CommentItem from "@/components/posts/CommentItem";

interface CommentsFeedProps {
    comments?: Record<string, any>
}

const CommentsFeed: React.FC<CommentsFeedProps> = (props) => {
    const {comments = []} = props

    return (
        <Fragment>
            {comments.map((comment: Record<string, any>) => (
                <CommentItem key={comment.id} data={comment}/>
            ))}
        </Fragment>
    )
}

export default CommentsFeed