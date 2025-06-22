import { GlobalStyles } from "./styles/global-styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesUrls } from "./utils/enums/routes-url";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import SideBarHeader from "./components/sidebar-header/index.component";
import { ProductListController } from "./pages/product-list/controller/product-list.controller";
import { ProductFormController } from "./pages/product-form/controller/product-form.controller";

export default function App() {
  const routes = [
    {
      path: RoutesUrls.BASE_URL,
      element: <ProductListController />,
    },
    {
      path: RoutesUrls.CONFIG,
      element: <ProductListController />,
    },
    {
      path: RoutesUrls.PRODUCT_LIST,
      element: <ProductListController />,
    },
    {
      path: RoutesUrls.PRODUCT_ADD,
      element: <ProductFormController />,
    },
    {
      path: RoutesUrls.PRODUCT_EDIT,
      element: <ProductFormController />,
    },
    {
      path: RoutesUrls.REPORTS,
      element: <ProductListController />,
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
