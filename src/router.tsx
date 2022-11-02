import { Routes, Route } from "react-router-dom";

import { Bookmarks } from "./pages/Bookmarks";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Bookmarks />} />
        </Routes>
    );
};

export default Router;