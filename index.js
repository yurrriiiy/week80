import express from "express"
import bodyParser from "body-parser"
import { createReadStream, writeFileSync } from 'fs';
import crypto from "crypto"
import http from "http"
import appSrc from "./app.js"
import m from 'mongoose'
import UserModel from './User.js';

const User = UserModel(m);
const app = appSrc(express, bodyParser, createReadStream, writeFileSync, crypto, http, m, User);

try {
    app.listen(process.env.PORT);
} catch(e) {
    console.log(e.codeName);
}
