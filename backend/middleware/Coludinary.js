const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dikaxyeff",
    api_key: "361618244844942",
    api_secret: "A4kS8LAL6oZAOlweGGoMHJPANsY",
});

// let uploadImage = (path, originalname) => {
//     return cloudinary.uploader.upload(
//         path,
//         { public_id: `${originalname}` },
//         function (error, result) {
//             return result;
//         }
//     );
// };

module.exports = cloudinary;