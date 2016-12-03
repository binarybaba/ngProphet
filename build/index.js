angular.module('ngProphet', [])
    .directive('message', function(){
        return {
            restrict:'E',
            transclude:true,
            template:'<ul class="prophet"></ul>',
            link: function(scope, elem, attrs, ctrl){
                console.info("Directive working");
                console.dir(scope, elem, attrs);
            }
        }

    })