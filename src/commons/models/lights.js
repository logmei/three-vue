import * as THREE from 'three'
import { DoubleSide } from 'three';
import {scene} from '../base'

// 平行光投影
const shadow_directtion = ()=>{
  const geometry = new THREE.BoxGeometry(40,100,40);
  const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff
  })
  const mesh = new THREE.Mesh(geometry,material)
  scene.add(mesh)

  // 设置产生投影的网格模型
  mesh.castShadow = true

  // 创建一个平面几何体作为投影面
  const planeGeometry = new THREE.PlaneGeometry(300,200)
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0x999999,
    side:DoubleSide
  })
  // 平面网格模型作为投影面
  const planeMesh = new THREE.Mesh(planeGeometry,planeMaterial);
  scene.add(planeMesh)
  planeMesh.rotateX(-Math.PI/2)
  planeMesh.position.y = -50;
  // 设置接收阴影投影面
  planeMesh.receiveShadow = true;

  //方向光
  const directionalLight = new THREE.DirectionalLight(0xffffff,1);
  //设置光源位置
  directionalLight.position.set(80,100,40);
  scene.add(directionalLight)
  //设置用于计算阴影光源对象
  directionalLight.castShadow = true
  // 设置计算阴影的区域，最好刚好紧密包围在对象周围
  // 计算阴影的区域过大：模糊  过小：看不到或显示不完整
  directionalLight.shadow.camera.near = 0.5
  directionalLight.shadow.camera.far = 300
  directionalLight.shadow.camera.left = -50
  directionalLight.shadow.camera.right = 50
  directionalLight.shadow.camera.top = 200;
  directionalLight.shadow.camera.bottom = -100
  // 设置mapSize属性可以使阴影更清晰，不那么模糊
  // directionalLight.shadow.mapSize.set(1024,1024)

}

// 聚光光源
const shadow_spotlight = ()=>{
  const geometry = new THREE.BoxGeometry(40,100,40);
  const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff
  })
  const mesh = new THREE.Mesh(geometry,material)
  scene.add(mesh)

  // 设置产生投影的网格模型
  mesh.castShadow = true

  // 创建一个平面几何体作为投影面
  const planeGeometry = new THREE.PlaneGeometry(300,200)
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0x999999,
    side:DoubleSide
  })
  // 平面网格模型作为投影面
  const planeMesh = new THREE.Mesh(planeGeometry,planeMaterial);
  scene.add(planeMesh)
  planeMesh.rotateX(-Math.PI/2)
  planeMesh.position.y = -50;
  // 设置接收阴影投影面
  planeMesh.receiveShadow = true;

  //聚光光源
  const spotLight = new THREE.SpotLight(0xffffff,1);
  //设置光源位置
  spotLight.position.set(80,100,40);
   //设置聚光光源发散角度
  spotLight.angle = Math.PI/6
  scene.add(spotLight)
 
  //设置用于计算阴影光源对象
  spotLight.castShadow = true
  // 设置计算阴影的区域，最好刚好紧密包围在对象周围
  // 计算阴影的区域过大：模糊  过小：看不到或显示不完整
  spotLight.shadow.camera.near = 0.5
  spotLight.shadow.camera.far = 300
  spotLight.shadow.camera.fov = 20
  // 设置mapSize属性可以使阴影更清晰，不那么模糊
  // directionalLight.shadow.mapSize.set(1024,1024)

}



export {
  shadow_directtion,
  shadow_spotlight
}