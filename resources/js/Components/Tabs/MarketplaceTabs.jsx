import { Tab } from "@headlessui/react";
import NavLink from "@/Components/NavLink";

export default function MarketplaceTabs() {
    return (
        <Tab.Group defaultIndex={1}>
            <Tab.List className="flex space-x-8 bg-blue-300/20 p-2">
                <Tab className="ml-2">
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        <span className=" dark:text-white dark:hover:bg-gray-700">
                            Marketplace
                        </span>
                    </NavLink>
                </Tab>

                <Tab className="ml-4">
                    <NavLink
                        href={route("collections.index")}
                        active={route().current("collections.index")}
                    >
                        <span className=" dark:text-white dark:hover:bg-gray-700">
                            All Items
                        </span>
                    </NavLink>
                </Tab>
                <Tab>
                    <NavLink
                    // href={route("wishlists.index")}
                    // active={route().current("wishlists.index")}
                    >
                        <span className=" dark:text-white dark:hover:bg-gray-700">
                            Wishlists
                        </span>
                    </NavLink>
                </Tab>
                <Tab>
                    <NavLink
                    // href={route("submissions.index")}
                    // active={route().current("submissions.index")}
                    >
                        <span className=" dark:text-white dark:hover:bg-gray-700">
                            Purchases
                        </span>
                    </NavLink>
                </Tab>
                <Tab>
                    {" "}
                    <NavLink
                    // href={route("export.index")}
                    // active={route().current("export.index")}
                    >
                        <span className=" dark:text-white dark:hover:bg-gray-700">
                            Cart
                        </span>
                    </NavLink>
                </Tab>
            </Tab.List>
            {/* <Tab.Panels> */}
            {/* tab panels may or may not be helpful, maybe only on dash */}
            {/* <Tab.Panel>Home/Dash content</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel> */}
            {/* </Tab.Panels> */}
        </Tab.Group>
    );
}