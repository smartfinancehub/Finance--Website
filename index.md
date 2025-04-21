---
title: Home
layout: default
---
# Welcome to Finance Hub

We dey bring you better finance tips with Pidgin vibe!

- [Portfolio](/portfolio/)
- [Example Portfolio Item](/portfolio/example/)

## Portfolio Items
{% for item in site.portfolio %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
