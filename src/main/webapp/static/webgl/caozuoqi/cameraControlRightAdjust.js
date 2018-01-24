/**
 * 地下模式相机控制
 */
function cameraControl(myviewer) {
	var scene = myviewer.scene;
	var canvas = myviewer.canvas;
	scene._screenSpaceCameraController.enableCollisionDetection =false;
	canvas.setAttribute('tabindex', '0'); // needed to put focus on the canvas
	canvas.onclick = function() {
		canvas.focus();
	};
	var ellipsoid = scene.globe.ellipsoid;
	var startMousePosition;
	var mousePosition;
	var flags = {
			leftLooking : false,
			looking : false,
	};
	
	var handler = new Freedo.ScreenSpaceEventHandler(canvas);
	
	handler.setInputAction(function(movement) {
		movement*=0.1;
		myviewer.camera.zoomIn(movement)
	}, Freedo.ScreenSpaceEventType.WHEEL);
	
	handler.setInputAction(function(movement) {
		flags.looking = true;
		mousePosition = startMousePosition = Freedo.Cartesian3.clone(movement.position);
	}, Freedo.ScreenSpaceEventType.RIGHT_DOWN);
	
	handler.setInputAction(function(movement) {
		flags.leftLooking = true;
		mousePosition = startMousePosition = Freedo.Cartesian3.clone(movement.position);
	}, Freedo.ScreenSpaceEventType.LEFT_DOWN);
	
	handler.setInputAction(function(movement) {
		mousePosition = movement.endPosition;
	}, Freedo.ScreenSpaceEventType.MOUSE_MOVE);
	
	handler.setInputAction(function(position) {
		flags.leftLooking = false;
	}, Freedo.ScreenSpaceEventType.LEFT_UP);
	
	handler.setInputAction(function(position) {
		flags.looking = false;
	}, Freedo.ScreenSpaceEventType.RIGHT_UP);
	
	
	myviewer.clock.onTick.addEventListener(function(clock) {
		var camera = myviewer.camera;
		var cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
		if(cameraHeight<0){
			scene.screenSpaceCameraController.enableRotate = false;
			scene.screenSpaceCameraController.enableTranslate = false;
			scene.screenSpaceCameraController.enableZoom = false;
			scene.screenSpaceCameraController.enableTilt = false;
			scene.screenSpaceCameraController.enableLook = false;
			var width = canvas.clientWidth;
			var height = canvas.clientHeight;
			
			if (flags.looking) {
				// Coordinate (0.0, 0.0) will be where the mouse was clicked.
				var x = (mousePosition.x - startMousePosition.x) / width;
				var y = -(mousePosition.y - startMousePosition.y) / height;
				
				var lookFactor = 0.05;
				camera.lookLeft(x * lookFactor);
			}
			
			if (flags.leftLooking) {
				// Coordinate (0.0, 0.0) will be where the mouse was clicked.
				var x = (mousePosition.x - startMousePosition.x) / width;
				var y = (mousePosition.y - startMousePosition.y) / height;
				
				var lookFactor = 10.0;
				camera.moveUp(y * lookFactor);
				camera.moveLeft(x * lookFactor);
			}
		}else{
			scene.screenSpaceCameraController.enableRotate = true;
			scene.screenSpaceCameraController.enableTranslate = true;
			scene.screenSpaceCameraController.enableZoom = true;
			scene.screenSpaceCameraController.enableTilt = true;
			scene.screenSpaceCameraController.enableLook = true;
		}
	});
}