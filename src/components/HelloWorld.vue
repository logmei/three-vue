<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {FBXLoader}  from 'three/examples/jsm/loaders/FBXLoader';

export default {
  setup() {
    var camera, scene, renderer;
	var geometry, material, mesh;
	var mouse = new THREE.Vector2()
	var raycaster = new THREE.Raycaster()
  var loader = new FBXLoader()
  var mixer;
    var init = () => {
      // 创建一个相机
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
	  camera.position.z = 1;
	  
	  

      // 创建一个场景
      scene = new THREE.Scene();

      loader.load('test.fbx',function(object){
              //获取动画
          // mixer = new THREE.AnimationMixer( object );
          console.log('loader',object)
          // var action = mixer.clipAction( object.animations[ 0 ] );
          // action.play();//播放
          // object.traverse( function ( child ) {
          //   if ( child.isMesh ) {//材质
          //     child.castShadow = true;
          //     child.receiveShadow = true;
          //   }
          // } );
          object.position.x = 0
           object.position.y = 0
            object.position.z = 0
        //  object.scale.set(10,10,10)
        scene.add(object)
      })


      // material = new THREE.LineBasicMaterial({
      //   color: 0xff0000,
      // });


      // 盒子
      var geometryCube = new THREE.BoxGeometry(0.1, 0.6, 0.1);
      geometryCube.translate(0, 0.3, 0);
      console.log('geometryCube',geometryCube)
      var materialCube = new THREE.MeshBasicMaterial( { color: 0x00ff00 ,side:THREE.DoubleSide} );
      var cube = new THREE.Mesh(geometryCube, materialCube);
      scene.add(cube);

      // 环境光
      var ambientLight = new THREE.AmbientLight(0xffffff, 0.1); // 创建环境光
      scene.add(ambientLight); // 将环境光添加到场景
      // 光源
      var spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(0.5, 1, 1);
      spotLight.angle = Math.PI / 4;
      spotLight.penumbra = 0.05;
      spotLight.decay = 2;
      spotLight.distance = 200;

      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      spotLight.shadow.camera.near = 10;
      spotLight.shadow.camera.far = 200;
      scene.add(spotLight);
      /**
         * 光源设置
         */
        //点光源
        // var point = new THREE.PointLight(0xffffff);
        // point.position.set(400, 200, 300); //点光源位置
        // scene.add(point); //点光源添加到场景中
        // //环境光
        // var ambient = new THREE.AmbientLight(0x444444);
        // scene.add(ambient);
        // console.log(scene)
        // console.log(scene.children)
      var lightHelper = new THREE.SpotLightHelper(spotLight);
      scene.add(lightHelper);
      // 光源 end

      // 箭头辅助
      var dir = new THREE.Vector3(1, 0, 0);
      var origin = new THREE.Vector3(0, 0, 0);
      var length = 1;
      var hex = 0xffff00;
      var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
      scene.add(arrowHelper);

      // 网格辅助
      var gridHelper = new THREE.GridHelper(1, 10, 0x2c2c2c, 0x888888);
      scene.add(gridHelper);

      // 渲染器
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);


	  renderer.render(scene, camera);
	  


      console.log("-------------->init over");

      var controls = new OrbitControls(camera, renderer.domElement);
      controls.update();
      //监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
	  controls.addEventListener("change", render);

	  document.addEventListener( 'click', onMouseDown, false );

    };

    // 渲染函数
    var render = () => {
      renderer.render(scene, camera); //执行渲染操作
    };

    var onMouseDown = (event) => {
      	//将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标

		mouse.x = (event.clientX / window.innerWidth) * 2 - 1
		mouse.y = (event.clientY/window.innerHeight) *2 + 1
 
		// 通过鼠标点的位置和当前相机的矩阵计算出raycaster
		raycaster.setFromCamera( mouse, camera );

		// 获取raycaster直线和所有模型相交的数组集合
		var intersects = raycaster.intersectObjects( scene.children );
		// console.log(intersects);

		//将所有的相交的模型的颜色设置为红色
		for ( var i = 0; i < intersects.length; i++ ) {
            intersects[ i ].object.material.color.set( 0xff0000 );
        }
	};

    var animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(scene, camera);
    };
    init();

    return {
      animate,
      render,
    };
  },
};
</script>

<template>
  <div></div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
