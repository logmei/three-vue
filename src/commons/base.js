import * as THREE from "three";
import { FBXLoader }  from 'three/examples/jsm/loaders/FBXLoader';

const c = () => {
    // 相机
    // var camera = new THREE.PerspectiveCamera(
    //     70,
    //     window.innerWidth / window.innerHeight,
    //     0.01,
    //     10
    // );
    // camera.position.z = 1;
    //创建相机对象
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 100; //三维场景显示范围控制系数，系数越大，显示的范围越大
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(100, 150, 100); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    return camera;
}

const s = () => {// 场景
    var scene = new THREE.Scene();
    return scene;
}

const r = () => {

    // 渲染器
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    return renderer;
}
var renderer = r(), scene= s(), camera = c(),loader = new FBXLoader(),mixers=[]

export {
    renderer,
    scene,
    camera,
    loader,
    mixers
}