
if (typeof gdjs.evtsExt__Isometry__ScreenY !== "undefined") {
  gdjs.evtsExt__Isometry__ScreenY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Isometry__ScreenY = {};


gdjs.evtsExt__Isometry__ScreenY.userFunc0x97a990 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const x = eventsFunctionContext.getArgument("worldX");
const y = eventsFunctionContext.getArgument("worldY");
const z = eventsFunctionContext.getArgument("worldZ");
const angle = eventsFunctionContext.getArgument("angle");

const a = Math.asin(Math.tan(angle * Math.PI / 180));
eventsFunctionContext.returnValue =  (x + y) * Math.sin(a) * Math.sqrt(2) / 2 - Math.cos(a) * z;
};
gdjs.evtsExt__Isometry__ScreenY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Isometry__ScreenY.userFunc0x97a990(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Isometry__ScreenY.func = function(runtimeScene, worldX, worldY, worldZ, angle, parentEventsFunctionContext) {
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
if (argName === "worldX") return worldX;
if (argName === "worldY") return worldY;
if (argName === "worldZ") return worldZ;
if (argName === "angle") return angle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Isometry__ScreenY.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Isometry__ScreenY.registeredGdjsCallbacks = [];