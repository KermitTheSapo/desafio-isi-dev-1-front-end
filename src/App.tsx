import { GlobalStyles } from "./styles/global-styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesUrls } from "./utils/enums/routes-url";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import SideBarHeader from "./components/sidebar-header/index.component";

export default function App() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <h1>Base URL</h1>,
    },
    {
      path: RoutesUrls.CONFIG,
      element: <h1>Config</h1>,
    },
    {
      path: RoutesUrls.PRODUCT_ADD, 
      element: <h1>Product Add</h1>,
    },
    {
      path: RoutesUrls.PRODUCT_EDIT,
      element: <h1>Product Edit</h1>,
    },
    {
      path: RoutesUrls.REPORTS,
      element: <h1>Reports</h1>,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <SideBarHeader>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </SideBarHeader>
      </BrowserRouter>
    </ThemeProvider>
  );
}
