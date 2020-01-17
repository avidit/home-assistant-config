#!/bin/sh

cd "$(dirname "$0")" || exit

opt=$1
case $opt in
-c | --config)
    docker-compose config
    ;;
-e | --exec)
    docker exec -it homeassistant /bin/bash
    ;;
-l | --logs)
    docker logs homeassistant --tail 20
    ;;
-r | --restart)
    docker-compose restart
    ;;
-R | --reboot)
    docker-compose down
    docker-compose up -d
    ;;
-u | --update)
    docker-compose up -d --build --force-recreate
    ;;
*)
    printf "\n%s [-c|config | -e|exec -l|logs | -r|restart -R|reboot | -u|update | -h|help ]\n" "$0"
    ;;
esac
