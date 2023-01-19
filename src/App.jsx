import './App.css';
import {Layout} from "antd";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CreateCountry from "./pages/CreateCountry/CreateCountry";
import EditCountry from "./pages/EditCountry/EditCountry";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const {Header, Content} = Layout;
  
  return (
      <Layout>
        <Header>
          <Navbar/>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<CreateCountry/>}/>
            <Route path="/edit/:id" element={<EditCountry/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Content>
      </Layout>
  );
}

export default App;
