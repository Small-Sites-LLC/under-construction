# Small Sites Temporary Page

A reusable under-construction page for domains managed by Small Sites LLC.

The page automatically displays the current domain name and provides a contact link while the full website is being developed.

## Files

* `index.html` — page structure
* `styles.css` — page styling and responsive layout
* `script.js` — domain detection and automatic copyright year
* `LICENSE` — usage and ownership terms

## Deployment

Place the files in the website directory served by Nginx, such as:

```text
/var/www/under-construction
```

Then set the domain's Nginx configuration to:

```nginx
root /var/www/under-construction;
index index.html;
```

Test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## License

Copyright © 2026 Small Sites LLC. All rights reserved.

See the `LICENSE` file for complete terms.
