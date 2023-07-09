import { useEffect, useState } from "react";
import type { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Checkbox from "@mui/material/Checkbox";
import FormInput from "components/formInput";
import { useAppDispatch } from "store/store";
import { registerUser } from "services/apiCall";
import usePrevLocation from "feature/usePrevLocation";

const registerSchema = object({
  username: string()
    .nonempty("UserName is required")
    .max(32, "UserName must be less than 100 characters"),
  email: string().nonempty("Email is required").email("Email is invalid"),
  password: string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().nonempty("Please confirm your password"),
  terms: literal(true, {
    invalid_type_error: "Accept Terms is required",
  }),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

type RegisterInput = TypeOf<typeof registerSchema>;
interface registerUser {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  terms: boolean;
}
let initialUser = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  terms: false,
};

const Register: FC = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<registerUser>(initialUser);
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = usePrevLocation(location);
  const dispatch = useAppDispatch();
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
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
      const { passwordConfirm, terms, ...other }: registerUser = values;

      registerUser(dispatch, { ...other });
      reset();
      reDirect();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
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
        Register
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
            name="email"
            required
            fullWidth
            label="Email Address"
            type="email"
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
          <FormInput
            name="passwordConfirm"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            sx={{ mb: 2 }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required />}
              {...register("terms")}
              label={
                <Typography color={errors["terms"] ? "error" : "inherit"}>
                  Accept Terms and Conditions
                </Typography>
              }
            />
            <FormHelperText error={!!errors["terms"]}>
              {errors["terms"] ? errors["terms"].message : ""}
            </FormHelperText>
          </FormGroup>
          <Typography>
            if you have account go to <Link to="/login">Login</Link> page
          </Typography>
          <LoadingButton
            variant="contained"
            fullWidth
            type="submit"
            loading={loading}
            sx={{ py: "0.8rem", mt: "1rem" }}
          >
            Register
          </LoadingButton>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default Register;
