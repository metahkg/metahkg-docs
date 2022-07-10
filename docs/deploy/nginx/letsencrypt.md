---
sidebar_position: 4
---

# Let's encrypt

Please follow this if you want to use [let's encrypt](https://letsencrypt.org/) for certificate after you have configured properly in [conf](./conf).

## Install certbot

### Debian

```bash
sudo apt install certbot python3-certbot-nginx
```

### Arch

```bash
sudo pacman -Sy certbot certbot-nginx
```

### RHEL

```bash
sudo dnf install python3 python3-pip
# install pip

sudo pip3 install certbot certbot-nginx
# install certbot and certbot-nginx using pip
```

## Obtain a certificate

```bash
sudo certbot --nginx
```

follow the instructions, remember to enable redirect to https.

Metahkg is now available on your domain.
