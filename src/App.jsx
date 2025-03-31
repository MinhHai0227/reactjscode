import { Route, Routes } from "react-router-dom";
import { privateRouters, publicRouters } from "./routes";
import DefaultLayout from "./layout/defaultLayout";
import { Bounce, ToastContainer } from "react-toastify";
import PrivateRouter from "./routes/PrivateRouter";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        {publicRouters.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout || DefaultLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {privateRouters.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout || DefaultLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRouter>
                  <Layout>
                    <Page />
                  </Layout>
                </PrivateRouter>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
