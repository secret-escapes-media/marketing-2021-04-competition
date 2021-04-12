---
layout: competition
id: competition
nav: true
nav-order: 5

title: Gewinnen Sie einen Sommer in der Mittelmeer-Sonne!
enter-cta: Teilnehmen

intro-title: Sie gewinnen sonst doch nichts? Das könnte sich flugs ändern!

features:
  - id: kos-diamond-deluxe-hotel
    title: Wird es griechischer Glamour auf Kos?
    description: Entspannen Sie sich 5 Nächte lang in ägäischer Sonne im 5* Adults-only Boutique-Hotel auf Kos. Genießen Sie die Halbpension, Begrüßungsgetränke, Ermäßigungen auf das À-la-carte-Menü und auf Spa-Behandlungen. Ein rundum gelungener Sommer auf griechische Art.
  - id: south-tyrol-mons-silva-chalet
    title: Wird es Bergidylle in Südtirol samt Chalet?
    description: Nicht ganz am Mittelmeer, doch mitten im italienischen Bergzauber sind diese Chalets im Ratschingstal. Mit Vollpension ist für Sie gesorgt und in Ihrem eigenen Chalet dürfen Sie all dem Raum und Freiheit genießen, die Sie brauchen. Noch mehr Freiheit wartet nur in den Bergen Südtirols.
  - id: croatia-aminess-port-nine
    title: Werden es die See- und Hafenpanoramen in Kroatien?
    description: Reif für die Insel? Keine geringere als die kroatische Insel Korčula in Süddalmatien wird für 5 Nächte Ihre Sonnenheimat. Lassen Sie sich im Infinity-Pool treiben und beobachten Sie das Kommen und Gehen der Schiffe, bevor Sie sich in Ihre Junior-Suite zurückziehen. Inklusive Halbpension und einer Flasche Wein.
  - id: france-la-begude-saint-pierre
    title: Werden Sie sich in Südfrankreich verwöhnen lassen?
    description: Genussvoll leben ist die Devise des letzten Gewinnerdeals. Drei Nächte lang machen Sie Halt im Landsitz zwischen Nîmes und Avignon, in Nähe des UNESCO-Welterbes Pont du Gard und kosten die Aromen Südfrankreichs (Frühstück inklusive). Ob Sie sich die Zeit mit einem Buch am Außenpool vertreiben oder die Gegend und Avignon erkunden, ist Ihnen überlassen.

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
    - id: newsletter
      type: checkbox
      label: Secret Escapes Limited würde Sie gerne über andere Angebote, Aktionen und Dienstleistungen informieren, die Sie interessieren könnten. Bitte geben Sie an, falls Sie unseren Newsletter erhalten möchten. Für weitere Informationen können Sie unsere Datenschutz- und Cookie-Richtlinie konsultieren
      options:
        - id: newsletter-yes
          label: "Ja"
          value: "yes"
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
