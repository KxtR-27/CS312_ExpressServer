# Express server

###### Kat R. | CS 312 - Back-End Development for Multiplatform Applications

A Node.js server using Express in the backend. This project is developed over time for successive/iterative assignments.

## Installation

Only a dev environment exists (for now?), so...
1. Clone the repository
2. Run `npm i` in a terminal
3. To run the server normally, run `node server.js`
4. To monitor the server and restart it automatically when the code changes instead, run `npm run dev` *<sub>(or `nodemon server.js`)</sub>*

## Notes

- The script `npm run dev` uses Nodemon to reload the server every time the source code changes.
  This is equivalent to running `nodemon server.js`.  
  <sub><i>It goes without saying that this would be a bad idea for a larger server because restart times would be killer. Regardless, I'm saying it anyway.</i></sub>
- The `package.json` is structured/ordered to match the [npm docs](https://docs.npmjs.com/cli/v11/configuring-npm/package-json).
