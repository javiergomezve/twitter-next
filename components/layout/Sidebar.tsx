import {BsBellFill, BsHouseFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";

import SidebarLogo from "@/components/layout/SidebarLogo";
import SidebarItem from "@/components/layout/SidebarItem";
import SidebarTweetButton from "@/components/layout/SidebarTweetButton";

const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill,
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill,
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser,
        },
    ];

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo/>

                    {items.map(item => (
                        <SidebarItem key={item.href} {...item} />
                    ))}

                    <SidebarItem label="Logout" icon={BiLogOut} onClick={() => {}}/>

                    <SidebarTweetButton/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;