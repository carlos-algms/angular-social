# angular-tiny-social

## Live DEMO version 
A live version of this project are hosted on Heroku and can be accessed on:

http://angular-tiny-social.herokuapp.com/

Due to Heroku policy, the first time you access the link, should take a minute to start the app. 


## Environment configuration
This project uses [nodejs][1], [ruby][2], [grunt][3], [bower][4], [compass][5] and [sass][6], so to run it you need to install all of then.

```shell
sudo apt-get install ruby-dev nodejs
sudo gem install compass sass
sudo npm install -g grunt-cli bower
```

## Install development dependencies
This step is mandatory to run and test this project
```shell
bower update && npm update
```

## Build & development

To run the development version with original sources 
```shell
grunt serve
```

To run the production version with sources concatenated and minified
```shell
grunt serve:dist
```

Build only
```shell
grunt build
```



## Testing

Running `grunt test` will run the unit tests with karma.




[0]: https://www.heroku.com/ 
[1]: https://nodejs.org/
[2]: https://www.ruby-lang.org/pt/
[3]: http://gruntjs.com/getting-started
[4]: http://bower.io/#install-bower
[5]: http://compass-style.org/install/
[6]: http://sass-lang.com/install
[7]: http://angular-tiny-social.herokuapp.com/
