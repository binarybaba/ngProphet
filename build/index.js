angular.module('ngProphet', [])
    .provider('$message', function $messageProvider(){
        var val = true;
        return {
            setVal: function(b){ val = !!b; },
            getVal : function () { return val; },
            $get: function($document){
                return {
                    doStuff: function (text){
                        console.log("Doing stuff from the provider", text, val);
                        console.log($document.find('ul')[0]);
                    }
                }

            }
        }
    })
    .directive('message', function(){
        return {
            restrict:'E',
            template:'<ul class="prophet"></ul>',
            link: function(scope, elem, attrs, ctrl){
                console.info("Directive working");
            }
        }
    })
    .run(function(){
        console.log("Run block");
    })
