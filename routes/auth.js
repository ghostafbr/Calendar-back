/*
    Ruta: /api/auth
    host + /api/auth
* */


const {Router} = require('express');
const {check} = require('express-validator');
const {signup, login, renewToken} = require("../controllers/auth.controller");
const {checkField} = require("../middlewares/field-validators");
const {validateJWT} = require("../middlewares/validate-jwt");
const router = Router();

router.post('/signup', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({min: 6}),
    checkField
], signup);

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({min: 6}),
    checkField
], login);

router.get('/renew-jwt', validateJWT, renewToken);

module.exports = router;
