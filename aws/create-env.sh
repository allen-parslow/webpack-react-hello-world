#!/bin/bash

set -x
set -o errexit

GIT_URL=$(node -pe "require('./package').repository.url")
PROJECT_NAME=$npm_package_name

echo "Create build for $PROJECT_NAME - $GIT_URL"

aws cloudformation create-stack --stack-name $PROJECT_NAME --template-body file://aws/codedeploy-formation.yml \
          --parameters ParameterKey=GitRepoUrl,ParameterValue=$GIT_URL