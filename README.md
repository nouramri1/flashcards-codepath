# Web Development Project 2 - Invention Flashcards

Submitted by: **Nour Amri**

This web app: **A flashcard study tool about inventions & inventors. Users type a guess before the card flips to reveal the answer, and can navigate through the deck in order with Previous/Next buttons**

Time spent: **2 hrs** in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [x] Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  - [x] Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - [x] Both the next and back buttons have a visual indication at the beginning/end of the list (grayed out & disabled), not allowing wrap-around navigation

The following **optional** features are implemented:

- [ ] Users can use a shuffle button to randomize the order of the cards
  - [ ] Cards remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - [ ] Cards change to a random sequence once the shuffle button is clicked
- [ ] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - [ ] Answers considered correct even if they partially match (e.g., case-insensitive, punctuation-insensitive, last-name matches)
- [ ] A counter displays the user’s current and longest streak of correct responses
  - [ ] Current counter increments on correct guess, resets on incorrect guess
  - [ ] Longest streak updates if current streak exceeds previous longest
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - [ ] User can mark a card as mastered
  - [ ] Mastered cards are removed from the active pool and added to a mastered list

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/eanUhdT.gif' width='' alt='Video Walkthrough' />
https://i.imgur.com/eanUhdT.gif

GIF created with KAP


