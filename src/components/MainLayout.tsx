import { FC } from 'react';
import React from 'react';
import { SandwichList, SandwichForm } from "components";

const MainLayout: FC = () => (
    <>
        <SandwichList />
        <SandwichForm />
    </>
);

export default MainLayout;
