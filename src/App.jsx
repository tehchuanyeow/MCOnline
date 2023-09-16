import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { ConfigProvider } from "antd";

function App() {
  return (
    <AuthProvider>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              colorBgContainer: "#ffffff",
            },
          },
          token: {
            colorPrimary: "#FF0000",
            borderRadius: 5,
            colorBgContainer: "#FF0000",
            controlOutline: "none",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
