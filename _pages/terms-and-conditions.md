---
layout: terms
id: terms-and-conditions
permalink: /terms-and-conditions/
nav: false

title: Terms & Conditions
---

<div class="vpad--xxl">
  {% assign competition-terms = site.data.modals | where: "id", "competition-terms" | first %}
  {{competition-terms.content}}
</div>
