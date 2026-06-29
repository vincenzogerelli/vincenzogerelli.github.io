---
order: 3
title: "Alight!"
anno: 2025
ruolo: Lead Developer
sommario: A home communication system for individuals with hearing impairments, using HomeKit to integrate smart lighting for visual alerts and real-time notifications.
links:
  - label: "View on App Store →"
    url: https://apps.apple.com/us/app/alight-home-communication/id6742818084
immagine: /img/alight.png
tech:
  - swift
  - swiftui
  - homekit
  - accessibility
---

### Description

Alight! uses HomeKit-compatible smart lights to help deaf and hard-of-hearing people communicate at home. The idea behind is simple: you assign a color to a message, tap a button, and the lights flash that color for 20 seconds before going back to normal. Red could mean "someone's at the door" and blue could mean "dinner's ready", whatever makes sense for the household. You can create your own way of communicating.

Thanks to the AppIntents framework, alerts can also be triggered through Siri, widgets, or the device's action button, so you don't even need to open the app. We're also planning to ship a companion Apple Watch app for quick access from the wrist.

The interface was built with accessibility in mind: VoiceOver, Dynamic Type, and haptic feedback are fully supported, and buttons use shapes alongside colors so they work for people with color vision deficiencies too.
