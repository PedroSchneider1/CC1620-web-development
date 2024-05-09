# WebDev
<p>
  Web Development projects made in university (HTML, CSS, JavaScript, Node.js, MongoDb)
  
  To see all the pages made in this project, it is necessary to install some previous node.js modules.
  Follow the instructions below and you should be able to navigate freely between pages.
  
  Before using the following commands, it is necessary to install node.js:
  ```
  npm install node
  ```
  
  Now you should be able to install its modules.<br>
  Use this command on your terminal to install the "express" module:
  ```
  npm install express
  ```
  
  Use this command on your terminal to install the "ejs" module:
  ```
  npm install ejs
  ```
  
  Use this command on your terminal to install the "mongodb" module (notice the use of the 4.12 version):
  ```
  npm install mongodb@4.12
  ```
</p>
<br>
<h2>Att 1 - Site model</h2>
<p>
  <ul>
    <b>HTML</b>: Make two HTML pages ('Home.html', 'Project.html')
    <li>All pages must have a menu (with links) that allows the navigation between them.</li>
    <li>All pages must have an title (with 'h' tag)</li>
    <li>The 'Project.html' page must have a table with two columns (Nome do projeto (Project's name) & Link do projeto (Project's link))<br>Obs: This table will contain the following projects</li>
  </ul>
  <ul>
    <b>CSS</b>: Add some styling to the page
    <li>Use css rules (classes, id and tags)</li>
    <li>Use pseudo-classes (like hover)</li>
  </ul>
</p>
<br>
<h2>Att 2 - Copying a Model</h2>
<p>
   <ul>
    <b>HTML</b>: Update your site ('Copy.html')
    <li>Add a row in the table ‘Projetos.html’ with the name ‘Copiando um modelo’ ('Copying a model') and the link to the new page</li>
    <li>Create a new page ('Copy.html') and recreate the skeleton of the page 'referencia.jpeg' with the infos available in 'info.txt'</li>
  </ul>
  <ul>
    <b>CSS</b>: Try to copy the model in the most faithful way
    <li>Background color</li>
    <li>Paragraph fonts and colors</li>
    <li>Elements positioning on the top</li>
    <li>Elements positioning on the middle</li>
    <li>Elements postioning on the bottom</li>
  </ul>
</p>
<br>
<h2>Att 3 - Guessing game</h2>
<p>
  <ul>
    <b>HTML</b>: Update your site ('guess.html')
    <li>Add a row in the table ‘Projetos.html’ with the name ‘Adivinhação’ ('Guessing') and the link to the new page</li>
    <li>Create a new page ('guess.html') to do the following: the user enter a number between 0 and 99 and try to guess a random generated number</li>
    <li>Use the 'input' tag to receive the user's number</li>
  </ul>
  <ul>
    <b>CSS</b>: Apply some rules to the page
    <li>Background color</li>
    <li>Elements centering</li>
  </ul>
  <ul>
    <b>JavaScript</b>: Apply coding to the page
    <li>Use 'Math.random()' to generate random number (0 inclusive - 1 exclusive)</li>
    <li>Use 'Math.floor(x)' to return the lowest integer number from 'x'</li>
    <li>Use the 'if' statement to see if the input value is higher, equal or lower than the number generated</li>
    <li>Use 'document.getElementById("ID_DO_ELEMENTO").style.setProperty("background-color", "red");' to set the background color to red if the user guesses a wrong number</li>
  </ul>
</p>
<br>
<h2>Att 4 - Intro to Canvas</h2>
<p>
  <ul>
    <b>HTML</b>: Update your site ('Canvas.html')
    <li>Add a row in the table ‘Projetos.html’ with the name ‘Canvas’ and the link to the new page</li>
    <li>Create a new page ('Canvas.html') and set the canvas with size 300x300 using the 'canvas' tag</li>
  </ul>
  <ul>
    <b>CSS</b>: Apply some rules to the page
    <li>Background color</li>
    <li>Elements centering</li>
  </ul>
  <ul>
    <b>JavaScript</b>: Draw the elements as the example given
    <li>Use a single function to generate each shape (each function draw the shape one time in the position stated by the parameters passed to it)</li>
    <li>Use the functions to remake the example</li>
  </ul>
