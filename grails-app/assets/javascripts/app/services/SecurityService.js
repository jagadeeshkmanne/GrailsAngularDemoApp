app.factory('SecurityService', function ($cookieStore) {
    var factory ={};

    factory.setLoggedInUser = function(user) {
        $cookieStore.put('user', user)
    }

    factory.getLoggedInUser = function() {
        return $cookieStore.get('user')
    }

    factory.isLoggedIn = function(){
        return $cookieStore.get('user')!= null
    }

    return factory;
})