import { useContext } from "react";
import AuthContext from "@/context/auth/authContext";
import { Modal, Button } from "antd";
interface loginContextType {
  login: boolean;
  dispatch: Function;
}

function LoginModal() {
  const { login, dispatch }: loginContextType = useContext(AuthContext);
  const handleOpen = () => {
    dispatch({
      type: "LOGIN_OPEN",
    });
  };
  const handleClose = () => {
    dispatch({
      type: "LOGIN_CLOSE",
    });
  };

  const toSingup = () => {
    dispatch({
      type: "LOGIN_TO_SIGNUP",
    });
  };
  return (
    <div>
      <Modal
        title="Login"
        open={login}
        onOk={handleOpen}
        onCancel={handleClose}
      >
        <p>Login Content</p>
        <Button onClick={toSingup} type="primary" danger>
          To Signup
        </Button>
      </Modal>
    </div>
  );
}

export default LoginModal;
