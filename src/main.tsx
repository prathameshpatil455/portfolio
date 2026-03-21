import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ResumePreviewProvider } from "./contexts/ResumePreviewContext";
import { store } from "./store";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <ResumePreviewProvider>
            <App />
          </ResumePreviewProvider>
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);