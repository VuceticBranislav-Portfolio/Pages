import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import DummyPage from "./pages/DummyPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";

import Article from "./components/pageElements/Article/Article";
import Footer from "./components/pageElements/Footer/Footer";
import Header from "./components/pageElements/Header/Header";
import ThemeProviderContainer from "./containers/ThemeProviderContainer";
import rutes from "./settings/rutes";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: rutes.welcomeRoute,
    element: <FrontPage />,
    children: [
      {
        path: rutes.workInProgressRoute,
        element: <UnderConstructionPage />,
      },
      {
        path: rutes.dummyRoute,
        element: <DummyPage />,
      },
    ],
  },
]);
//<RouterProvider router={router} />
function App() {
  return (
    <ThemeProviderContainer>
      <CssBaseline />
      <GlobalStyles />
      <Header />
      <Article>
        <HashRouter>
          <Routes>
            <Route path={rutes.welcome} element={<FrontPage />} />
            <Route
              path={rutes.workInProgress}
              element={<UnderConstructionPage />}
            />
            <Route path={rutes.dummy} element={<DummyPage />} />
          </Routes>
        </HashRouter>
      </Article>
      <Footer />
    </ThemeProviderContainer>
  );
}

export default App;
