import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDirectory = process.env.UPLOAD_DIRECTORY || "images";

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, uploadDirectory);
  },

  filename(req, file, callback) {
    const timestamp = Date.now();

    const extension = path.extname(file.originalname);

    const filename = `${timestamp}${extension}`;

    callback(null, filename);
  },
});

const fileFilter = (req, file, callback) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Only image files are allowed."));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

export default upload;