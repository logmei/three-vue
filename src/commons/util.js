
export function ObjectSetCenter(obj){
  if(obj.type === "Mesh"){
   
   if(obj.scale) obj.scale.set(20,20,20)
   if(obj.geometry) obj.geometry.center()
  //  if(obj.material ){
  //    if(Array.isArray(obj.material)){
  //     obj.material.forEach(element => {
  //       element.color.set(0xfff000);
  //     });
  //    }else {
  //     obj.material.color.set(0xf00000);
  //    }
  //  } 
  }
  if(obj.type === 'Group'){
    for(var i = 0;i<obj.children.length;i++){
      ObjectSetCenter(obj.children[i])
    }
  }
}