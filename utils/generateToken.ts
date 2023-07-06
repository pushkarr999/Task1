import jwt from "jsonwebtoken";
import { random } from "./random";

const generateToken = (id: string) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "120",
  });

  return token;
};

const generateRefreshToken = () => {
  
  const refreshToken = random(64);

  return refreshToken;
};

export {generateToken,generateRefreshToken};