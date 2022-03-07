
import * as THREE from 'three'
import {camera, scene, renderer,loader,mixers} from '../base'

function changePivot(x,y,z,obj){
  let wrapper = new THREE.Object3D();
  wrapper.position.set(x,y,z);
  wrapper.add(obj);
  obj.position.set(-x,-y,-z);
  return wrapper;
}

// box
const box = () => {

  return new Promise(resolve=>{
    loader.load('/models/aa.fbx',function(object){
      console.log('box',object)
      // object.position.set(-90,-10,110);
      // object.scale.set(0.01,0.01,0.01)
      // object.rotation.z = 20
      scene.add(object)
      resolve(object)
    })
  })
}

// test
const test = () => {
  return new Promise(resolve=>{
    loader.load('/models/aa.fbx',function(object){
      console.log('test',object)
      // object.position.set(-90,-10,110);
      // object.scale.set(20,20,20)
      object.mixer = new THREE.AnimationMixer(object);
      mixers.push(object.mixer);

      var action = object.mixer.clipAction(object.animations[0]);
      scene.add(object)
      resolve({object,action})
    })
  })
}

export {
  box,
  test
}