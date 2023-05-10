
gdjs.evtsExt__LinkTools__LinkPathFinding = gdjs.evtsExt__LinkTools__LinkPathFinding || {};

/**
 * Behavior generated from Link path finding
 */
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding = class LinkPathFinding extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Acceleration = behaviorData.Acceleration !== undefined ? behaviorData.Acceleration : Number("400") || 0;
    this._behaviorData.SpeedMax = behaviorData.SpeedMax !== undefined ? behaviorData.SpeedMax : Number("200") || 0;
    this._behaviorData.Rotate = behaviorData.Rotate !== undefined ? behaviorData.Rotate : true;
    this._behaviorData.RotationSpeed = behaviorData.RotationSpeed !== undefined ? behaviorData.RotationSpeed : Number("180") || 0;
    this._behaviorData.AngleOffset = behaviorData.AngleOffset !== undefined ? behaviorData.AngleOffset : Number("0") || 0;
    this._behaviorData.isOnPath = false;
    this._behaviorData.NextNodeIndex = Number("") || 0;
    this._behaviorData.NextNodeX = Number("") || 0;
    this._behaviorData.NextNodeY = Number("") || 0;
    this._behaviorData.Speed = Number("") || 0;
    this._behaviorData.IsAtNode = false;
    this._behaviorData.NextNodeAngle = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Acceleration !== newBehaviorData.Acceleration)
      this._behaviorData.Acceleration = newBehaviorData.Acceleration;
    if (oldBehaviorData.SpeedMax !== newBehaviorData.SpeedMax)
      this._behaviorData.SpeedMax = newBehaviorData.SpeedMax;
    if (oldBehaviorData.Rotate !== newBehaviorData.Rotate)
      this._behaviorData.Rotate = newBehaviorData.Rotate;
    if (oldBehaviorData.RotationSpeed !== newBehaviorData.RotationSpeed)
      this._behaviorData.RotationSpeed = newBehaviorData.RotationSpeed;
    if (oldBehaviorData.AngleOffset !== newBehaviorData.AngleOffset)
      this._behaviorData.AngleOffset = newBehaviorData.AngleOffset;
    if (oldBehaviorData.isOnPath !== newBehaviorData.isOnPath)
      this._behaviorData.isOnPath = newBehaviorData.isOnPath;
    if (oldBehaviorData.NextNodeIndex !== newBehaviorData.NextNodeIndex)
      this._behaviorData.NextNodeIndex = newBehaviorData.NextNodeIndex;
    if (oldBehaviorData.NextNodeX !== newBehaviorData.NextNodeX)
      this._behaviorData.NextNodeX = newBehaviorData.NextNodeX;
    if (oldBehaviorData.NextNodeY !== newBehaviorData.NextNodeY)
      this._behaviorData.NextNodeY = newBehaviorData.NextNodeY;
    if (oldBehaviorData.Speed !== newBehaviorData.Speed)
      this._behaviorData.Speed = newBehaviorData.Speed;
    if (oldBehaviorData.IsAtNode !== newBehaviorData.IsAtNode)
      this._behaviorData.IsAtNode = newBehaviorData.IsAtNode;
    if (oldBehaviorData.NextNodeAngle !== newBehaviorData.NextNodeAngle)
      this._behaviorData.NextNodeAngle = newBehaviorData.NextNodeAngle;

    return true;
  }

  // Properties:
  
  _getAcceleration() {
    return this._behaviorData.Acceleration !== undefined ? this._behaviorData.Acceleration : Number("400") || 0;
  }
  _setAcceleration(newValue) {
    this._behaviorData.Acceleration = newValue;
  }
  _getSpeedMax() {
    return this._behaviorData.SpeedMax !== undefined ? this._behaviorData.SpeedMax : Number("200") || 0;
  }
  _setSpeedMax(newValue) {
    this._behaviorData.SpeedMax = newValue;
  }
  _getRotate() {
    return this._behaviorData.Rotate !== undefined ? this._behaviorData.Rotate : true;
  }
  _setRotate(newValue) {
    this._behaviorData.Rotate = newValue;
  }
  _toggleRotate() {
    this._setRotate(!this._getRotate());
  }
  _getRotationSpeed() {
    return this._behaviorData.RotationSpeed !== undefined ? this._behaviorData.RotationSpeed : Number("180") || 0;
  }
  _setRotationSpeed(newValue) {
    this._behaviorData.RotationSpeed = newValue;
  }
  _getAngleOffset() {
    return this._behaviorData.AngleOffset !== undefined ? this._behaviorData.AngleOffset : Number("0") || 0;
  }
  _setAngleOffset(newValue) {
    this._behaviorData.AngleOffset = newValue;
  }
  _getisOnPath() {
    return this._behaviorData.isOnPath !== undefined ? this._behaviorData.isOnPath : false;
  }
  _setisOnPath(newValue) {
    this._behaviorData.isOnPath = newValue;
  }
  _toggleisOnPath() {
    this._setisOnPath(!this._getisOnPath());
  }
  _getNextNodeIndex() {
    return this._behaviorData.NextNodeIndex !== undefined ? this._behaviorData.NextNodeIndex : Number("") || 0;
  }
  _setNextNodeIndex(newValue) {
    this._behaviorData.NextNodeIndex = newValue;
  }
  _getNextNodeX() {
    return this._behaviorData.NextNodeX !== undefined ? this._behaviorData.NextNodeX : Number("") || 0;
  }
  _setNextNodeX(newValue) {
    this._behaviorData.NextNodeX = newValue;
  }
  _getNextNodeY() {
    return this._behaviorData.NextNodeY !== undefined ? this._behaviorData.NextNodeY : Number("") || 0;
  }
  _setNextNodeY(newValue) {
    this._behaviorData.NextNodeY = newValue;
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
  _getIsAtNode() {
    return this._behaviorData.IsAtNode !== undefined ? this._behaviorData.IsAtNode : false;
  }
  _setIsAtNode(newValue) {
    this._behaviorData.IsAtNode = newValue;
  }
  _toggleIsAtNode() {
    this._setIsAtNode(!this._getIsAtNode());
  }
  _getNextNodeAngle() {
    return this._behaviorData.NextNodeAngle !== undefined ? this._behaviorData.NextNodeAngle : Number("") || 0;
  }
  _setNextNodeAngle(newValue) {
    this._behaviorData.NextNodeAngle = newValue;
  }
}

