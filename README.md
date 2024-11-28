# Bird API

[View Live API Data](https://bird-api-hdc8.onrender.com/api/birds)

## How It's Made:
This is an Express API for birds, listing their Latin name, order, family, and an image of the bird. This is a very simple API that I built to learn how to build and host an API for [#100devs](https://100devs.org/about).

### Tech Used:
- Javascript
- node.js
- Express

## Optimizations
It needs more birds. I will be learning more MongoDB soon so instead of manually entering the data into an API, I will store the data in a database but will likely leave this API live for reference to an API built with a static object.

## Lessons Learned
I learned about using the cors module so that I could write client-side code and have access to the API in my application with the data stored on a cloud server.

I also learned about the <code>express.static</code> method which serves up all the files in a folder automatically. Best practice is to put all the files in a top-level folder called "/public".

## Related Projects
Here is a very simple web application that accesses the Bird API:
https://heidifryzell.com/what-bird/
