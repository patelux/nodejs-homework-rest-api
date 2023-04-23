const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/contacts');

const {validateBody, validateBodyFavorite, isValidId, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/contact");

router.get('/', authenticate, ctrl.listContacts);

router.get('/:id', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.delete('/:id', authenticate, isValidId, ctrl.removeContact);

router.put('/:id', authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", authenticate, isValidId, validateBodyFavorite(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
