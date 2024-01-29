import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App';
import { store } from './store';
import { fetchPostsAction } from './store/api-actions';
import { Provider } from 'react-redux';
import { storeQuery } from './store-query/store';

store.dispatch(fetchPostsAction())

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