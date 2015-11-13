ACC.paymentMethodFormController = function($scope, $timeout, $http) {
	$scope.cardImg = $('.payment-card-container ul li img');
	$scope.ccinfo = {type:undefined}

	$scope.getValue = function(){
		for(var i = 0; i < cardImg.length; i++) {
			$(cardImg[i]).addClass('gray-out-cards');

			// switch($scope.paymentMethodCardNumber){
			// 	case '4321': 
			// 		$('.visa').removeClass('gray-out-cards'); 
			// 		break;
			// 	case '6543':
			// 		$('.mastercard').removeClass('gray-out-cards'); 
			// 		break;
			// 	case '1234':
			// 	{
			// 		$('.maestro').removeClass('gray-out-cards'); 
					
			// 		break;
			// 	}
			// 	case '7890':
			// 		$('.americanexp').removeClass('gray-out-cards');
			// 		break; 
			// 	case '3699':
			// 		$('.discover').removeClass('gray-out-cards'); 
			// 		break;
			// 	case '5678':
			// 		$('.denkort').removeClass('gray-out-cards'); 
			// 		break;

			// }
		}
			
	};
	
};
ACC.paymentMethodFormController.$inject = ['$scope', '$timeout', '$http'];
ACC.tbsApp.controller('paymentMethodForm', ACC.paymentMethodFormController);

ACC.creditCardTypeDirective = function(){
	return {
		require : 'ngModel',
		restrict : 'A',
		link : function(scope, element, attrs, ctrl) {
			
            ctrl.$parsers.unshift(function(value){
              scope.ccinfo.type =
                (/^5[1-5]/.test(value)) ? "mastercard"
                : (/^4/.test(value)) ? "visa"
                : (/^3[47]/.test(value)) ? 'americanexp'
                : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'
                : undefined
              ctrl.$setValidity('invalid',!!scope.ccinfo.type)
              return value
            });	
    	}
	};
};
ACC.creditCardTypeDirective.$inject = [];
ACC.tbsApp.directive('tbsCreditCardType', ACC.creditCardTypeDirective);