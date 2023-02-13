---
sidebar_position: 1
---

# Requirements

:::tip Supported OSes
## Architectures

- amd64
- arm64

## Systems

- Debian / Ubuntu
- Arch Linux
- RHEL / Rocky Linux
- MacOS (with [brew](https://brew.sh/) installed)

It should work on other distributions, you can try translating the commands below.
:::

## Local

:::tip
You could install other dependencies using the [setup script](./script.md),
but you must install [git](#git) and [clone the repository](./clone.md) first.
:::

### Git

#### Debian

```bash
sudo apt install git
```

#### Arch

```bash
sudo pacman -Sy git
```

#### RHEL

```bash
sudo dnf install git
```

#### MacOS

```bash
brew install git
```

### Nodejs & yarn

#### Debian

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
# use the nodesource setup script

sudo apt install -y nodejs
# install nodejs

sudo corepack enable
# enable yarn
```

#### Arch

```bash
sudo pacman -Sy nodejs
# install nodejs

sudo corepack enable
# enable yarn
```

#### RHEL

```bash
sudo dnf install nodejs
# install nodejs

sudo corepack enable
# enable yarn
```

#### MacOS

```bash
brew install nodejs yarn
```

### Docker & docker-compose

#### Debian

```bash
sudo apt install docker.io

sudo curl -L "https://github.com/docker/compose/releases/download/$(curl --silent "https://api.github.com/repos/docker/compose/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### Arch

```bash
sudo pacman -Sy docker docker-compose
```

#### RHEL

```bash
sudo dnf install docker

sudo curl -L "https://github.com/docker/compose/releases/download/$(curl --silent "https://api.github.com/repos/docker/compose/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### MacOS

```bash
brew install docker docker-compose
```

### Nginx

#### Debian

```bash
sudo apt install nginx
```

#### Arch

```bash
sudo pacman -Sy nginx-mainline
```

#### RHEL

```bash
sudo dnf install nginx
```

#### MacOS

```bash
brew install nginx
```

### Mongodb shell and database tools

:::tip Optional
This is now optional but still recommended. Required in many manual steps.
Skip this for now if you just want to try out metahkg.
:::

#### Debian

```bash
sudo apt install gnupg
# install gnupg

wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
# import public key

echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
# add mongodb apt repository

sudo apt update
# update packages list

sudo apt install mongodb-org-shell mongodb-org-tools
# install mongosh and mongodb database tools
```

#### Arch

Install from [aur](https://aur.archlinux.org/).

```bash
cd ~/Downloads
# go to downloads folder (or any other folders)

git clone https://aur.archlinux.org/mongosh-bin.git
git clone https://aur.archlinux.org/mongodb-tools-bin.git
# clone the aur repositories

cd mongosh-bin
makepkg -si
# install mongosh

cd ../mongodb-tool-bin
makepkg -si
# install mongodb tools

cd ..
rm -rf mongodb-tools-bin mongosh-bin
# remove the repositories after installation
```

#### RHEL

Add the mongodb repository:

```bash
nano /etc/yum.repos.d/mongodb-org-6.0.repo
```

```ini title=/etc/yum.repos.d/mongodb-org-6.0.repo
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Install:

```bash
sudo dnf install mongodb-org-shell mongodb-org-tools
```

#### MacOS

```bash
brew tap mongodb/brew
# add mongodb formula repository

brew update

brew install mongodb-database-tools mongodb-community-shell
```

## Third party services

- mailgun (for sending emails) - obtain an api key at [mailgun.com](https://mailgun.com)
- recaptcha - obtain a site key and secret pair from [developers.google.com/recaptcha](https://developers.google.com/recaptcha)

## Domain

:::tip Tip
You don't need a domain to test or deploy locally. See below.
:::

Metahkg needs four domains / subdomains, for the web app and api, link shortening, images processing/proxy, and metadata (link preview) proxy.

- [cloudflare](https://developers.cloudflare.com/registrar/get-started/register-domain/)
- [namecheap](https://www.namecheap.com/)
- You can get a [free domain](https://nc.me/) from namecheap if you are a student
- Some free subdomains are available, for example from [duckdns](https://www.duckdns.org/)

### Deploying locally

If you are deploying locally only, you can use domains that resolves to localhost
( e.g. `*.test.wcyat.me` )

You can configure the domain to resolve to localhost on your machine only:

```bash
sudo nano /etc/hosts
```

Append a line to /etc/hosts.

```bash title=/etc/hosts
# ...

127.0.0.1 example.com
127.0.0.1 l.example.com
127.0.0.1 i.example.com
```
