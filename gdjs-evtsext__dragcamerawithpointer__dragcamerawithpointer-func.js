
if (typeof gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer !== "undefined") {
  gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer = {};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceX")) > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceX"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceX")) > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceX"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollTargetX")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollStartX"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollTargetX")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollStartX"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceY")) > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceY"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceY")) > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollDistanceY"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollTargetY")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollStartY"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollTargetY")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollStartY"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("scrollTargetX").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().get("scrollTargetY").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().get("X").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollTargetX")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollStartX")));
}{runtimeScene.getScene().getVariables().get("Y").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollTargetY")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("scrollStartY")));
}{runtimeScene.getScene().getVariables().get("scrollDistanceX").setNumber(Math.sqrt(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("X")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("X"))));
}{runtimeScene.getScene().getVariables().get("scrollDistanceY").setNumber(Math.sqrt(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Y")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Y"))));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("selected_direction")) == "horizontal";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("selected_direction")) == "both";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("selected_direction")) == "vertical";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("selected_direction")) == "both";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9988836);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("scrollStartX").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().get("scrollStartY").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("selected_direction").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func = function(runtimeScene, CamNumber, CamLayer, Direction, parentEventsFunctionContext) {
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
if (argName === "CamNumber") return CamNumber;
if (argName === "CamLayer") return CamLayer;
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList8(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks = [];