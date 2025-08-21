import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export const signJwt = (payload, expiresIn = '7d') =>
  jwt.sign(payload, config.jwtSecret, { expiresIn });

export const verifyJwt = (token) => jwt.verify(token, config.jwtSecret);
