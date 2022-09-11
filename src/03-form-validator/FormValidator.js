import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [result, setResult] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || passwordConfirm === "") {
      setResult("email, password or passwordConfirm empty");
      return;
    } else if (
      !email.includes("@") ||
      email.includes("@", email.indexOf("@") + 1)
    ) {
      setResult("email has zero of more than one '@' symbol");
      return;
    } else if (password.length < 8 || passwordConfirm.length < 8) {
      setResult("password under 8 characters in length");
      return;
    } else if (password !== passwordConfirm) {
      setResult("password and passwordConfirm do not match");
      return;
    }
    setResult("Success");
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <input type="submit" value="Submit" />
      {result !== "" && <label>{result}</label>}
    </form>
  );
}
