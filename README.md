# KarutaSRS
Rails and Ember spaced repetition system for memorizing the Ogura Hyakunin Isshu or the one hundred poets/poems used in kyogi karuta.

## To-Do List
- ☑️ Grabber card component
  - ☑️ Highlight grabber key characters based on state (learning: blue, review correct: lime green, review incorrect: light red)
  - ☑️ Fade in characters when character is added (for typing answers in review)
- ❌ Lesson component
  - ☑️ Info grid (poem info and grabber card)
    - ☑️ First verse
    - ☑️ Kimariji
    - ☑️ Second verse key characters
    - ❌ Reading audio
    - ❌ Poem background info
- ☑️ Lesson carousel component
  - ☑️ Sliding lesson components
  - ☑️ Lesson selector component
    - ☑️ Indicate complete lesson
    - ☑️ Show button to lesson review when complete
- ❌ Review component
  - ☑️ Hiragana input below grabber
  - ❌ Play reading audio for grabber reviews
  - ☑️ Randomize review queue
    - ☑️ User's overall queue should be split into segments to ensure related items are fairly close together
      - ☑️ Each review queue segment should be a continuous 20 items for 10 poems (i.e. grabber and kimariji for each poem)
      - ☑️ After an item leaves the queue (due to correct answer), another poem from the total queue should be added to the segment
      - ☑️ Repeat until total queue is empty or user ends the session
    - ☑️ A review consists of a kimariji review and a grabber review
    - ☑️ Each review portion should also be randomized
  - ☑️ Prompt for kimariji
    - ☑️ Show complete grabber card (but no highlighting)
    - ☑️ Kimariji portion of review is complete if entered characters exactly match kimariji
  - ☑️ Prompt for grabber key characters
    - ☑️ Empty grabber card that fills out (or removes) characters as the user types their answer
    - ☑️ Highlight right/wrong characters after user presses enter
    - ☑️ Grabber portion of review is complete as long as key characters are correct (even if other characters are wrong)
  - ☑️ Track when review is complete
    - ☑️ For lesson reviews, create a learned item when the review is complete
    - ☑️ For regular reviews, post the number of wrong answers to API to update the learned item
