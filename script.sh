#! /bin/bash 

# 1. Get app name
echo "Welcome to the CF Node.js app builder!"
printf "What do you want to name your app? "
read APPNAME
echo "Building $APPNAME..."

# 2. Download repo
git clone "https://github.com/benrondeau/cf-nodejs-app-boilerplate.git"

# 3. Rename repo
mv cf-nodejs-app-boilerplate $APPNAME

# 4. Add App Name to README
cd $APPNAME
rm README.MD
touch README.MD
echo "# $APPNAME" >> README.MD

# 5. NPM
npm install

# 6. Remove unwanted files
rm -rf .git
rm script.sh

# 7. git commands
git init
git add .
git commit -m "Initial commit"

#8. Done.
echo "Enjoy your new app!"