import {Fragment} from "react";

import Header from "@/components/Header";
import Form from "@/components/Form";

export default function Home() {
    return (
        <Fragment>
            <Header label="Home"/>
            <Form placeholder="What's happening?"/>
        </Fragment>
    )
}
