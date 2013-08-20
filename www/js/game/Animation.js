define(['tween'], function(tween) {

	function Animation() {

	};

	Animation.prototype = {

		constructor: Animation,

		randomTweens: [],

		test: function(target) {
			console.log('inside animation', this, target);
			var tween = createjs.Tween.get(target/*, {loop:true}*/);
			var w = 960;
            var h = 400;
			console.log('tween ok?', tween)
			tween.to({x:300, y: 300}, 1500).wait(1000).to({x:200}, 2500).call(this.onComplete).start()
		},

		onComplete: function() {
			console.log('the tween completed');
		}


	}



	return Animation;
});