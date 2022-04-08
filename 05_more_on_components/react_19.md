    * if you're using react 17 then your global installation of create-react-app is no longer supported because of react 18 updates so you just need to install with following commands, you have to uninstall it first

    * if installed using npm - npm uninstall -g create-react-app
    * if installed using yarn - yarn global remove create-react-app

# check npm that is installed globally
    * npm -g list

# create react app using npm instead of npx

    * npm install -g create-react-app
    * this shows version of tar is no longer supported error

    * but if you type again npm -g list 
    * this will show create-react-app@5.0.0 installed
    * now it adds global dependency
    * now you can use global dependency to create react app using npx

## Congratulations you have created react project using npx global react command to create react project