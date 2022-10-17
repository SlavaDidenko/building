import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import './18n';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={<div>Loading...</div>} >
      <App />
    </Suspense>
  </>
);
