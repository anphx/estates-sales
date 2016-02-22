0. Prerequisites
  - MySQL installed: this project used mysqladmin Ver 8.42 Distrib 5.6.23, for osx10.10 on x86_64. (You can follow the instruction to install MySQL using homebrew for MacOS).
  - Ruby: 2.0.0p643 (reference: https://www.ruby-lang.org/en/documentation/installation/)
  - Rails 4.1.9 (gem install rails).

1. Steps to prepare the source code.
  1.1 Prepare api server:
    - Go to back-end folder: cd ./Source/back-end
    - Install rails dependencies: bundle install
    - Follow step 2 to create and initialize database.
    - Start server: rails server (please make sure to backend server is running at http://localhost:3000).

  1.2 Start proxy server (this is used for allowing cross-domain call to api server)
    - Install corsproxy: npm install -g corsproxy
    - Start: corsproxy (please make sure to backend server is running at http://localhost:1337).

  1.3 Prepare web application server: 
    - Go to front-end folder: cd ./Source/front-end
    - Install Node.js
    - Install bower by: npm install -g bower
    - Install gulp: npm install -g gulp
    - Install node modules: npm install
    - Install bower components: bower install
    - Start gulp server at port 3001: gulp serve -p 3001

2. Steps to create and initialize the database
  - Go to back-end folder: cd ./Source/back-end
  - Open database.yml file to configure database credentials.
  - Setup database: rake db:setup
