import React, { useEffect } from "react";
import SwaggerUI from "swagger-ui";
import { Box } from "@mui/material";
import { useColorMode } from "@docusaurus/theme-common";
import { Helmet } from "react-helmet";

export default function Swagger(props: { url: string }) {
    const { url } = props;
    const { colorMode } = useColorMode();

    useEffect(() => {
        const ui = SwaggerUI({
            url,
            dom_id: "#swagger",
        });

        ui.initOAuth({
            appName: "Metahkg Api",
            clientId: "implicit",
        });
    }, [url]);

    return (
        <React.Fragment>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/npm/swagger-ui@latest/dist/swagger-ui.css"
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
                    "& *": {
                        backgroundColor: "unset",
                    },
                }}
                id="swagger"
            />
        </React.Fragment>
    );
}
