# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.provision :shell, path: ".devbox/provision.sh"
  config.vm.provision :shell, path: ".devbox/network-info.sh", run: "always"

  config.vm.network "private_network", type: "dhcp"
  config.ssh.forward_agent = true

  config.vm.provider "virtualbox" do |vb|
  
    vb.customize ["modifyvm", :id, "--memory", "1024"]

    # Fix slow DNS resolution in guest
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]

  end

end
