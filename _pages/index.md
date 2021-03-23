---
layout: competition
id: competition
nav: true
nav-order: 5
nav-title: Win

title: Compet&shy;ition
long-title: Lorem ipsum dolor sit amet consectetur adipisicing elit.
enter-cta: Enter Now

features:
  - id: section-one
    title: Section One
    description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sed illum fugiat deserunt, tempora excepturi dolor dolorem ipsam temporibus eos maiores aspernatur soluta magnam repellendus! Accusantium, numquam consequatur qui esse aut, sint sunt, obcaecati possimus atque aliquid cum hic!
  - id: section-two
    title: Section Two
    description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sed illum fugiat deserunt, tempora excepturi dolor dolorem ipsam temporibus eos maiores aspernatur soluta magnam repellendus! Accusantium, numquam consequatur qui esse aut, sint sunt, obcaecati possimus atque aliquid cum hic!
  - id: section-three
    title: Section Three
    description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus sed illum fugiat deserunt, tempora excepturi dolor dolorem ipsam temporibus eos maiores aspernatur soluta magnam repellendus! Accusantium, numquam consequatur qui esse aut, sint sunt, obcaecati possimus atque aliquid cum hic!

competition-form:
  id: comp
  post-url: "#getFormUrl"
  expiry-date: 2050-01-01
  fields:
    - id: name
      type: text
      label: Name
      required: true
    - id: email
      type: email
      label: Email
      required: true
    - id: qualify
      type: radio
      label: Are you a UK resident and over the age of 18?
      required: true
      options:
        - id: qualify-true
          label: "Yes"
          value: "yes"
        - id: qualify-false
          label: "No"
          value: "no"
          invalid: true
  submit: Submit Entry
  terms: >
    By submitting your entry, you agree to the <a href="#" class="js-open-modal text--link" data-open-modal="competition-terms">terms and conditions</a> of this competition
---
