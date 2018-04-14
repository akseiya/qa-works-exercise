#!/bin/sh
cd "${0%/*}" # CD to directory where this script is located
[ -f bin/selenium.jar ] || ./bin/get_selenium.sh
[ -f bin/geckodriver ]  || ./bin/get_geckodriver.sh
npm i && npm t
