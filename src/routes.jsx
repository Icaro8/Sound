import React from "react";
import { Routes, Route } from "react-router-dom";

import { MusicPlayer } from "./pages/Player";

export function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<MusicPlayer />} />
    </Routes>
  );
}
