import * as React from "react";

import { ContentLayout } from "@src/shared/Layout/components/ContentLayout/ContentLayout";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className="Layout">
            <ContentLayout>{props.children}</ContentLayout>
        </div>
    );
};
