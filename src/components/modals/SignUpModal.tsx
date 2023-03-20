import React from "react";
import { useContext } from "react";
import AuthContext from "@/context/auth/authContext";
import { Modal, Button } from "antd";

interface SignupContextType {
  signup: false;
  dispatch: Function;
}

function SignUpModal() {
  const { signup, dispatch }: SignupContextType = useContext(AuthContext);
  const handleOpen = () => {
    dispatch({
      type: "SIGNUP_OPEN",
    });
  };
  const handleClose = () => {
    dispatch({
      type: "SIGNUP_CLOSE",
    });
  };
  const toLogin = () => {
    dispatch({
      type: "SIGNUP_TO_LOGIN",
    });
  };
  return (
    <div>
      <Modal
        title="Signup"
        open={signup}
        onOk={handleOpen}
        onCancel={handleClose}
      >
        <p>Signup Content</p>
        <Button onClick={toLogin} type="primary">
          To Login
        </Button>
      </Modal>
    </div>
  );
}

export default SignUpModal;
