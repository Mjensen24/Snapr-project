const express = require("express");
const asyncHandler = require("express-async-handler");

const { restoreUser } = require("../../utils/auth");
const { Photo, User } = require("../../db/models");
const photo = require("../../db/models/photo");
const user = require("../../db/models/user");

const router = express.Router();

// const getRouteUserId = (req) => {
//     return parseInt(
//         req.originalUrl
//             .match(/users\/(?<user>\d+)/)
//             .groups.user
//         , 10);
// }

// find a single photo for photo page
router.get('/photo', restoreUser, asyncHandler(async (req, res, next) => {
    console.log('params', req.params)
    let photo = await Photo.findOne({
        where: {
            id: req.params
        }
    });
    res.json({
        photo: photo
    })
}));

module.exports = router;
