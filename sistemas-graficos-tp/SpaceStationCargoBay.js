function SpaceStationCargoBay(trayectoryBuffer, profileBuffer) {				
	SupBarrido.call(this, trayectoryBuffer, profileBuffer,"textures/mosaicos.jpg", 3);
}

SpaceStationCargoBay.prototype = Object.create(SupBarrido.prototype);
SpaceStationCargoBay.prototype.constructor = SpaceStationCargoBay;

