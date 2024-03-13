
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App text-red-500">
      <p>test</p>
      <Outlet />
    </div>
  );
}

export default App;
