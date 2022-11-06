import * as React from "react";
import "./ContentLayout.scss";

type ContentLayoutProps = {
    children: React.ReactNode;
};

export const ContentLayout = (props: ContentLayoutProps) => {
    return <div className="ContentLayout">{props.children}</div>;
};
