---
sidebar_position: 4
---

# Let's encrypt

Please follow this if you want to use [let's encrypt](https://letsencrypt.org/) for certificate after you have configured properly in [conf](./conf).

## Install certbot

```bash
$ sudo apt install certbot python3-certbot-nginx
# ubuntu

$ sudo pacman -Sy certbot certbot-nginx
# arch
```

## Obtain a certificate

```bash
sudo certbot --nginx
```

then follow the instructions, remember to enable redirect to https.

Metahkg is now available on your domain.
