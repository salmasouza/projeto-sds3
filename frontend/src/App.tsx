

import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dashboard de Vendas</h1>

        <div className='row px-3'>
          <div className="col-sm-6">
            <h5>Todas as Vendas</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Todas as Vendas</h5>
            <DonutChart/>
          </div>
          

          

        <div className="py-3">
          <h2 className="twxt-primary">Todas as Vendas</h2>
        </div>

        </div>


        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
