// The reason for creating the router in App.js is that there might be a need for a process to be executed before App.js in the project's later stages. For example, when a page is refreshed, if the user has a valid token, there is no need for them to log in again.
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './store';
// Import scss
import './styles/global.scss';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
