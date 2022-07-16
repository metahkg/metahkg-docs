import React, { useEffect } from "react";
import SwaggerUI from "swagger-ui-react";
import { Box } from "@mui/material";
import { useColorMode } from "@docusaurus/theme-common";
import { Helmet } from "react-helmet";

export default function Swagger(props: { url: string }) {
    const { url } = props;
    const { colorMode } = useColorMode();

    return (
        <React.Fragment>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/npm/swagger-ui-react@latest/swagger-ui.css"
                />
                {colorMode === "dark" && (
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/css/SwaggerDark/SwaggerDark.css"
                    />
                )}
            </Helmet>
            <Box
                sx={{
                    "& svg": {
                        ...(colorMode === "dark" && { fill: "white" }),
                    },
                    "& .version": {
                        backgroundColor: "unset"
                    }
                }}
            >
                <SwaggerUI url={url} />
            </Box>
        </React.Fragment>
    );
}
