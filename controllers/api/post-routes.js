const router = require("express").Router();
const {Posts} = require("../../models/Accounts");
const {v4: uuid} = require("uuid");
const bcrypt = require("bcrypt");
