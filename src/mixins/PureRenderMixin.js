/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
var React = require('react/addons')

//backport PureRenderEqual

module.exports = React.addons.PureRenderMixin || {

  shouldComponentUpdate: function(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState);
  }
}


function shallowEqual(objA, objB) {
  var key;

  if (objA === objB) return true;
  
  // Test for A's keys different from B.
  for (key in objA) 
    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key]))
      return false;
     
  // Test for B'a keys missing from A.
  for (key in objB) 
    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) 
      return false;
    
  return true;
}
