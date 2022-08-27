set -eu -o pipefail
# Install dependencies, build the project, and restart the front-end server
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
echo '\e[1;31mInstalling packages... 🎉'
yarn install --immutable
echo '\e[1;31mBuilding application... 🛠️'
yarn build --filter=cms...
echo '\e[1;31mRestarting application... 🧟‍♂️'
pm2 startOrReload apps/cms/ecosystem.config.js --env production 
pm2 save
# Reload using the latest Nginx config
echo '\e[1;31mReloading Nginx… 💻'
sudo service nginx reload