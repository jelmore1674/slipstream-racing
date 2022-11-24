#! /bin/bash

set -eu -o pipefail

echo '\e[1;31mInstalling packages... 🎉'
yarn install --frozen-lockfile
echo '\e[1;31mBuilding application... 🛠️'
yarn build --filter=cms...
echo '\e[1;31mRestarting application... 🧟‍♂️'
pm2 startOrReload apps/cms/ecosystem.config.js --env production 
pm2 save
# Reload using the latest Nginx config
echo '\e[1;31mReloading Nginx… 💻'
sudo service nginx reload