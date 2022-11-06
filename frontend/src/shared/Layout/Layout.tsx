import * as React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
    return <>{props.children}</>;
};
