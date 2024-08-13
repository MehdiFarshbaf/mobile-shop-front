import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from "@mantine/core";
import App from './App';
import {BrowserRouter} from "react-router-dom";


// styles
import '@mantine/core/styles.css';
import './assets/styles/colors.scss'
// import './assets/styles/mantine.scss'
import './assets/styles/fontIranYekan.scss'
import './assets/styles/styles.scss'

// Swiper Styles
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import "swiper/css/effect-fade";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MantineProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);

