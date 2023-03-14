import {Fragment} from "react";

import Header from "@/components/Header";
import Form from "@/components/Form";
import PostsFeed from "@/components/posts/PostsFeed";

export default function Home() {
    return (
        <Fragment>
            <Header label="Home"/>
            <Form placeholder="What's happening?"/>
            <PostsFeed />
        </Fragment>
    )
}
