import { RouterProvider } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global-styles";
import SideBarHeader from "./components/sidebar-header/index.component";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <SideBarHeader>
          <RouterProvider />
        </SideBarHeader>
      </>
    </ThemeProvider>
  );
}
