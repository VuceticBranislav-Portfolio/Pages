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

function App() {
  return (
    <ThemeProviderContainer>
      <CssBaseline />
      <GlobalStyles />
      <Header />
      <Article>
       
          <Routes>
            <Route exact path={rutes.welcomeRoute} element={<FrontPage />} />
            <Route
              exact path={rutes.workInProgressRoute}
              element={<UnderConstructionPage />}
            />
            <Route exact path={rutes.dummyRoute} element={<DummyPage />} />
          </Routes>
       
      </Article>
      <Footer />
    </ThemeProviderContainer>
  );
}

export default App;
