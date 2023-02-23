import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "pabloc",
    email: "pabloc@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value,
    });
  };

  //   solo se dispara una sola vez y cuando el componente se renderiza
  useEffect(() => {
    // console.log("useEfect call");
  }, []);

  //   se dispara cuando el formulario cambia
  useEffect(() => {
    // console.log("formState change");
  }, [formState]);

  //   cuando el email cambia
  useEffect(() => {
    // console.log("email change");
  }, [email]);


  

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'pabloc2') && <Message />
      }
    </>
  );
};
