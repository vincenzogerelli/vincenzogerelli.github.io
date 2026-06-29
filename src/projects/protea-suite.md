---
order: 1
title: Protea Suite
anno: 2026
ruolo: Developer
sommario: A multi-app suite built for iSchoolAfrica to digitalize data collection and skill assessments across schools in South Africa.
links:
  - label: "iSchool Africa website →"
    url: https://www.ischoolafrica.com/
immagine: /img/proteasuite.png
tech:
  - swift
  - swiftui
  - html
  - css
  - js
  - filemaker
---

### Description

Protea Suite is a set of apps developed for iSchoolAfrica, an NGO that brings technology and teacher training to schools across South Africa. The organisation needed a standardised data collection system to measure the impact of its programmes since previously, data was collected on paper or scattered spreadsheets, often incomplete or lost.

The suite is composed of four apps. Calyx, an ipad app, lets teachers log app sessions in the classrooms. Corolla, a macOS app, is the central hub where Programme Managers manage all entities (schools, teachers, programmes, etc.) and visualise the data collected across the suite, with filtering and .csv export. Leaf, a web app built on FileMaker, collects feedback and survey data from teachers receiving training.

Corolla also includes a test creation system: programme managers can build skill assessment tests with multiple question types, attach images, tag skills, and publish them to a central database. These tests then appear on Seedling, an iPad app designed for children aged 5 to 14, including non-readers and first-time screen users, where learners complete assessments directly on device. Results sync back to Corolla as structured data, sorted by school, programme, and skill.

The entire suite was designed offline-first: many partner schools have no stable internet connection, so an online-only test simply wouldn't work. On Calyx and Seedling, everything runs on device. Sessions and results are saved locally and sync automatically when connectivity returns. Corolla, used by Programme Managers in the office, is the only app that requires a connection.

The system was validated on-site in Johannesburg in March 2026, across three schools. Around 100 learners completed assessments on Seedling independently, including students at St. Vincent School for the Deaf, where the visual approach worked beyond the audience it was originally designed for.

<ul class="project-images">
  <li><img class="zoomable" src="/img/protea-meeting.png" alt="Working session with iSchoolAfrica's Programme Managers in Johannesburg"></li>
  <li><img class="zoomable" src="/img/protea-testing.jpg" alt="Students testing Seedling at St. Vincent School for the Deaf in Johannesburg"></li>
</ul>