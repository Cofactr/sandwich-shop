import React from 'react';
import { MainLayout, SandwichLayout, ErrorLayout } from "components";

import { Routes, Route } from 'react-router-dom';

export default function Router() {
    return <Routes>
        <Route path='/' element={<MainLayout/>} />
        <Route path='/:sandwichId' element={<SandwichLayout/>} />
        <Route path='*' element={<ErrorLayout/>} />
    </Routes>;
}
