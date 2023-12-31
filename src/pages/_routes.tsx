import React, { FC } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { NotesPage } from "./notes";
import { FragmentsPage } from "./fragments";
import { PortraitsPage } from "./portraits";
import { StoragePage } from "./storage";
import { PodsPage } from "./pods";
import { WelcomePage } from "./welcome";
import { ImagePage } from "./image";

export const AppRoutes: FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="notes" element={<NotesPage />} />
                <Route path="fragments" element={<FragmentsPage />} />
                <Route path="portraits" element={<PortraitsPage />} />
                <Route path="pods" element={<PodsPage />} />
                <Route path="storage" element={<StoragePage />} />
                <Route path="new-image" element={<ImagePage />} />
            </Routes>
        </HashRouter>
    );
};

