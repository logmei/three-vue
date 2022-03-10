<template>
  <div></div>
</template>
<script>
import * as THREE from 'three'
import {camera, scene, renderer,mixers} from '../commons/base'
import {ambientLight,pointLight} from '../commons/light'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {gridHelper,arrowHelper_x,arrowHelper_y,arrowHelper_z} from '../commons/helper'
import {test} from '../commons/models/test'
import {basicMaterial,pointMaterial,lineMaterial,dashedLineMaterial} from '../commons/models/material'
import {shadow_spotlight} from '../commons/models/lights'
export default {
  setup() {
    var mouse = new THREE.Vector2()
    var obj = null
    var radians = 0
    var action = null
    var clock = new THREE.Clock();
    const init = async ()=>{
      // obj = await box()
      var Test = await test()
      obj = Test.object
      // geometryCustom()
      basicMaterial()
      shadow_spotlight()
      scene.add(ambientLight())
      scene.add(pointLight())
      scene.add(arrowHelper_x())
      scene.add(arrowHelper_y())
      scene.add(arrowHelper_z())
      scene.add(gridHelper())
    //  console.log('obj',obj)
      renderer.render(scene, camera);
      //告诉渲染器需要阴影效果
      
      document.body.appendChild(renderer.domElement);
      var controls = new OrbitControls(camera, renderer.domElement);
      controls.update();
      //监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
      controls.addEventListener("change", render);
      animate()
      document.addEventListener( 'click', onMouseDown, false );
    }
       // 渲染函数
    var render = () => {
      renderer.render(scene, camera); //执行渲染操作
    };

    var onMouseDown = (event) => {
      	//将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1
		mouse.y = (event.clientY/window.innerHeight) *2 + 1
	};
  // var axis = new THREE.Vector3(1,0,0).normalize()

    var animate = () => {
      requestAnimationFrame(animate);
      // obj.rotateY(Math.PI/6)
      // obj.rotateOnAxis(axis,radians)
      // radians = radians+0.05
      // obj.rotation.x += 0.05;
      // if(!!obj && obj.position.z !== 0){
      //    obj.rotation.z += 0.05;
      // }
     
      renderer.render(scene, camera);
    };
   
  
     init()
    return {
      animate,
      render,
    }

  },
 
}
</script>