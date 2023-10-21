import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import { MenuProvider } from "./components/Navbar/context/MenuContext";
import Routes from "./routes/Routes";
import "./App.css"

function App() {

  return (
    <MenuProvider>
      <Layout>
        <Routes/>
        <Footer/>
      </Layout>
    </MenuProvider>
  )
}

export default App