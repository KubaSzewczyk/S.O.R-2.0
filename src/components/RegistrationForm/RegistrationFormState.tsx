import { ChangeEventHandler, useState } from "react";
import { Button } from "../../ui";

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormState = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    password: "",
    language: "",
  });
  const { email, language, password } = formData;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <form>
      email: {email}
      password: {password}
      language: {language}
      <div>
        <label className="mr-2" htmlFor="email">
          E-mail
        </label>
        <input
          className="my-2 border"
          id="email"
          type="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <label className="mr-2" htmlFor="password">
          Password
        </label>
        <input
          className="my-2 border"
          id="password"
          type="password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div>
        <label className="mr-2" htmlFor="language">
          Language
        </label>
        <input
          className="my-2 border"
          id="language"
          onChange={handleChange}
          value={language}
        />
      </div>
      <Button label="Send" type="submit" />
    </form>
  );
};
