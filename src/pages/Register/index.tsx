import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FlexContainer } from "../../styles/FlexContainer";
import { Form } from "../../styles/Form";
import { schemaRegister } from "./validation";

export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schemaRegister),
  });

  const onRegister = (data: IRegisterForm) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onRegister)}>
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <label>Username:</label>
        <input {...register("username")} />
        {errors.username && (
          <span className="error">{errors.username.message}</span>
        )}

        <label>Email:</label>
        <input {...register("email")} />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <label>Password:</label>
        <input type="password" {...register("password")} />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}

        <button type="submit">Entrar</button>
      </FlexContainer>
    </Form>
  );
};
export default Register;
