# Hello World using webpack + React

## Run 

```
npm start
```

## Building with Docker

```
npm run build
sudo docker build -t react-hello-word .
sudo docker run -p 8080:80 react-hello-word
```

TO DO: combine docker with npm?


### Useful commands (but unused in this project)

Login for ecr publish (with https fix):

```
eval $(aws ecr get-login --region us-east-1 | sed 's|https://||') 
```

Cleanup images

```
docker images | awk '{print $3}' | xargs docker rmi
```