//  ****************************************************
//  **********  /gif-expert-app/src/main.jsx  **********
//  ****************************************************


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { GifExpertApp } from './GifExpertApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
   </StrictMode>,
)
