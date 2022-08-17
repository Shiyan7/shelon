<html>
	<head>
		<title>Страницы проекта</title>
		<?php
			echo '<meta name="viewport" content="width=device-width">
				<style>
				body{padding:40px;font-size:18px;background:none;}
				p{margin:15px;padding:0;}
				a{text-decoration:none;font-size: 20px;transition: 0.2s;}a:hover{text-decoration:underline}
				</style>';
		?>
	</head>

	<body>
		<?php
			$dir = './';
			 
			$f = scandir($dir);
			 
			foreach ($f as $file){
			    if(preg_match('/\.(html)/', $file)){
			        echo '<p><a href="'.$file.'">'.$file.'</a></p>';
			    }
			}
		?>
	</body>
</html>