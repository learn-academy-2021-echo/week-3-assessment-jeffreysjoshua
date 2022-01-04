# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: "This" in JavaScript is a way to refer to a key within an object. You can place "this" before a ".(key name)", and use it to manipulate the value of the key within the object, or to call state/setstate in a react app.

  Researched answer: I found that "this" can be within a method, and it refers to the object that holds that method. I also found that "this" can be called alone or within a function, in which case "this" would refer to a golbal object. If i run '(this === global)' in an ide, I get "true".



2. What is React? Why would you use it?

  Your answer: React is a JavaScript framework, which links together individual React components to create webpages and apps. It is used because it allows for the quick build of webpages. It is also beneficial to use React because you can reuse the components that you create.

  Researched answer: In addition to the definition above, I also found that React is used because it allows for the DOM to be easily changed based on user interaction. I found that these benefits are in large part do to the way React does DOM manipulations. By using the virtual DOM, React is able to limit the amount of real DOM manipulations, and only change the elements on a webpage that need to be changed. React is mainly used for the purposes of making interactive user interface, more so than for purposes of managing data.



3. Which lifecycle method is required in a React class component?

  Your answer: The required lifecycle method is Render(). I do not remember exactly why but I remember hearing this lol.

  Researched answer: Render is the only lifecycle method required, and it sends the output HTML to the DOM. When a component gets updated, it is the Render method that is called to make sure the DOM gets the new HTML changes. Render does not interact with the browser or modify the component state, but it returns either: a react element, an array or fragment of elements, portals, strings, numbers, bools, or null.



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is a type of syntax, used in React, to return multiple "things" at once. Since a React component can only return one "thing" at a time, by wrapping multiple "things" in a JSX tag, you can return them all in between the JSX tags. It almost seems like a built in method, to push the elements within the JSX tag into an array, and just return the single array (my random thought lol). The difference between HTML and JSX, is that you don't write HTML in JavaScript files, you use JSX.

  Researched answer: I also found that JSX is JavaScript and XML mixed together, to allow for the rendering of HTML to the DOM. A technology called "Webpack" converts the JSX into HTML and JavaScript for the browser to read; therefor, HTML is a language understood by the browser whereas JSX needs to be translated before anything actually happens on the webpage. You can also write JavaScript directly into JSX by placing it in: {}, opposed to HTML where you need to use a script tag. HTML attributes must also be written in camelCase, when using JSX (ex. onclick vs onClick).



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a command used to create and open a react app. It imports the needed dependencies to create a "shell" react app. When yarn is ran, all files saved on the React application are ran, and any changes made since the previous save are changed in the application.

  Researched answer: I found that yarn is a package manager that was created by FB as an alternative to the npm package manager. It allows you to still access npm dependencies but is more efficient.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: I really don't know, but if I had to make an educated guess, I'd say that an "anonymous function" is a function that does not have a definition- which is what would make it anonymous..

  Researched answer: Ah my researched answer is pretty close! I also found that an AF cannot be used after its creation because it doesn't have a name and therefor cannot be called. However, you can assign an AF to a variable and use that variable later.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: This allows you to render different outputs depending on conditions met. So it's basically a conditional statement for an app.

2. Props: Props gives us the ability to pass down methods and data from one component to a nested component.

3. JavaScript Events: An HTML event is when something changes on the web browser for the user, so a JavaScript event seems to be the code that changes when an HTML event takes place.

4. Object-oriented programming: OOP is a type of programing where devs use/ manipulate objects rather than manipulating functions and logic. This makes it easier to maintain large and complex applications.

5. Ruby: Ruby is a type of OPP language that is opened sourced. It is famous for having easy readability. I also read that Ruby allows the user to change the way the language itself works, although not exactly sure what that means.