</p>
<br>
<h2>Att 5 - Animation with Canvas</h2>
<p>
  <ul>
    <b>HTML</b>: Update your site ('Animation.html')
    <li>Add a row in the table ‘Projetos.html’ with the name ‘Animação’ ('Animation') and the link to the new page</li>
    <li>Create a new page ('Animation.html') and set the canvas with size 300x300 using the 'canvas' tag</li>
  </ul>
  <ul>
    <b>CSS</b>: Apply some rules to the page
    <li>Background color</li>
    <li>Elements centering</li>
  </ul>
  <ul>
    <b>JavaScript</b>: Apply coding to the page
    <li>Using JS, make a red square follow the mouse pointer</li>
    <li>The square must be contained within the canvas size and should never leave it</li>
  </ul>
</p>
<br>
<h2>Att 6 - Static Server</h2>
<p>
  <ul>
    <b>Node.js</b>: Create a web server using 'Express' package
    <li>Your server must work using the port '80'</li>
    <li>Add all your pages to the server</li>
  </ul>
</p>
<br>
<h2>Att 7 - Server - Get, Post and Template</h2>
<p>
  <ul>
    <b>HTML</b>: Update your site ('Login.html')
    <li>Add a row in the table ‘Projetos.html’ with the name 'Get - Post - Template' and the link to the new page (login)</li>
    <li>Create two new pages ('Cadastro.html' and 'Login.html') to make a simple login web application</li>
  </ul>
  <ul>
    <b>CSS</b>: Apply some rules to the page
    <li>Background color</li>
    <li>Elements centering</li>
  </ul>
  <ul>
    <b>Node.js</b>: Develop a web login system
    <li>The default server address ('/') must redirect to the projects page</li>
    <li>'Cadastro.html' is accessed with the '/cadastra' request</li>
    <li>'Login.html' is accessed with the '/login' request</li>
  </ul>
  <ul>
    <b>EJS</b>: Develop a dynamic page
    <li>The site must have a dynamic page ('resposta.ejs') that returns the login status</li>
  </ul>
</p>
<br>
<h2>Att 8 - Data Base - Create and Read</h2>
<p>
  <ul>
    <b>HTML</b>: Update your site ('/blog')
    <li>Add a row in the table ‘Projetos.html’ with the name 'Blog' and the link to the new page</li>
    <li>Create a page to register new posts to the blog ('criarPost.html')</li>
  </ul>
  <ul>
    <b>CSS</b>: Apply some styling to the page
    <li>Background color</li>
    <li>Elements centering</li>
  </ul>
  <ul>
    <b>JavaScript</b>: Connect the pages to the DB
    <li>Create the server requests to the database ('/blog', '/criacao_posts', '/pagina_projects')</li>
  </ul>
  <ul>
    <b>EJS</b>: Develop the main blog page
    <li>Receive the posts from the DB and shows on the page</li>
  </ul>
</p>
<br>
<h2>Att 9 - Data Base - Update and Delete</h2>
<p>
    <ul>
    <b>JavaScript</b>: Update the 'Get - Post - Template' project
    <li>Add '/atualizar_usario' (Update) and '/remover_usuario' (Delete) requests to the database</li>
  </ul>
</p>
<br>
<h2>Att 10 - Shop Web Application</h2>
<p>
    Create a simple web application to a car shop.<br>
    The focus here is to use all the concepts used before in one single project.<br>
    <ul>
      <b>Requirements</b>:
      <li>User login and register to access the car list</li>
      <li>Two schemas on the DB:</li>
      <ul>
        <b>Users</b>:
        <li>Name</li>
        <li>Login</li>
        <li>Password</li>
      </ul>
      And
      <ul>
        <b>Cars</b>:
        <li>Brand</li>
        <li>Model</li>
        <li>Year</li>
        <li>Quantity</li>
      </ul>
    </ul>
    <ul>
      <b>Pages</b>:
      <li>User registration</li>
      <li>User login</li>
      <li>Available cars listing</li>
      <li>Cars management page (use login 'admin' and password 'admin' to access it)</li>
      <ul>
        <li>Register new car</li>
        <li>Remove car</li>
        <li>Update car</li>
      </ul>
      <li>Sell car button</li>
      <ul>
        <li>When clicked, the car quantity on the DB is decremented by one</li>
        <li>Show the message 'Esgotado!' ('Sold out!') when the car amount is zero</li>
      </ul>
    </ul>
</p>
