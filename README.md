<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->
![Poster](https://i.imgur.com/43oKlKs.jpg)
<!-- Maybe a table of contents here? 📚 -->
# Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  * [Installation](#installation)
  * [First Steps](#first-steps)
- [Features](#features)
- [Data (API)](#data--api-)
  * [What is it?](#what-is-it-)
- [Diagrams](#diagrams)
  * [Actor Diagram](#actor-diagram)
  * [Interaction Diagram](#interaction-diagram)
- [Resources](#resources)
- [License](#license)
- [Disclaimer](#disclaimer)


# Introduction
"Star Wars - a Galactic web app" is a online tool and product made for educational purposes only. It is a project that is part of the web development minor taken in Amsterdam in 2020. The core of the project is to make a single page web application written in vanilla HTML, CSS & JavaScript. Part of the project is to retrieve an API and use it's data.

# Getting Started


## Installation
![Installation](https://i.imgur.com/Ei87J9R.jpg)
Clone this repo and open index.html in your browser

## First Steps
Boot up the website by navigating to [Star Wars Explorer](https://robert-hoekstra.github.io/web-app-from-scratch-1920).

Wait until the application is fully loaded. Note: if the dropdown menu shows no options then the application is not fully loaded. 

When the options are shown. Choose one option to epxlore your first items within that category!

Interact with one of the objects to learn even more about it on the detail page.

# Features
* Navigate through the Swapi.co API.
* Retrieve animated GIFs based on objects from the Swapi.co.
* Routing to enhance single-page web application experience.
* Templating Engine to create sections within a page.


# Data (API)
## Swapi
The API is made available by the people of Swapi. 
Special credits go to: [Paul Hallet](https://phalt.co/?ref=swapi)

The API can be used via the root URL: https://swapi.co/api/
### What is it?
The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!

We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!

## Gliphy
The API for the images is made available by Gliphy.
You can find everything about the API at [Gliphy for Dev's](https://developers.giphy.com/)

### What is it?
Gliphy is a platform that collects and distributes animated gifs for everyone to see and use.
This application gets the first property from the swapi objects and sends it to gliphy. Then the very first image that is found by gliphy is returned and rendered into the DOM. In that way we enrich the Swapi API by adding images!

# Diagrams
Part of the course is to draw diagrams that explain all the modules and functions that are used within the application. Their placement and how the user interact with them. So we end up with two diagrams.
* Actor Diagram
* Resources

## Actor Diagram (updated 28-2-2020)
![actorDiagram (1)](https://user-images.githubusercontent.com/45421908/75520911-e9616800-5a06-11ea-93cf-12dc988f9acd.png)


## Interaction Diagram (updated 28-2-2020)
![interactionDiagramDetail](https://user-images.githubusercontent.com/45421908/75522019-33e3e400-5a09-11ea-83d5-1d8ac4940966.png)



# Resources
[Swapi API](https://swapi.co/)
[Gliphy API](https://developers.giphy.com/)
[Director Routing](https://github.com/flatiron/director)

# Changes
* Renamed modules 
* Renamed functions
* changed all methods to start with lowercase (keeping camelcase)
* Add sorting based on name
* 

# License 
MIT

# Disclaimer
Star Wars and all associated names are copyright Lucasfilm ltd.

This API is open source and carries a BSD licence .

All data has been freely collected from open sources such as Wookiepedia.
