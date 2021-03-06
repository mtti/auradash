#!/bin/bash

# Enable swap
# source: https://gist.github.com/shovon/9dd8d2d1a556b8bf9c82

# size of swapfile in megabytes
swapsize=8000

# does the swap file already exist?
grep -q "swapfile" /etc/fstab

# if not then create it
if [ $? -ne 0 ]; then
  echo 'swapfile not found. Adding swapfile.'
  fallocate -l ${swapsize}M /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap defaults 0 0' >> /etc/fstab
else
  echo 'swapfile found. No changes made.'
fi

# output results to terminal
#df -h
#cat /proc/swaps
#cat /proc/meminfo | grep Swap

################################################################################

# Install pip if not installed
echo "Install PIP"
if [ $(dpkg-query -W -f='${Status}' python-pip 2>/dev/null | grep -c "ok installed") -eq 0 ]; then
  apt-get update
  apt-get install -y python-pip
fi

# Install Ansible if not installed
echo "Install Ansible"
pip freeze | grep 'ansible' &> /dev/null
if [ $? != 0 ]; then
  pip install ansible
fi

echo "rsync rootfs"
rsync -rtv --exclude ".DS_Store" /vagrant/.devbox/rootfs/ /

# Run ansible
pushd /vagrant/.devbox/ansible
  ansible-playbook playbook.yml
popd
