import "./ContentLayout.scss";
import * as React from "react";

interface ContentLayoutProps {
    children: React.ReactNode;
}

export const ContentLayout = (props: ContentLayoutProps) => {
    return <div className="ContentLayout">{props.children}</div>;
};
