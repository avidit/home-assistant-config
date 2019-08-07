#!/bin/sh

restart() {
    cd "$(dirname "$0")"
    docker-compose down
    docker-compose up -d
}

update() {
    cd "$(dirname "$0")"
    docker-compose down
    docker-compose pull
    docker-compose up -d
}

opt=$1
case $opt in
-l | --logs)
    docker logs homeassistant --tail 20
    ;;
-r | --restart)
    restart
    ;;
-u | --update)
    update
    ;;
*)
    echo "\n$0 [-l|logs | -r|restart | -u|update | -h|help ]\n"
    ;;
esac
