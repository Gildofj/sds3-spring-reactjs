import { DataTable } from "components/DataTable";
import { Footer } from "components/Footer";
import { NavBar } from "../../.history/frontend/src/components/Navbar_20210505024839";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Gildo</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
