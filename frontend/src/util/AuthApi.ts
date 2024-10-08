export const loginRequest = (
  username: string,
  password: string
): Promise<void> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
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

export const registerRequest = (
  username: string,
  password: string
): Promise<void> => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((errorData) => {
          console.log("errorData", errorData);
          throw new Error(errorData.message || "Registration failed");
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error registering:", error);
      throw error;
    });
};

export const isLoggedIn = (): boolean => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};

export const getUsername = (): string | null => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const [, payload] = token.split(".");
  const decodedPayload = atob(payload);
  console.log("decodedPayload:", decodedPayload);
  const { username } = JSON.parse(decodedPayload);
  return username;
};
