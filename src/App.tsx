import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "@mui/material";
import { FONT } from "./font";

function App() {
  return (
    <ThemeProvider theme={FONT}>
      <AppRouter />;
    </ThemeProvider>
  );
}

export default App;
