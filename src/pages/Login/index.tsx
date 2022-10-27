import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { FlexContainer } from "../../styles/FlexContainer";
import { Form } from "../../styles/Form";
import { schemaLogin } from "./validation";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";

interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schemaLogin),
  });

  const onLogin = (data: ILoginForm) => {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Input
          register={register}
          error={errors.email}
          label="Email"
          name="email"
        />
        <Input
          register={register}
          error={errors.password}
          label="Password"
          name="password"
          type="password"
        />

        <Button disabled={isLoading} isLoading={isLoading} type="submit">
          Entrar
        </Button>
      </FlexContainer>
    </Form>
  );
};
export default Login;
