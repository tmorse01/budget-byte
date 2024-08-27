import * as React from "react";
import {
  Dialog,
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
import { useToast } from "@/contexts/ToastContext";
import { loginRequest, registerRequest } from "@/util/AuthApi";

interface LoginDialogProps {}

const loginSchema = Yup.object({
  username: Yup.string()
    .email("Invalid email")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
  action: Yup.string().required("Action is required"),
});

const useStyles = makeStyles({
  loginButton: {
    height: "32px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "10px",
  },
});

const LoginDialog: React.FC<LoginDialogProps> = () => {
  const styles = useStyles();
  const { notify } = useToast();
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = (username: string, password: string) => {
    loginRequest(username, password)
      .then(() => {
        setOpen(false);
        setIsLoggedIn(true);
        notify("Login successful", "You are now logged in", "success");
      })
      .catch(() => {
        notify("Login failed", "Invalid username or password", "error");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleRegister = (username: string, password: string) => {
    registerRequest(username, password)
      .then(() =>
        notify("Registration successful", "You can now login", "success")
      )
      .catch((e: Error) => {
        notify("Registration failed", e.message, "error");
      });
  };

  return (
    <Dialog
      modalType="non-modal"
      open={open}
      onOpenChange={(_e, data) => setOpen(data.open)}
    >
      {isLoggedIn ? (
        <Button className={styles.loginButton} onClick={() => handleLogout()}>
          Logout
        </Button>
      ) : (
        <Button className={styles.loginButton} onClick={() => setOpen(true)}>
          Login
        </Button>
      )}
      <DialogSurface aria-describedby={undefined}>
        <Formik
          initialValues={{ username: "", password: "", action: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            if (values.action === "login") {
              handleLogin(values.username, values.password);
            } else {
              handleRegister(values.username, values.password);
            }
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting, setFieldValue }) => (
            <Form>
              <DialogBody>
                <DialogTitle>Login</DialogTitle>
                <DialogContent className={styles.content}>
                  <Field name="username" as={Input} placeholder="Username" />
                  {errors.username && touched.username && (
                    <Text style={{ color: "red" }}>{errors.username}</Text>
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
                  <Button
                    type="submit"
                    appearance="primary"
                    disabled={isSubmitting}
                    onClick={() => setFieldValue("action", "login")}
                  >
                    Login
                  </Button>
                  <Button
                    type="submit"
                    appearance="secondary"
                    onClick={() => setFieldValue("action", "register")}
                  >
                    Register
                  </Button>
                  <Button
                    type="button"
                    appearance="secondary"
                    onClick={() => setOpen(false)}
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
