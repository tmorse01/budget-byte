import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Input,
  Text,
  makeStyles,
} from "@fluentui/react-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface LoginDialogProps {
  onLogin: (
    username: string,
    password: string,
    onError: (message: string) => void
  ) => void;
}

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const useStyles = makeStyles({
  loginButton: {
    height: "32px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
});

const LoginDialog: React.FC<LoginDialogProps> = ({ onLogin }) => {
  const styles = useStyles();

  const handleLogin = (email: string, password: string) => {
    onLogin(email, password, (errorMessage: string) => {
      console.log("Error from api:", errorMessage);
    });
  };

  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <Button className={styles.loginButton}>Login</Button>
      </DialogTrigger>
      <DialogSurface aria-describedby={undefined}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("onSubmit ", values);
            handleLogin(values.email, values.password);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <DialogBody>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                  <Field name="username" as={Input} placeholder="Username" />
                  {errors.email && touched.email && (
                    <Text style={{ color: "red" }}>{errors.email}</Text>
                  )}
                  <Field
                    name="password"
                    as={Input}
                    placeholder="Password"
                    type="password"
                  />
                  {errors.password && touched.password && (
                    <Text style={{ color: "red" }}>{errors.password}</Text>
                  )}
                </DialogContent>
                <DialogActions>
                  <Button type="submit" disabled={isSubmitting}>
                    Login
                  </Button>
                  <Button
                    type="button"
                    onClick={() => console.log("Cancel Clicked")}
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </DialogBody>
            </Form>
          )}
        </Formik>
      </DialogSurface>
    </Dialog>
  );
};

export default LoginDialog;
