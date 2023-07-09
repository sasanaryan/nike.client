import { useEffect, useState } from "react";
import type { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "store/store";
import { login } from "services/apiCall";
import FormInput from "components/formInput";
import usePrevLocation from "feature/usePrevLocation";

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
  const [userWrong, setUserWrong] = useState(false);
  const [values, setValues] = useState<loginUser>(initialUser);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const prevLocation = usePrevLocation(location);
  const navigate = useNavigate();
  let errormessage = useAppSelector((state) => state.user.errormessage);

  const methods = useForm<LogInInput>({
    resolver: zodResolver(LogInSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  const reDirect = () => {
    if ((prevLocation.pathname.split("/")[1] = "/register")) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      login(dispatch, values);
      setLoading(true);
    }
  }, [isSubmitSuccessful, userWrong]);

  useEffect(() => {
    if (errormessage !== null && loading) {
      setUserWrong(true);
      setLoading(false);
    } else if (loading) {
      setLoading(false);
      reset();
      reDirect();
    }
  }, [errormessage]);

  const onSubmitHandler: SubmitHandler<LogInInput> = (value) => {
    setUserWrong(false);
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
          {userWrong ? (
            <Typography
              sx={{ color: "red", fontSize: "15px", marginBottom: "10px" }}
            >
              {errormessage}
            </Typography>
          ) : null}
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
          <Typography>
            if you have not account go to <Link to="/register">Register</Link>{" "}
            page
          </Typography>
          <LoadingButton
            variant="contained"
            fullWidth
            type="submit"
            loading={loading}
            sx={{ py: "0.8rem", mt: "1rem" }}
          >
            Login
          </LoadingButton>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default Login;
