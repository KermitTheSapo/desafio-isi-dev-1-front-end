import { RouterProvider } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global-styles";
import Sidebar from "./components/sidebar/index.component";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Sidebar />
        <RouterProvider />
        <p>sidebar</p>
      </>
    </ThemeProvider>
  );
}
