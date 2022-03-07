<template>
  <div><button @click="pause">暂停/继续</button></div>
</template>
<script>
import * as THREE from 'three'
import {camera, scene, renderer,mixers} from '../commons/base'
import {ambientLight,pointLight} from '../commons/light'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {gridHelper,arrowHelper_x,arrowHelper_y,arrowHelper_z} from '../commons/helper'
import {box,test} from '../commons/models/test'
export default {
  setup() {
    var mouse = new THREE.Vector2()
    var obj = null
    var action = null
    var clock = new THREE.Clock();
    const init = async ()=>{
      // obj = await box()
      var Test = await test()
      obj = Test.obj
      action = Test.action
      action.play()
      scene.add(ambientLight())
      scene.add(pointLight())
      scene.add(arrowHelper_x())
      scene.add(arrowHelper_y())
      scene.add(arrowHelper_z())
      scene.add(gridHelper())
    //  console.log('obj',obj)
      renderer.render(scene, camera);
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

    var animate = () => {
      requestAnimationFrame(animate);
      // obj.rotation.z += 0.05;
      // if(!!obj && obj.position.z !== 0){
      //           obj.position.z += 1;
      // }
      if ( mixers.length > 0 ) {
          for ( var i = 0; i < mixers.length; i ++ ) {
              mixers[ i ].update( clock.getDelta() );
          }

      }
      renderer.render(scene, camera);
    };
    var pause = ()=>{
      if(action.paused){
        action.paused = false
      } else {
         action.paused = true
      }
    }
  
     init()
    return {
      animate,
      render,
      pause
    }

  },
 
}
</script>