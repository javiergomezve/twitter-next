import {Fragment} from "react";
import Header from "@/components/Header";
import {NextPageContext} from "next";
import {getSession} from "next-auth/react";

import NotificationsFeed from "@/components/NotificationsFeed";

const Notifications = () => {
    return (
        <Fragment>
            <Header label="Notifications" showBackArrow/>

            <NotificationsFeed/>
        </Fragment>
    )
}

export default Notifications

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {destination: '/', permanent: false},
        }
    }

    return {
        props: {session},
    }
}