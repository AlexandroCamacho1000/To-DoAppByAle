import './App.css';
import AlesofLogo from './assets/alesoft.png';

import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-app">
      <div className='logo-container'>
        <img 
          src={AlesofLogo}
          className='logo'/>
      </div>
      <div className='main-task-list'>
        <h1>My Tasks</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
