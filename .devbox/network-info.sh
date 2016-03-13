#!/bin/bash

ETH1=$(ifconfig eth1 | awk -F"[: ]+" '/inet addr:/ {print $4}')

echo " "
echo "Access your development site at http://$ETH1"
echo "or http://$ETH1/app_dev.php"
