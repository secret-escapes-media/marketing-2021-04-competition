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
      label: E-Mail
      required: true
    - id: qualify
      type: radio
      label: Sind Sie deutscher Staatsbürger und über 21 Jahre alt?
      required: true
      options:
        - id: qualify-true
          label: "Ja"
          value: "yes"
        - id: qualify-false
          label: "Nein"
          value: "no"
          invalid: true
  submit: Absenden
  terms: >
    Wenn Sie Ihre Daten einsenden, erklären Sie sich gleichzeitig mit <a href="#" class="js-open-modal text--link" data-open-modal="competition-terms">unseren AGB zum Gewinnspiel</a> einverstanden.
---
