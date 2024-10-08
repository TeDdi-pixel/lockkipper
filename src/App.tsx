import AppRouter from "./router/AppRouter";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "@mui/material";
import { FONT } from "./font";

function App() {
  
  return (
    <ThemeProvider theme={FONT}>
      <SpeedInsights />
      <AppRouter />;
    </ThemeProvider>
  );
}

export default App;
