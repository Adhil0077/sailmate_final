import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./routes/UserRouter";
import AdminRouter from "./routes/AdminRouter";
import PartnerRouter from "./routes/PartnerRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<UserRouter />} />
        <Route exact path="/partner/*" element={<PartnerRouter />} />
        <Route exact path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
