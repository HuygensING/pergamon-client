#!/usr/bin/env bash

if [ "$1" != "patch" ] && [ "$1" != "minor" ] && [ "$1" != "major" ]; then
	echo "Error. Parameter should be patch | minor | major."
	exit 1
fi

current_version=$(node -pe 'require("./package.json").version')

npm version $1

if [ $? -ne 0 ]; then exit 1; fi

next_version=$(node -pe 'require("./package.json").version')

rm -rf build/*

npm run build
if [ $? -ne 0 ]; then exit 1; fi

sed -i -e "s/bundle-$current_version\.js/bundle-$next_version.js/g" index.html

git add index.html
git add package.json
git commit -m "Bump to $next_version"
git push && git push --tags
