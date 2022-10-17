import { Routes, Route } from "react-router-dom";

import { Bookmark } from "./pages/bookmarks";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Bookmark />} />
        </Routes>
    );
};

export default Router;