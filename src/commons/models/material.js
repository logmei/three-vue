import * as THREE from 'three'
import { DoubleSide } from 'three';
import {scene} from '../base'

const basicMaterial = ()=>{
  var geometry = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
  var vertices = new Float32Array( [
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
  
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,
    -1.0, -1.0,  1.0
  ] );

  geometry.setAttribute('position',new THREE.BufferAttribute(vertices,3))

  var material = new THREE.MeshBasicMaterial({color:0xff0000,side:THREE.DoubleSide});
  var mesh = new THREE.Mesh(geometry,material)
  scene.add(mesh)
}
// 点材质  点模型对象
const pointMaterial = ()=>{
  var geometry = new THREE.SphereGeometry(100,25,25);
  // 创建材质
  var material = new THREE.PointsMaterial({
    color:0x0000ff,
    size: 3
  })
  // 点模型对象  参数：几何体 点材质
  var mesh = new THREE.Points(geometry,material)
  scene.add(mesh)
}

const lineMaterial = ()=>{
  const geometry = new THREE.SphereGeometry(100,25,25);
  const material = new THREE.LineBasicMaterial({
    color:0x0000ff
  })
  const mest = new THREE.Line(geometry,material);
  scene.add(mest)
}

const dashedLineMaterial = ()=>{
  const geometry = new THREE.SphereGeometry(100,25,25);
  const material = new THREE.LineDashedMaterial({
    color:0x0000ff,
    dashSize:3, // 线段大小，默认为3
    gapSize:5 // 间隙大小，默认为1
  })
  const mest = new THREE.Line(geometry,material);
  scene.add(mest)
}

export {
  basicMaterial,
  pointMaterial,
  lineMaterial,
  dashedLineMaterial,
}