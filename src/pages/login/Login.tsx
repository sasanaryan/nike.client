import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/formInput";

const SignInSchema = object({
  username: string()
    .nonempty("UserName is required")
    .max(32, "UserName must be less than 100 characters"),
  password: string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

type SignInInput = TypeOf<typeof SignInSchema>;
type registerUser = {
  username: string;
  password: string;
};
let initialUser = {
  username: "",
  password: "",
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState<registerUser>(initialUser);
  const methods = useForm<SignInInput>({
    resolver: zodResolver(SignInSchema),
  });
  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;
  interface other {
    username: string;
    password: string;
  }

  const onSubmitHandler: SubmitHandler<SignInInput> = (values) => {
    setValues(values);
  };

  return (
    <Box sx={{ maxWidth: "30rem", padding: "10px", margin: "auto" }}>
      <Typography
        fontWeight="500"
        variant="h4"
        component="h1"
        sx={{ mb: "2rem" }}
      >
        SinIn
      </Typography>
      <FormProvider {...methods}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <FormInput
            name="username"
            required
            fullWidth
            label="UserName"
            sx={{ mb: 2 }}
          />

          <FormInput
            name="password"
            required
            fullWidth
            label="Password"
            type="password"
            sx={{ mb: 2 }}
          />

          <LoadingButton
            variant="contained"
            fullWidth
            type="submit"
            loading={loading}
            sx={{ py: "0.8rem", mt: "1rem" }}
          >
            SignIn
          </LoadingButton>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default Login;
