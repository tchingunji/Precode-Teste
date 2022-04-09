import { FormEventHandler, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import clientAPI from "../api/clientAPI";
import Button from "../components/Button";
import AuthContainer from "../components/container/AuthContainer";
import FormContainer from "../components/container/FormContainer";
import Input from "../components/Input";
import Loading from "../components/Loading";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const client = await clientAPI.getClientByEmail(email);
      if (!client) throw new Error("Client does not exist");
      logIn(client);
      navigate("/");
    } catch (error) {
      alert("Cliente não existe");
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <AuthContainer>
        <FormContainer onSubmit={onSubmit}>
          <h1 className="text-3xl mb-6">Login</h1>
          <p className="text-xl font-light mb-8">Seja bem vindo de volta</p>
          <Input required label="Email" value={email} onChangeText={setEmail} />
          <Input
            required
            label="Password"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
          <Button type="submit">Login</Button>
        </FormContainer>
        <p className="text-center mt-6 text-xl">
          Ainda não possui conta?
          <Link className="underline text-link ml-1" to="/sign-up">
            Cadastre Já
          </Link>
        </p>
      </AuthContainer>
    </>
  );
}

export default Login;
