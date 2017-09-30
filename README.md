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

## Running on AWS -- Ubuntu Server 16.04 LTS, t2.micro (or greater)

```
sudo apt-get update

sudo apt-get install git
git --version #verify installed

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm@latest -g
node -v #verify installed
npm -v #verify installed

sudo apt-get install -y build-essential

sudo apt-get install -y docker.io
docker -v #verify installed

git clone https://github.com/allen-parslow/webpack-react-hello-world.git
cd webpack-react-hello-world/

npm install
npm run build

sudo docker build -t react-hello-word .
sudo docker run -p 80:80 react-hello-word &

curl localhost
```

If everything worked, then you should see a html page with a title containing Hello World

#### References
Install nodejs/npm on another OS: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions