// src/components/common/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <div>
    <header>ShhApp</header>
    <main>
      <Outlet /> {/* Qui il contenuto delle route figlie sarà renderizzato */}
    </main>
    <footer>&copy; ShhApp 2024</footer>
  </div>
);

export default Layout;
