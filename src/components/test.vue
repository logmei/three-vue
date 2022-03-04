<template>
  <div><button v-on="animate">旋转</button></div>
</template>
<script>
import * as THREE from 'three'
import {camera, scene, renderer} from '../commons/base'
import {ambientLight,pointLight} from '../commons/light'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {gridHelper,arrowHelper_x,arrowHelper_y,arrowHelper_z} from '../commons/helper'
import {box,test} from '../commons/models/test'
export default {
  setup() {
    var mouse = new THREE.Vector2()
    var obj = null
    const init = async ()=>{
      // box()
     obj = await test()
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
      obj.rotation.y += 0.01;

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