'use client'
import { ConfigProvider } from "antd";

function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#EAAD61",
                        borderRadius: 2,
                    },
                    components: {
                        Button: {
                            controlHeight: 40,
                            boxShadow: "none",
                            colorPrimaryActive: "#EAAD61",
                            controlOutline: "none",
                            colorBorder: "#efc186",
                        },
                        Input: {
                            controlHeight: 42,
                            boxShadow: "none",
                            activeShadow: "none",
                        },
                        Select: {
                            controlHeight: 42,
                            boxShadow: "none",
                            controlOutline: "none",
                        },
                        InputNumber: {
                            controlHeight: 42,
                            boxShadow: "none",
                            activeShadow: "none",
                        },
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </div>
    )
}

export default ThemeProvider