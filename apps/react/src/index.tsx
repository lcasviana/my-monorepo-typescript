import React from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <h1> Hello World! </h1>
  </React.StrictMode>,
);
