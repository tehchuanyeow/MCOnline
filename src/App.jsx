import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { ConfigProvider } from "antd";

function App() {
  return (
    <AuthProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FF0000",
            borderRadius: 5,
            colorBgContainer: "#FF0000",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
