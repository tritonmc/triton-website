// Setup redirects here
const redirectMap = {
  "/discord": "https://discord.gg/9FsawxR",
};

module.exports = (req, res, next) => {
  if (redirectMap[req.path]) res.redirect(redirectMap[req.path]);
  next();
};
