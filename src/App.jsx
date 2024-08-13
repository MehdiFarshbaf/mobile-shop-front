import MainLayouts from "./layouts/MainLayouts";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {Route, Routes} from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    return (
        <MainLayouts>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </ScrollToTop>
        </MainLayouts>
    )
}
export default App