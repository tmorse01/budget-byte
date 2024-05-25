import * as React from "react";
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  DialogTrigger,
  Button,
  Input,
  Text,
  makeStyles,
} from "@fluentui/react-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface LoginDialogProps {}

const loginSchema = Yup.object({
  username: Yup.string()
    .email("Invalid email")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
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

const loginRequest = (username: string, password: string): Promise<void> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Login successful");
      } else {
        console.log("Login failed");
        throw new Error("Login failed");
      }
      return response.json();
    })
    .then((data: { token: string }) => {
      localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      throw error;
    });
};

const LoginDialog: React.FC<LoginDialogProps> = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = (username: string, password: string) => {
    loginRequest(username, password)
      .then(() => {
        setOpen(false);
        setIsLoggedIn(true);
      })
      .catch(() => {
        console.log("Display error message");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
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
          initialValues={{ username: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("onSubmit ", values);
            handleLogin(values.username, values.password);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
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
                  <DialogTrigger disableButtonEnhancement>
                    <Button
                      type="submit"
                      appearance="primary"
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                  </DialogTrigger>
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
