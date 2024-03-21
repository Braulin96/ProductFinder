import { Outlet } from "react-router-dom";
import { DataProvider } from "components/hooks/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        {/* <p>test</p> */}
        <Outlet />
      </div>
    </DataProvider>
  );
}

export default App;
