# Hello World using webpack + React

## AWS
TODO create script to populate these:

code build (role-name=builder):
https://docs.aws.amazon.com/codebuild/latest/userguide/setting-up.html#setting-up-service-role

code deploy (role-name=builder):
https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-provision-user.html

instance-role (role-name=deploy-target): 
https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-iam-instance-profile.html#getting-started-create-iam-instance-profile-console

create security-group: my-ip

create us-east-1

## Run 

```
npm start
```

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