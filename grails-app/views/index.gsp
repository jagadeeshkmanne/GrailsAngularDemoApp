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

        <asset:stylesheet href="lib/bootstrap/css/bootstrap.min.css"/>
        <asset:stylesheet href="custom.css"/>

        <asset:javascript src="lib/jquery.js"/>
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
        <asset:javascript src="lib/angular/angular.min.js"/>
        <asset:javascript src="lib/angular/angular-route.min.js"/>
        <asset:javascript src="lib/angular/angular-animate.min.js"/>
        <asset:javascript src="lib/angular/angular-cookies.min.js"/>

        <asset:javascript src="app/app.js"/>
        <asset:javascript src="app/services/FlashService.js"/>
        <asset:javascript src="app/services/UserService.js"/>
        <asset:javascript src="app/services/ContactService.js"/>
        <asset:javascript src="app/services/AuthService.js"/>
        <asset:javascript src="app/services/SecurityService.js"/>

        <asset:javascript src="app/controllers/AppContextController.js"/>
        <asset:javascript src="app/controllers/BaseController.js"/>
        <asset:javascript src="app/controllers/UserController.js"/>
        <asset:javascript src="app/controllers/ContactController.js"/>
        <asset:javascript src="app/controllers/AuthController.js"/>
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
