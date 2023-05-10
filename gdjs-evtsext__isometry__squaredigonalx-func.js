
if (typeof gdjs.evtsExt__Isometry__SquareDigonalX !== "undefined") {
  gdjs.evtsExt__Isometry__SquareDigonalX.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Isometry__SquareDigonalX = {};


gdjs.evtsExt__Isometry__SquareDigonalX.userFunc0x9751b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const squareSize = eventsFunctionContext.getArgument("squareSize");

eventsFunctionContext.returnValue = Math.sqrt(2) * squareSize;
};
gdjs.evtsExt__Isometry__SquareDigonalX.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Isometry__SquareDigonalX.userFunc0x9751b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Isometry__SquareDigonalX.func = function(runtimeScene, squareSize, angle, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "squareSize") return squareSize;
if (argName === "angle") return angle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Isometry__SquareDigonalX.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Isometry__SquareDigonalX.registeredGdjsCallbacks = [];