import * as React from "react";
import { ContentLayout } from "./components/ContentLayout/ContentLayout";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
    return (
        <div className="Layout">
            <ContentLayout>{props.children}</ContentLayout>
        </div>
    );
};
