<html ng-app="app" ng-controller="AppContextController">
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="${resource(dir: 'lib/bootstrap/css', file: 'bootstrap.min.css')}" rel="stylesheet">
		<link href="${resource(dir: 'css', file: 'custom.css')}" rel="stylesheet">
        <script src="${resource(dir: 'lib', file: 'jquery.js')}"></script>
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<script src="${resource(dir: 'lib/angular', file: 'angular.min.js')}"></script>
        <script src="${resource(dir: 'lib/angular', file: 'angular-route.min.js')}"></script>
        <script src="${resource(dir: 'lib/angular', file: 'angular-animate.min.js')}"></script>
        <script src="${resource(dir: 'lib/angular', file: 'angular-cookies.min.js')}"></script>
		<script src="${resource(dir: 'app', file: 'app.js')}"></script>
        <script src="${resource(dir: 'app/services', file: 'FlashService.js')}"></script>
		<script src="${resource(dir: 'app/services', file: 'UserService.js')}"></script>
        <script src="${resource(dir: 'app/services', file: 'ContactService.js')}"></script>
        <script src="${resource(dir: 'app/services', file: 'AuthService.js')}"></script>
        <script src="${resource(dir: 'app/services', file: 'SecurityService.js')}"></script>
        <script src="${resource(dir: 'app/controllers', file: 'AppContextController.js')}"></script>
        <script src="${resource(dir: 'app/controllers', file: 'BaseController.js')}"></script>
        <script src="${resource(dir: 'app/controllers', file: 'UserController.js')}"></script>
		<script src="${resource(dir: 'app/controllers', file: 'ContactController.js')}"></script>
        <script src="${resource(dir: 'app/controllers', file: 'AuthController.js')}"></script>
	</head>
	<body>
		<div class="container">
			<div class="panel panel-default">
				<g:render template="/common/header"/>
				<ng-view></ng-view>
				<g:render template="/common/footer"/>
			</div>
		</div>
	</body>
</html>
