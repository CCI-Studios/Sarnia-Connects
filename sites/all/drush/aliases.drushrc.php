<?php

$aliases['dev'] = array(
	'uri'=> 'sarniaconnects.ccistaging.com',
	'root' => '/home/staging/subdomains/sarniaconnects/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
);

$aliases['live'] = array(
	'uri'=> 'sarniaconnects.com',
	'root' => '/home/sarniaconnects/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'sarniaconnects',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	)
);
