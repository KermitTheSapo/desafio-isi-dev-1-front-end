import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
import SideBarHeader from "./components/sidebar-header/index.component";
import { useAppRoutes } from "./hooks/use-app-routes";

export default function App() {
  const routes = useAppRoutes();

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
