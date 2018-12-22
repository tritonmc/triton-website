// Setup redirects here
const redirectMap = {
  "/discord": "https://discord.gg/9FsawxR",
  "/github": "https://github.com/Rexcantor/MultiLanguagePlugin/",
  "/github_issues": "https://github.com/Rexcantor/MultiLanguagePlugin/issues",
  "/github_config": "https://github.com/Rexcantor/MultiLanguagePlugin/blob/master/config.yml",
  "/github_config_bungee":
    "https://github.com/Rexcantor/MultiLanguagePlugin/blob/master/bungee_config.yml",
  "/api": "https://github.com/Rexcantor/MultiLanguagePlugin/wiki",
  "/spigot": "https://www.spigotmc.org/resources/triton.30331/",
};

module.exports = (req, res, next) => {
  if (redirectMap[req.path]) res.redirect(redirectMap[req.path]);
  else next();
};
