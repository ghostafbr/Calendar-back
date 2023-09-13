const { Router } = require('express');
const {check} = require('express-validator');
const {getEvents, updateEvent, deleteEvent, createEvent} = require('../controllers/events.controller');
const {validateJWT} = require('../middlewares/validate-jwt');
const {checkField} = require("../middlewares/field-validators");
const {isDate} = require("../helpers/isDate");

const router = Router();

router.use(validateJWT);

// get events
router.get('/', getEvents);

// create event
router.post('/', [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom( isDate),
    check('end', 'End date is required').custom( isDate),
    checkField
], createEvent);

// update event
router.put('/:id', updateEvent);

// delete event
router.delete('/:id', deleteEvent);

module.exports = router;
