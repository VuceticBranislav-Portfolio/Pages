import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { HashRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import DummyPage from "./pages/DummyPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import Article from "./components/pageElements/Article/Article";
import Footer from "./components/pageElements/Footer/Footer";
import Header from "./components/pageElements/Header/Header";
import ThemeProviderContainer from "./containers/ThemeProviderContainer";
import rutes from "./settings/rutes";

function App() {
  return (
    <ThemeProviderContainer>
      <HashRouter>
        <CssBaseline />
        <GlobalStyles />
        <Header />
        <Article>
          <Routes>
            <Route exact path={rutes.welcome} element={<FrontPage />} />
            <Route
              exact
              path={rutes.workInProgress}
              element={<UnderConstructionPage />}
            />
            <Route exact path={rutes.dummy} element={<DummyPage />} />
          </Routes>
        </Article>
        <Footer />
      </HashRouter>
    </ThemeProviderContainer>
  );
}

export default App;
