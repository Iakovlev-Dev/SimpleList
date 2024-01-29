import { HelmetProvider } from "react-helmet-async";
import HistoryRouter from "../History-route/History-route";
import { browserHistory } from "../../browser-history";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import PageMain from "../../pages/page-main/page-main";
import PagePost from "../../pages/page-post/page-post";

export default function App () {
    return (
        <HelmetProvider>
            <HistoryRouter history={browserHistory}>
                <Routes>
                    <Route path={AppRoute.Main} element={<PageMain />}/>
                    <Route path={AppRoute.Post} element={<PagePost />}/>
                </Routes>
            </HistoryRouter>
        </HelmetProvider>
    )
}