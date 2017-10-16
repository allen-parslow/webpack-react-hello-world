# Hello World using webpack + React

## Run 

```
npm start
```
d
### Useful commands (but unused in this project)

Login for ecr publish (with https fix):

```
eval $(aws ecr get-login --region us-east-1 | sed 's|https://||') 
```

Cleanup images

```
docker rm -f $(docker ps -aq)
docker images | awk '{print $3}' | xargs docker rmi
```