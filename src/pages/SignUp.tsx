import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import clientAPI from "../api/clientAPI";
import Button from "../components/Button";
import AuthContainer from "../components/container/AuthContainer";
import FormContainer from "../components/container/FormContainer";
import Input from "../components/Input";
import Loading from "../components/Loading";
import { AuthContext } from "../context/AuthContext";
import { Client } from "../models/Client";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await clientAPI.createClient({
        address,
        email,
        name,
        password,
      });
      const client = (await clientAPI.getClientByEmail(email)) as Client;
      logIn(client);
      navigate("/");
    } catch (error) {
      alert("Erro ao criar conta");
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <AuthContainer>
        <FormContainer onSubmit={onSubmit}>
          <h1 className="text-3xl mb-6">Criar Conta</h1>
          <p className="text-xl font-light mb-2">
            Que bom termos a sí como um novo cliente
          </p>
          <Input required value={name} onChangeText={setName} label="Nome" />
          <Input
            required
            value={email}
            onChangeText={setEmail}
            label="Email"
            type="email"
          />
          <Input
            required
            value={address}
            onChangeText={setAddress}
            label="Endereço"
          />
          <Input
            required
            value={password}
            onChangeText={setPassword}
            label="Password"
            type="password"
          />
          <Button type="submit">Criar Conta</Button>
        </FormContainer>
        <p className="text-center mt-6 text-xl">
          Já possui uma conta?
          <Link className="underline text-link ml-1" to="/login">
            Faça o login
          </Link>
        </p>
      </AuthContainer>
    </>
  );
}

export default SignUp;
