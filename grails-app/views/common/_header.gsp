<div class="panel-heading" ng-controller="AuthController">
	<div class="row panel-title">
		<div class="col-md-4">Welcome {{getLoggedInUser().username}}</div>
		%{--<div class="col-md-4">
			<div class="input-group input-group-sm">
			  <span class="input-group-addon"><span class="glyphicon glyphicon-search"></span></span>
			  <input type="text" class="form-control" placeholder="Search Contact">
			</div>
		</div>--}%
		<div class="col-md-4 pull-right" ng-show="isLoggedIn()">
			<button type="button" class="btn btn-default btn-sm pull-right" ng-click='logout()'>
				<span class="glyphicon glyphicon-lock"></span>
				Logout
			</button>
		</div>
	</div>
</div>
