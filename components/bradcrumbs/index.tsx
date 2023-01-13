import Link from "next/link";
import React from "react";

type BradcrumbsTypes = {
    page_title: string;
    another_page_title: string;
    another_page_link : string;
}

export const Bradcrumbs :React.FC <BradcrumbsTypes> = (props:BradcrumbsTypes):JSX.Element => {
    return(
        <div className="py-5">
            <div className="flex justify-between items-center shadow-lg py-6 px-4">
                <span className="text-2xl text-gray-500">{props.page_title}</span>
                <Link className="text-lg text-gray-500" href={props.another_page_link}>{props.another_page_title}</Link>
            </div>
        </div>
    )
}