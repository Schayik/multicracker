# GitHub Pages

### GitHub
* Configure settings: `<repository_name>` -> Settings -> GitHub Pages: change 'Source' to: master branch /docs folder
* add `'pathPrefix': '<respository_name>'` to gatsby-config.js

### Push
2. clean gatsby: `gatsby clean`
3. build with prefix: `gatsby build --prefix-paths`
4. rename public folder to docs
5. push