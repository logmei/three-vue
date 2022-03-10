
import * as THREE from 'three'
import {camera, scene, renderer,fbxloader,objloader,mixers} from '../base'

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
    fbxloader.load('/models/box.fbx',function(object){
      console.log('box',object)
      // object.position.set(-90,-10,110);
      // object.scale.set(0.01,0.01,0.01)
      // object.rotation.z = 20
      scene.add(object)
      resolve(object)
    })
  })
}

// fish
const fish = () => {
  return new Promise(resolve=>{
    fbxloader.load('/models/fish.fbx',function(object){
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

// test
const test = () => {
  return new Promise(resolve=>{
    fbxloader.load('/models/chahu.fbx',function(object){
      console.log('test',object)
      // object.scale.set(20,20,20)
      // var _obj = new THREE.Object3D()
      // var s = new THREE.BoxGeometry(100,100,100)
      // var m = new THREE.MeshLambertMaterial({color:0xfff000})
      // var mesh = new THREE.Mesh(s,m)
      // // _obj.position.set(25,0,33)
      // _obj.add(mesh)
      // object.position.set(-25,0,33)
      // console.log('_obj',_obj)
      var axis = new THREE.Vector3(1,1,1)
      object.translateOnAxis(axis,50)
      // object.rotateOnAxis(axis,Math.PI/4)
      // object.translate(25,0,33)
      // object.position.z=33
      // object.position.x=25
     
      
      scene.add(object)
      resolve({object:object})
    })
  })
}


export {
  box,
  test,
  fish,
}