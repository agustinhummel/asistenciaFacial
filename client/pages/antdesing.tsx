'use client'

import React from "react";
import { Button } from 'antd';

const Antdesing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-4">Test page for antdesign</h1>
    <p className="mb-8">ssssss.</p>
    <Button type="primary" className="mt-4">este boton deberia mostrarse pero esta en conflicto con tailwind y antd</Button>
  </div>
  );
};

export default Antdesing;
