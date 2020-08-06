<html lang="en">

  <head>
  
    <meta charset="UTF-8">
    <meta name="description" content="My personal website">
    <meta name="keywords" content="Mateusz, Moczarski, developer, programmer, IT">
    <meta name="author" content="Mateusz Moczarski">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MoczarskiDev</title>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    
    <style>
	
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
    
		body {
			display: flex;
			flex-direction: column;
			font-family: 'Roboto', sans-serif;
			min-height: 100vh;
		}
		
		nav {
			display: flex;
			position: fixed;
			flex-direction: column;
			align-items: center;
			left: 5%;
			min-width: 9vw;
			font-weight: bold;
			transition: 1s;
			background-color: white;
			color: black;
		}
		
		nav > div {
			padding: 20%;
			width: 100%;
			text-align: center;
			transition: 1s;
			background-color: white;
			color: black;
		}
		
		ul {
			display: none;
			width: 100%;
			flex-direction: column;
			list-style-type: none;
		}
		
		nav > div:hover + ul {
			display: flex;
		}
		
		ul:hover {
			display: flex;
		}
		
		nav > div:hover	{
			color: white;
			background-color: grey;
		}
		
		a {
			padding-top: 10%;
			padding-bottom: 10%;
			display: flex;
			justify-content: center;
			text-align: center;
			text-decoration: none;
			transition: 1s;
			color: black;
		}
		
		a:hover {
			color: white;
			background-color: grey;
		}
		
		header {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 3vw;
			color: white;
			background-color: black;
			min-height: 100vh;
		}
		
		header > div {
			padding-top: 15%;
			padding-bottom: 15%;
			text-align: center;
		}
		
		section {
			flex: 1;
			display: flex;
			border: solid brown;
			justify-content: center;
			align-items: center;
			height: 100vh;
			color: white;
			background-color: black;
			min-height: 100vh;
		}
		
		footer {
			padding: 1%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1vw;
			color: white;
			background-color: black;			
		}
		
		@media screen and (max-width: 600px) {
			nav {
				min-width: 30vw;
			}
			
			header {
				min-height: 40vh;
				font-size: 4vw;
			}
			
			footer {
				font-size: 2vw;
			}
		}
    
    </style>
    
  </head>

  <body>
  
	<nav>
	
		<div>MENU</div>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#me">About Me</a></li>
			<li><a href="#education">Education</a></li>
			<li><a href="#work">Experience</a></li>
			<li><a href="#other">More</a></li>
		</ul>
		
	</nav>
  
    <header>
		
		<div>
			<h5>Hello, World.</h5>
			<h1>I'm Mateusz Moczarski</h1>
			<h3>Student of Software Engineering</h3>
		</div>
      
    </header>

    <section id="me">
    
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
      
    </section>
	
	<section id="education">
    
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
      
    </section>
	
	<section id="work">
    
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
      
    </section>
	
	<section id="other">
    
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
      
    </section>

    <footer>
	
      <div>
		MOCZARSCY@GMAIL.COM &#169; 2020
	  </div>
	  
    </footer>
	
  </body>

</html>
