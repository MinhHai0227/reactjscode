import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

function PrivateRouter({ children }) {
  let deco;
  const token = localStorage.getItem("token");
  if (token) {
    deco = jwtDecode(token);
  }
  const isLogin = useSelector(state => state.auth.isLogin);
  const role = deco.role;
  if(isLogin && role !== 'admin'){
    return(
        <>
        Bạn không đủ quyền hạn !!!!
        </>
    )
  }
  return <>{children}</>;
}

export default PrivateRouter
