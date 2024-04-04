import { Container } from "@mui/material";
import { useState } from "react";
import SignupForm from "../../components/Signup/SignupForm";
import LoginForm from "../../components/Login/LoginForm";

export default function AuthPage() {
  const [showReg, setShowReg] = useState(true);

  function handleRegOrLog() {
    setShowReg(!showReg);
  }

  return (
    <>
      <Container>
        {showReg ? (
          <SignupForm handleRegOrLog={handleRegOrLog} />
        ) : (
          <LoginForm handleRegOrLog={handleRegOrLog} />
        )}
      </Container>
    </>
  );
}
