import "./App.css";
import ChoosePlan from "./component/ChoosePlan";
import CompanyNetwork from "./component/CompanyNetwork";
import Customer from "./component/Customer";
import Footer from "./component/Footer";
import GetStarted from "./component/GetStarted";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Subscribe from "./component/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <GetStarted />
      <Products />
      <ChoosePlan />
      <CompanyNetwork />
      <Customer />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
