
import * as THREE from 'three'
import {camera, scene, renderer,loader} from '../base'



// box
const box = () => {
  loader.load('/models/box.fbx',function(object){
    console.log('box',object)
    object.position.set(30,0,0);
    object.scale.set(0.01,0.01,0.01)
    scene.add(object)
  })
}

// test
const test = () => {
  return new Promise(resolve=>{
    loader.load('/models/test.fbx',function(object){
      // console.log('test',object)
      // object.position.set(-90,-10,110);
      object.scale.set(20,20,20)
      // object.rotation.z = 20
      scene.add(object)
      resolve(object)
    })
  })
}

export {
  box,
  test
}