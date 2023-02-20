import { useState, ChangeEvent, FC } from "react";

// Here we have a type (Role) that is a union of strings
type Role = "backend" | "frontend" | "designer";

// Interface. You'll notice here that otherRole is optional
export interface PersonProps {
  name: string;
  age: number;
  email: string;
  role: Role;
  otherRole?: Role;
}

// Person is defined as a Functional component (FC) that takes in the PersonProps interface
// Then declaring which properties I want to take in
// I am specifying that Person is going to return either a JSX element or null (this is optional)
export const Person: FC<PersonProps> = ({
  name,
  age,
  email,
  role,
  otherRole,
}): JSX.Element | null => {
  // Country will either be a string or null
  const [country, setCountry] = useState<string | null>("");

  // Here we are specifying that handleChange is an event handler and
  // what kind of html element will trigger the event
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCountry(event.target.value);
  if (country === null) {
    return null;
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder="What country are you from?" onChange={handleChange} />
      {country}
      {role}
      {otherRole}
    </div>
  );
};
