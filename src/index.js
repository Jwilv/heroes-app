import React from 'react';
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <HeroesApp />
    </HashRouter>

);
