npm uninstall -g ionic
npm install -g @ionic/cli

npm install -g @capacitor/assets

# CLONE PROJECT
    git clone https://github.com/gadelhati/fla-app.git fla-app
# CREATE PROJECT
    ionic start project-name [tabs|sidemenu|blank|my-first-app|conference]
    > Angular    |   https://angular.io
    > React      |   https://reactjs.org
code project-name
ionic serve

npm run build
npx cap sync
npx cap open android

# SUBSTITUI OS TRES ANTERIORES
ionic capacitor build android

npx cap add android

# ANGULAR
npx -p @angular/cli17 ng new my-app-angular --skip-tests
npm start