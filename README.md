# Cofactr Sandwich Shop Interview App

**This is not a take home!** You are in no way obligated or expected to spend time on this prior to your interview time. You are however completely welcome to review anything you like about this interview prior to starting your interview. We only send this early for candidates who are bothered by not knowing what they will be getting into. Open transparency about our process is totally fine with us. This is not a test though.. we will not care if you open this for the first time during your interview!

## Explanation
This is a React app that has been built with intentional errors and generally pretty poor design choices. It's your job to review the code in this repository, and make as much of a positive impact on the app as a whole as you can during the course of the interview. Bear in mind that there is _much more_ wrong with this app than can be completely resolved within the span of the interview, your prioritization and triage skills to make the biggest impact is part of the interview. There is however no approach that is off limits, feel free to tackle bug fixes, code hygiene, refactoring, re-design, UX, optimization, etc. We just ask that you pick things that you believe have the biggest net benefit for the immediate and/or future needs of the app (and not _just_ what you think would be easy, bang for buck is what we want to see!). To start things off though, we have a specific feature request we would like to see get done, then after that the time is yours to finish anything else you can to improve the app.

**NOTE:** Commenting your code is highly recommended! The changes that you make throughout this interview are going to be reviewed by the Cofactr hiring team.

**Feature Request:** Before anything else, our interviewer will provide you with a specific feature to implement for this app. During this section feel free to take note of and even write comments for changes you'd like to make but do not get too distracted with a desire to start refactoring until the requested task is complete. As soon as the feature as been implemented to at least working condition, the time is then yours. Please commit these changes to a branch called `feature-request` before moving onward!

**Self Driven Upgrades:** For your convenience, a very easy spot to start would be any of the **Known Issues** included within this README. You are completely welcome to come up with your own changes that you might make if you inherited this app as well though. No extra points for going off the list or staying on the list, it's just a guide. You are also completely welcome to discuss potential changes with your interviewer to get ideas of how to attack this dumpster fire. When you are finished with the time allotted you can commit the code changes you have to a branch and push to the remote origin. If during this time you notice things you want to change but don't consider it high enough priority or too large a task to do during the interview you can feel free to make write comment in the code about what you would like to fix and how you _would_ fix it. When you are done commit all your self driven changes to a new branch (you can branch off of `feature-request`) called `self-driven`.

**Framework:** As you work on this app please note the **Technologies** list we have included in this README and as you determine best practices to use please adhere to the technologies of the app. As in, try not to change the whole architecture, stay in the bounds of whats (poorly) implemented. React, MUI, Typescript, etc. Even if you think changing or upgrading these things would be the best upgrade for the app. **You are completely welcome and encouraged to check documentation online** for any of these technologies or google / stack overflow for how to remember how to write anything during the interview! We all do it, this interview is not intended to test you on arbitrary framework memorization.

**Submission:** When you are done follow instructions **Submission** section of this README or ask your interviewer for instructions on how to best submit your work. We hope this is a fun, effective, and practical interview question that closely resembles "a day in the life" of a front-end coder. We would however love any feed back you may have about this interview format at the end of the interview!

## Documentation
[API documentation](https://github.com/Cofactr/sandwich-shop)

## Setup

```bash

npm install

npm start

```

## Known Issues

- [**UX**] Hitting "Enter" key on the create sandwich form doesn't do anything.

- [**BUG**] Updating "Notes" on the sandwich view, then refreshing, changes "Name" for some reason!?

- [**UX**] Double clicking (accidentally) Submit on the Sandwich Form creates duplicate sandwiches

- [**DESIGN**] Theme palette properties on Line: 9 of `src/theme/index.ts` don't seem to be being used as expected. (Not seeing colors: `#366`, `#cff` or `#def` anywhere in the app)

- [**DESIGN**] The Sandwich List and Form get really skinny and unusable on Mobile

- [**UX**] A non-existant sandwichId will just load forever. Example: http://localhost:3000/doodle-bug never loads or indicates a 404.

- [**BUG**] "Flush" Feature (top right refresh icon in header) is supposed to clear all sandwiches, which seems to work but page requires a refresh after clicking to see the updates.
  

## Technologies

- Typescript v3

- React v16

- Material UI v4

- Redux v4

- Axios

- Lodash


## Submission

When you are done:
1. Add and commit all changes you've made to the correct branches listed above.
2. Delete node_modules folder
3. Compress or zip the working directory (we want to maintain the .git folder in what you are submitting)
4. Upload your zipped project file [here](https://www.dropbox.com/request/NqUNBsA6LVlmnMztyoaQ).

---

### BELOW IS FOR COFACTR INTERVIEWER
(No need to read further if you are taking this interview currently)
Just check the Interview notes on Notion: [Interview Preamble](https://www.notion.so/React-Sample-App-Interview-daf931222f194d649b90ad1564d845bc)
