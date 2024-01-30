import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App';
import { Provider } from 'react-redux';
import { storeQuery } from './store-query/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
    );

root.render(
    <React.StrictMode>
        <Provider store={storeQuery}>
            <App />
        </Provider>
    </React.StrictMode>
)