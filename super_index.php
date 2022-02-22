<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>SuperIndex</title>
</head>

<body>
	<?php
	$scan = scandir("./");
	?>

	<ol style="color: blueviolet;">
		<? foreach ($scan as $val) : ?>
			<? if (stripos($val, ".html")) : ?>
				<li>
					<a style="font-size: 20px; text-decoration: none; color: blueviolet;" target="_blank" href="./<?= $val ?>"><?= $val ?></a>
				</li>
			<? endif ?>
		<? endforeach ?>
	</ol>

</body>

</html>