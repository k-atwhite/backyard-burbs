<p align="center"><img width=60% src="https://user-images.githubusercontent.com/49215782/127746872-aead2385-e6c6-46c9-881f-30eb6c764694.png"></p>

## Project Overview

  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
  
  
Backyard Burbs is our "Stretch Tech Challenge" in Mod 3 of Turing School's Frontend program. We had the opportunity to choose a new technology to self-study and implement. Based on personal interest and suggestions from our mentors we chose to learn Context - a Global State Management tool. Along with hooks, context is a powerful tool to simplify how data is passed to nested components. 

We soon found that our app was not complicated enough to warrant using context for our essential data management. However! It is a powerful tool to simplify creating a light and dark theme that persists across all components. We called our theme Goldfinch/Bluejay and we hope you enjoy the charming chirp when you toggle your theme!

The app itself is designed to be a fun and colorful tool for children to begin identifying the birds in their backyard. You begin on a page showing a map of the USA. Please choose your state and then you will be guided to a list of the birds in your area. Simply click on the bird you believe you see, and you'll find more details such as: more images, the scientific name, the last time that bird was seen, and how many were seen. Click the binoculars and add that bird to your own list!
A few design considerations we prioritized were: simplicity, large and responsive buttons, and color.

## [View Our App Here!](https://k-atwhite.github.io/backyard-burbs/)

<p align="center"><img src=https://media.giphy.com/media/64fhy6Uz6XfwsHCwAp/giphy.gif ></p>

<p align="center"><img src=https://user-images.githubusercontent.com/49215782/127909136-09a5da19-feb6-4ce6-b99b-15444d30a19b.png
 ></p>
<p align="center"><img src=https://user-images.githubusercontent.com/49215782/127909140-3a314a29-deff-43b7-9f96-c7182a13cc3f.png

<br>

 
## Table of Contents

- [Contributors](https://github.com/k-atwhite/backyard-burbs#contributors)
- [Learning Goals](https://github.com/k-atwhite/backyard-burbs#learning-goals)
- [How to use the app](https://github.com/k-atwhite/backyard-burbs#app-setup)
- [Future Additions](https://github.com/k-atwhite/backyard-burbs#future-additions--reflections)
 
## Contributors
<table>
  <tr>
    <td align="center" > <a href="https://github.com/sydnerd">Sydney Bear</td>
    <td align="center"> <a href="https://github.com/lkessell">Lauren Kessell</td>
    <td align="center"> <a href="https://github.com/k-atwhite">Kat White</td>
  </tr>
    <td><img src="https://avatars.githubusercontent.com/u/78241098?v=4" alt='Sydney GH image' width="150" height="auto" /></td>
    <td><img src="https://avatars.githubusercontent.com/u/77205456?v=4" alt="Lauren GH image" width="150" height="auto" /></td>
    <td><img src="https://avatars.githubusercontent.com/u/49215782?v=4" alt="Kat GH image" width="150" height="auto" /></td>
</table>

### Special Thanks to:
- Becca Phillips for designing our burb logo
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/) for our chirp audio
- Flaticon for the cute binoculars


## Learning Goals

- Practice using React and Router
- Practice writing DRY code by reusing components
- Practice User Experience Testing with Cypress
- Get our of our comfort zone and self-teach a new technology
- Practice using Context with Hooks to simplify our data model


## App Setup

In the new Terminal window, run the following commands:


`git clone git@github.com:k-atwhite/backyard-burbs.git`  
`cd backyard-burbs`  
`npm install`  
`npm start`  

Open a window in your web browser of choice, and visit `localhost:3000` to view the app!

## Future Additions & Reflections

There are so many ways to improve this site. Some major priorities include:

1. A bespoke splash screen!
2. More robust search criteria, including: size of bird, color of bird, exact location.
3. More details for each bird - will need a third API for this.
4. Bird songs attached to each Bird Detail page.
5. An ability for users to upload their own photo.
