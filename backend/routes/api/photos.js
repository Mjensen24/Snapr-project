const express = require("express");
const asyncHandler = require("express-async-handler");

const { restoreUser } = require("../../utils/auth");
const { Photo } = require("../../db/models");
const photo = require("../../db/models/photo");

const router = express.Router();

// get all of the photos
router.get('/', restoreUser, asyncHandler(async (req, res) => {
    const photos = await Photo.findAll();
    res.json({
        photos: photos
    })
}));

// get a single photo from the homepage
router.get('/:id', restoreUser, asyncHandler(async (req, res, next) => {
    let photo = await Photo.findOne({
        where: {
            id: req.params.id
        }
    });
    res.json({
        photo: photo
    })
}));

// get all photos for a single user
router.get('/user-photos/:userId', restoreUser, asyncHandler(async (req, res, next) => {
    const userPhotos = await Photo.findAll({
        where: {
            userId: req.params.userId
        }
    })
    console.log('THIS IS HERE', userPhotos)
    res.json({
        userPhotos: userPhotos
    })
}))

// POST a new photo
router.get('/post/:userId', restoreUser, asyncHandler(async (req, res, next) => {
    console.log(res)
    // const post = Photo.create({
    //     title:,
    //     subtitle: ,
    //     imageLink: ,
    //     userId: ,
    //     albumId: ,
    // })
}));



module.exports = router;
