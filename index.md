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
		
		html {
			scroll-behavior: smooth;
		}
    
		body {
			display: flex;
			flex-direction: column;
			font-family: 'Roboto', sans-serif;
			min-height: 100vh;
			font-size: 2vw;
			color: black;
		}
		
		nav {
			display: flex;
			position: fixed;
			flex-direction: column;
			align-items: center;
			left: 5%;
			background-color: white;
			color: black;
			z-index: 3;
			font-size: 2vw;
		}
		
		nav div	{
			width: 100%;
			display: none;
		}
		
		nav button {
			width: 100%;
			cursor: pointer;
			border: none;
			background-color: white;
			color: black;
			font-weight: bold;
			font-size: 2vw;
			padding: 2vh 4vw;
			transition: 1s;
		}
		
		nav:hover button {
			color: white;
			background-color: gray;
		}
		
		nav:hover > div {
			display: flex;
			flex-direction: column;
		}
		
		a {
			padding-top: 10%;
			padding-bottom: 10%;
			text-align: center;
			text-decoration: none;
			transition: 1s;
			color: black;
			background-color: white;
		}
		
		a:hover {
			color: white;
			background-color: grey;
		}
		
		header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 3vw;
			color: white;
			background-image: url("./header.jpg");
			background-attachment: fixed;
			background-size: 100%;
			background-repeat: no-repeat;
			background-position: bottom;
			background-color: black;
			min-height: 100vh;
		}
		
		header > div {
			padding-top: 15%;
			padding-bottom: 15%;
			text-align: center;
			z-index: 2;
		}
		
		#photo {
			position: absolute;
			z-index: 1;
			background-color: black;
			opacity: 0.5;
			width: 100%;
			height: 100%;
		}
		
		#btns > a {
			background-color: white;
			color: black;
			border: none;
			padding: 2vh 4vw;
			cursor: pointer;
			color: black;
			opacity: 0.7;
			border-radius: 1vw;
			font-size: 2vw;
			transition: 1s;
			position: relative;
			top: 4vh;
		}
		
		#btns > a:hover {
			background: gray;
			color: white;
		}
		
		#me {
			flex-direction: column;
			justify-content: center;
			color: black;
			background-color: white;
			min-height: 100vh;
		}
		
		#description {
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		
		#info {
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		
		#info > div {
			flex: 1;
		}
		
		#imgcontent {
			flex: 1;
			display: flex;
		}
		
		#myPhoto {
			flex: 1;
			border-radius: 50%;
			width: 100%;
			padding: 10%;
		}
		
		#about {
			text-align: left;
			flex: 2;
			padding: 5%;
		}
		
		section {
			display: flex;
			border: solid brown;
			justify-content: center;
			align-items: center;
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
			body {
				font-size: 5vw;
			}
			
			nav {
				font-size: 4vw;
			}
			
			nav button {
				padding: 2vh 8vw;
				font-size: 4vw;
			}
			
			header {
				font-size: 4vw;
				background-image: url("./header-mobile.jpg");
				background-attachment: fixed;
				background-size: auto 100%;
				background-repeat: no-repeat;
			}
			
			#btns > a {
				position: relative;
				top: 4vh;
				font-size: 4vw;
				padding: 2vh 4vw;
				border-radius: 3vw;
			}
			
			#me {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: black;
				background-color: white;
				min-height: 100vh;
			}
			
			#description	{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
			}
			
			#imgcontent {
				flex: 1;
			}
			
			#myPhoto {
				border-radius: 50%;
				width: 80%;
			}
			
			#about {
				text-align: left;
				flex: 2;
			}
			
			footer {
				font-size: 2vw;
			}
		}
    
    </style>
    
  </head>

  <body>
  
	<nav>
	
		<button>MENU</button>
		<div>
			<a href="#">Home</a>
			<a href="#me">About Me</a>
			<a href="#education">Education</a>
			<a href="#work">Experience</a>
			<a href="#other">More</a>
		</div>
		
	</nav>
  
    <header>
	
		<div id="photo"></div>
		<div>
			<h5>Hello, World.</h5>
			<h1>I'm Mateusz Moczarski</h1>
			<h3>Student of Software Engineering</h3>
			<div id="btns">
				<a href="#me">Read more</a>
				<a href="./CV.pdf">My resume</a>
			</div>
		</div>
      
    </header>

    <section id="me">
    
		<div id="description">
			<div id="imgcontent">
				<img src="./me.jpg" id="myPhoto">
			</div>
			<div id="about">
				<h1>About me</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ut.
				</p>
			</div>
		</div>
		<div id="info">
			<div>
				article 1
			</div>
			<div>
				article 2
			</div>
		</div>
      
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
