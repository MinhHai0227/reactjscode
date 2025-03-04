import { Route, Routes } from "react-router-dom";
import {publicRouters} from './routes'
import DefaultLayout from "./layout/defaultLayout";


function App() {
 

  return (
    <>
    <Routes>
      {publicRouters.map((route,index) => {

        const Page = route.component;
        let Layout = route.layout || DefaultLayout;

        return <Route key={index} path={route.path} element={
          <Layout> <Page/> </Layout>
        } />
      })}
    </Routes>
   
    </>
  );
}

export default App
