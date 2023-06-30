import { useEffect, useState } from "react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "store/store";
import { login } from "services/apiCall";
import FormInput from "components/formInput";

const LogInSchema = object({
  username: string()
    .nonempty("UserName is required")
    .min(2, "UserName must be more than 2 characters")
    .max(32, "UserName must be less than 100 characters"),

  password: string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

type LogInInput = TypeOf<typeof LogInSchema>;

interface loginUser {
  username: string;
  password: string;
}
let initialUser = {
  username: "",
  password: "",
};

const Login: FC = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<loginUser>(initialUser);
  const dispatch = useAppDispatch();

  const methods = useForm<LogInInput>({
    resolver: zodResolver(LogInSchema),
  });
  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      login(dispatch, values);
      reset();
      navigate(-1);
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LogInInput> = (value) => {
    setValues(value);
  };

  return (
    <Box sx={{ maxWidth: "30rem", padding: "10px", margin: "auto" }}>
      <Typography
        fontWeight="500"
        variant="h4"
        component="h1"
        sx={{ mb: "2rem" }}
      >
        LogIn
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
