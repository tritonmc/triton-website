// Setup redirects here
const redirectMap = {
  "/discord": "https://discord.gg/9FsawxR",
  "/github_issues": "https://github.com/Rexcantor/MultiLanguagePlugin/issues",
};

module.exports = (req, res, next) => {
  if (redirectMap[req.path]) res.redirect(redirectMap[req.path]);
  next();
};
