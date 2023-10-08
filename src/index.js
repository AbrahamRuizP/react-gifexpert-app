import React from "react";
import './index.css';
import { GifExpertApp } from './GifExpertApp';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<GifExpertApp />);