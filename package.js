Package.describe({
  name: "evgenyrodionov:flexboxgrid2",
  version: "7.0.0-alpha4",
  summary: "Grid based off of CSS3 flexbox specification",
  git: "https://github.com/evgenyrodionov/flexboxgrid2",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.3-rc.8");
  api.use("ecmascript");
  api.addFiles("dist/flexboxgrid.css");
});
