import express from "express";
const homeRoutes = express.Router();
const htmlRootDir = { root: "./public/pages/" };
homeRoutes.get("", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.sendFile("index.html", htmlRootDir);
});
export default homeRoutes;
//# sourceMappingURL=HomeRoutes.js.map