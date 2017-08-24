var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

/* LOGGIN */
router.get('/' , controllers.loggincontroller.loggin);

/* SIGNUP */
router.get( '/registro' , controllers.signupcontroller.signup );

/******** SOCIOS ********/

/* INICIO VER PERFIL */
router.post( '/socios/perfil' , controllers.sociocontroller.inicio );

module.exports = router;