/**
 * Shared data generated from Link path finding
 */
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.SharedData = class LinkPathFindingSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._LinkTools_LinkPathFindingSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._LinkTools_LinkPathFindingSharedData = new gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.SharedData(
      initialData
    );
  }
  return instanceContainer._LinkTools_LinkPathFindingSharedData;
}

// Methods:
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() > (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedMax()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getSqDistanceToPosition((( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeX()), (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeY()))) > (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForceTowardPosition((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeX()), (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeY()), (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsAtNode(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getSqDistanceToPosition((( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeX()), (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeY()))) <= (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].setPosition((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeX()),(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeY()));
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsAtNode(true);
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetNextNode((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeIndex()) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle() != (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeAngle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].rotateTowardAngle((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeAngle()), (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeed()), runtimeScene);
}
}}

}


};gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getisOnPath() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed() + ((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects2= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDCrossableObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDCrossableObjectObjects2= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDDestinationObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDDestinationObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.userFunc0x949f58 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/**
 * Insert a node in an array sorted by farest 1st
 * @param {gdjs.RuntimeObject[]} objects
 * @param {gdjs.RuntimeObject} object
 */
const insertOpenNode = function (objects, object)
{
    let leftIndex = 0;
    let rightIndex = objects.length;
    while (leftIndex < rightIndex)
    {
        const medianIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (objects[medianIndex].linktoolsWeightSum < object.linktoolsWeightSum)
            rightIndex = medianIndex;
        else
            leftIndex = medianIndex + 1;
    }
    objects.splice(rightIndex, 0, object);
};

const pickedObjects = eventsFunctionContext.getObjects("CrossableObject");
const targetObjects = eventsFunctionContext.getObjects("DestinationObject");
const costClass = eventsFunctionContext.getArgument("CostClass").toString();

for (const object of objects)
{
    let pickedSomething = false;
    /** @type {gdjs.LinksManager} */
    const manager = gdjs.LinksManager.getManager(runtimeScene);
    for (const pickedObject of pickedObjects)
    {
        pickedObject.pick = false;
    }
    // mark every instance that can be reached through links
    // openObjects is the new discovered instances where links must be checked
    let openObjects = targetObjects.slice();
    for (const openObject of openObjects)
    {
        openObject.linktoolsWeightSum = 0;
        openObject.linktoolsPreviousNode = null;
    }
    let objectFound = false;
    while (openObjects.length !== 0 && !objectFound)
    {
        const openObject = openObjects.pop();
        const linktoolsWeightSum = openObject.linktoolsWeightSum;
        /** @type {Array<gdjs.RuntimeObject>} */
        const linkedObjects = manager.getObjectsLinkedWith(openObject);
        for (const linkedObject of linkedObjects)
        {
            objectFound = linkedObject === object;
            // don't check one instance twice
            // and it must be in the set given by the caller
            if ((!linkedObject.pick && pickedObjects.includes(linkedObject)) || objectFound)
            {
                let isCrossable = objectFound;
                if (!objectFound)
                {
                    let newWeightSum = 0;
                    if (costClass.length === 0)
                    {
                        isCrossable = true;
                        newWeightSum = linktoolsWeightSum + 1;
                    }
                    else
                    {
                        const costVariable = linkedObject.getVariables().get("linktools_Cost");
                        isCrossable = costVariable.hasChild(costClass);
                        if (isCrossable)
                        {
                            const cost = linkedObject.getVariableNumber(costVariable.getChild(costClass));
                            newWeightSum = linktoolsWeightSum + cost;
                        }
                    }
                    if (isCrossable)
                    {
                        linkedObject.pick = true;
                        linkedObject.linktoolsWeightSum = newWeightSum;
                        insertOpenNode(openObjects, linkedObject);
                    }
                }
                if (isCrossable)
                {
                    linkedObject.linktoolsPreviousNode = openObject;
                    pickedSomething = true;
                }
            }
        }
    }
    
    const variables = object.getVariables();
    let pathVariable;
    if (variables.has("__linktools_Path"))
    {
        pathVariable = variables.get("__linktools_Path");
    }
    else
    {
        pathVariable = new gdjs.Variable({type: "structure"})
        variables.add("__linktools_Path", pathVariable);
    }
    pathVariable.clearChildren();
    if (objectFound)
    {
        // build the path in the path variable
        let pathObject = object;
        let index = 0;
        while (pathObject.linktoolsPreviousNode !== null)
        {
            const previousX = pathObject.getX();
            const previousY = pathObject.getY();
            pathObject = pathObject.linktoolsPreviousNode;
            if (pathObject.getX() !== previousX
             || pathObject.getY() !== previousY)
            {
                const positionVariable = new gdjs.Variable({type: "structure"});
                positionVariable.addChild("x", new gdjs.Variable({value: pathObject.getX(), type: "number"}));
                positionVariable.addChild("y", new gdjs.Variable({value: pathObject.getY(), type: "number"}));
                pathVariable.addChild(index, positionVariable);

                index++;
            }
        }
    }
    for (const pickedObject of pickedObjects)
    {
        pickedObject.pick = false;
    }
    eventsFunctionContext.returnValue = objectFound;
}
};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1);
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.userFunc0x949f58(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1[i].variableChildExists(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1[i].getVariables().get("__linktools_Path"), "0") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisOnPath(true);
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0);
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetNextNode(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveTo = function(CrossableObject, DestinationObject, CostClass, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "CrossableObject": CrossableObject
, "DestinationObject": DestinationObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "CrossableObject": gdjs.objectsListsToArray(CrossableObject)
, "DestinationObject": gdjs.objectsListsToArray(DestinationObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "CostClass") return CostClass;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDCrossableObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDCrossableObjectObjects2.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDDestinationObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.GDDestinationObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.MoveToContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsAtNode() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNode = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedNodeContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisOnPath(false);
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsAtNode(false);
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1[i].getVariables().get("__linktools_Path"));
}
}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPath = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.ForgetPathContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextNodeIndex((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Index")) || 0 : 0));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeIndex() == (gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getVariables().get("__linktools_Path"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setisOnPath(false);
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(0);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeIndex() < (gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getVariables().get("__linktools_Path"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextNodeX((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getVariables().get("__linktools_Path").getChild((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeIndex())).getChild("x"))));
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextNodeY((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getVariables().get("__linktools_Path").getChild((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeIndex())).getChild("y"))));
}
}{for(var i = 0, len = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextNodeAngle(gdjs.evtTools.common.mod(gdjs.evtTools.common.angleBetweenPositions((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getX()), (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getY()), (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeX()), (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeY())) + (gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleOffset()), 360));
}
}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNode = function(Index, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Index") return Index;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SetNextNodeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getisOnPath() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMoving = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.IsMovingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path"))) > 0);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFound = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.PathFoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).HasReachedNode((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeIndex() == (gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1[i].getVariables().get("__linktools_Path"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1[k] = gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestination = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.HasReachedDestinationContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.Speed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.SpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path"))); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCount = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeCountContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NodeIndex")) || 0 : 0)).getChild("x"))); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeX = function(NodeIndex, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "NodeIndex") return NodeIndex;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NodeIndex")) || 0 : 0)).getChild("y"))); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeY = function(NodeIndex, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "NodeIndex") return NodeIndex;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NodeYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeIndex()); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndex = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeIndexContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeX()); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextNodeY()); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.NextNodeYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path").getChild((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path"))) - 1).getChild("x"))); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext = {};
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects2= [];


gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path").getChild((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects1[0].getVariables()).get("__linktools_Path"))) - 1).getChild("y"))); }}}

}


};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding.prototype.DestinationYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("LinkTools::LinkPathFinding", gdjs.evtsExt__LinkTools__LinkPathFinding.LinkPathFinding);
