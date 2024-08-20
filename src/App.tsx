import AppRouter from "./router/AppRouter";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <SpeedInsights />
      <AppRouter />;
    </>
  );
}

export default App;
