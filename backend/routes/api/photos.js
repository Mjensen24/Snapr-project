const express = require("express");
const asyncHandler = require("express-async-handler");

const { restoreUser } = require("../../utils/auth");
const { Photo } = require("../../db/models");
const photo = require("../../db/models/photo");

const router = express.Router();

router.get('/', restoreUser, asyncHandler(async (req, res) => {
    const photos = await Photo.findAll();
    res.json({
        photos: photos
    })
}));

router.get('/:id', restoreUser, asyncHandler(async (req, res, next) => {
    console.log(req.params)
    let photo = await Photo.findOne({
        where: {
            id: req.params.id
        }
    });
    res.json({
        photo: photo
    })
}));


router.post('/', restoreUser, asyncHandler(async (req, res, next) => {

}));



module.exports = router;
