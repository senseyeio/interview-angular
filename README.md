# Interview Exercise

## Instructions

This exercise is a pair-programming session with you leading and us here to support you.

Please run through the tasks below and be as vocal as you can during this 30 minute session. Don't worry about getting through all of the tasks or how long you spend on each. The tasks are there to guide you and prompt conversation, so that we can get a feel for how you solve problems and think about code. 

Feel free to ask questions or Google things at any point.

## Tasks

1. Checkout the repo, install dependencies with `npm` or `yarn` and run up the app (http://localhost:4200)


2. Update the `ServerList` component so that it shows a "card" for each server
- The `ApiService` is already in place and provides some fake data to show
- For each server, show the `name` and `description`.


3. For each server card, show a visual indication of the _status_ of that server
- Servers can be "up" or "down", represented by the `isUp` boolean
- It is up to you how you choose to present this


4. Show the uptime on the server card
- If the server has been up for less than one day, show "Up for < 1 day"
- Otherwise, show "Up for n days", with n rounded to an integer
- There is no need to worry about showing fractions, or weeks/months/years etc.


5. In the `OverviewPage` component, break apart the "all servers" list into two separate lists.
- The first should have the title "Attention Needed" and be filtered to show only servers which are currently down
- The second should have the title "Active Servers" and be filtered to show only servers which are up
