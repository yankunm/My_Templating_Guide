# Yankun's Templating Guide

If you have used any social media app like Facebook or Instagram, you might have noticed that the layout of my user profile is the same to yours. Very often, different pages within the same website have the **same layout**, just slightly **different content**.

e.g. Different youtube videos have different number of views and stuff, but the same layout.

## What is Templating?

**Templating** is when you define a **preset layout** for a webpage, that we can **dynamically modify its content on-the-fly**.

There are many **templating engines** or *templating languages* we can use to make dynamic webpages, some examples are *[handlebars](https://handlebarsjs.com/)*, *[jade](https://jade-lang.com/)*, *[pug](https://pugjs.org/api/getting-started.html)*, *[nunjucks](https://mozilla.github.io/nunjucks/)*, and the one I will be covering in this guide is **EJS**, which stands for Embedded JavaScript.

[EJS link](https://ejs.co/)

Note: Before you proceed reading you need to know how Express Servers work, where you can checkout my *Express Guide*

## EJS Basics

EJS is "advanced html".

First install *ejs* using *npm*:
```
npm i ejs
```

To incorporate EJS with an Express App, you have to include the line:
```
app.set("view engine", "ejs");
```

### The Views Directory

By default, for any **express app**, when we use a view engine then the app will assume the templates will exist in the **views** directory.

As best practice, to be able to invoke app from any directory and for the app being able to find the views folder from its directory and not `cwd`, you should specify the path:
```
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
```

After you specify this path, you should be able to run app from any directory and not get a `Failed to lookup view <ejs> in views directory` error.

### EJS Syntax

#### Tags

* `<%=` Output value
* ``

#### Passing Data

Templates should have **as little logic** as possible. Templates should be stupid, they should only display.

To pass things to templates, you can use the res.render function:
```
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { rand: num });
})
```
Here, I am passing a JS Object as parameter to ejs.








