import './App.css';
// import CrudApp from './CurdApp';
// import ApiDataTable from './ApiDataTable';
// import ExMemo from './ExMemo';
// import ExCallback from './ExCallback';

import Welcome from './reduxLoginDetails/components/Welcome';

// import { Provider } from 'react-redux';
// import TodoList from './TodoList_redux/TodoList';
// import store from './TodoList_redux/store';


function App() {
  return (
    <div className="App">
      {/* <CrudApp></CrudApp> */}
      {/* <ApiDataTable></ApiDataTable> */}
      {/* <ExMemo /> */}
      {/* <ExCallback /> */}

      <Welcome></Welcome>

      {/* <Provider store={store}>
        <div>
          <h1>Redux Todo App</h1>
          <TodoList />
        </div>
      </Provider> */}



    </div >
  );
}

export default App;
