npm install -g @ionic/cli
npm install -g @capacitor/assets
git clone https://github.com/gadelhati/fla-app.git fla-app
npm install
ionic serve

npm run build
npx cap sync
npx cap open android

# SUBSTITUI OS TRES ANTERIORES
ionic capacitor build android

npx cap add android