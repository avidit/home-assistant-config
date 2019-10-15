#!/bin/sh

restart() {
    cd "$(dirname "$0")" || exit
    docker-compose down
    docker-compose up -d
}

update() {
    cd "$(dirname "$0")" || exit
    docker-compose down
    docker-compose pull
    docker-compose up -d
}

opt=$1
case $opt in
-e | --exec)
    docker exec -it homeassistant /bin/bash
    ;;
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
    printf "\n%s [-e|exec -l|logs | -r|restart | -u|update | -h|help ]\n" "$0"
    ;;
esac
