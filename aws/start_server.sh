#!/bin/bash

sudo npm install --prefix /home/ubuntu/code/codedeploy-3
cd /home/ubuntu/code/codedeploy-3
sudo npm run build
sudo systemctl start node-api.service
