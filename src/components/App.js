import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import { AppRoutes } from './AppRoutes';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="noname-digital-test">
          <AppRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
