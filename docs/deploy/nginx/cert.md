---
sidebar_position: 2
---

# SSL certificate

If you already have a certificate, skip this.

## Self-signed certificate

Use a self-signed certificate if you are deploying locally.

### Ubuntu

There is a pair of self signed certificate and key on all ubuntu installations already.

```bash
/etc/ssl/certs/ssl-cert-snakeoil.pem
# cert
/etc/ssl/private/ssl-cert-snakeoil.key
# key
```

### Generate a pair of certificate and key

#### Install openssh

##### Debian

```bash
sudo apt install openssh
```

##### Arch

```bash
sudo pacman -Sy openssh
```

##### RHEL

```bash
sudo dnf install openssh
```

#### Generate certificate and key

```bash
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/selfsigned.key -out /etc/ssl/certs/selfsigned.crt
```

```text title=certificate
/etc/ssl/certs/selfsigned.crt
```

```text title=key
/etc/ssl/private/selfsigned.key
```

## Let's encrypt

Let's encrypt is a free certificate service.

Please follow the [configuration for let's encrypt](./conf#use-lets-encrypt-for-certificate), then see [letsencrypt](./letsencrypt).
