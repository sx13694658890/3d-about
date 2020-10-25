function common(){
        var scene=new THREE.Scene()
   
        var renderer=new THREE.WebGLRenderer()
        renderer.setClearColor(new THREE.Color(0xffffff))
        renderer.setSize(window.innerWidth,window.innerHeight)
        renderer.shadowMap.Enabled=true

        var planeGeometry=new THREE.PlaneGeometry(60,30,1)
        var planeMaterial=new THREE.MeshLambertMaterial({color:0x00ffcc})
        var plane=new THREE.Mesh(planeGeometry,planeMaterial)
        plane.rotation.x=-.5*Math.PI;
        plane.position.set(0,0,0)
        scene.add(plane);
        
         //设置立方体
       var cubeGeometry=new THREE.CubeGeometry(10,10,10)
       var cubeMaterial=new THREE.MeshLambertMaterial({color:0xff4590})
       var cube=new THREE.Mesh(cubeGeometry,cubeMaterial)
        cube.position.set(-10,10,10)
        cube.receiveShadow=true
        scene.add(cube)

        // 聚光源 具有锥形的效果
        var spotLight=new THREE.SpotLight(0xFFFFFF);
        spotLight.position.set(-40,60,-30)
        spotLight.castShadow=true
        spotLight.target=cube
        // scene.add(spotLight)
        // 环境光
        var ambientLight=new THREE.AmbientLight(0x1c1c1c)
        scene.add( ambientLight)
         
        var target=new THREE.Object3D()
        target.position.set(5,5,5)

        // 点光源 单点光源不会产生阴影
        var pointLight=new THREE.PointLight(0x0000ff,1,1000);
        pointLight.position.set(0,50,0)
        pointLight.castShadow=true
        // scene.add(pointLight)
        
        //平行光
        var directionalLight=new THREE.DirectionalLight(0x004532);
        directionalLight.position.set(-50,20,0)
        directionalLight.castShadow=true
        directionalLight.shadow.camera.far=1000
        directionalLight.shadow.camera.near=2
        directionalLight.intensity=0.5 // intensity 强度
        directionalLight.shadow.mapSize.hiehgt=2000
        directionalLight.shadow.mapSize.width=1000
        directionalLight.target=target
        // scene.add(directionalLight)
        
        // 半球光源  hemispherelight
       var hemisphereLight=new THREE.HemisphereLight(0x0000ff,0xf32991,0.6)
       hemisphereLight.position.set(0,-100,0)
       scene.add(hemisphereLight)
       
    //  平面光源   arealight   不能用W  WebGLRenderer 需要用 WebGLDeferedRenderer
    
    // 镜头炫光   lensflare
    //  var lensFlare=new LensFlare()
    //  scene.add(lensFlare)
        var camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.set(-40,50,50)
        camera.lookAt(scene.position)
        var axes=new THREE.AxesHelper(50)
        scene.add(axes)
        var angleNum=3
        render()
        function render(){
            // spotLight.angle=Math.PI/angleNum
            requestAnimationFrame(render)
            renderer.render(scene,camera)
        }
       
        document.onkeydown=function(e){
            console.log(e)
            switch(e.keyCode){
                case 38:
                    console.log(38)
                    angleNum+=0.1;
                    break;
                case 40:
                    console.log(40)
                    angleNum-=0.1;
                    if(angleNum<1){
                        angleNum=1
                    }
                    break;
                case 37:
                    directionalLight.intensity+=.1
                   spotLight.position.z+=1
                    break;
                case 39:
                    directionalLight.intensity-=.1
                    spotLight.position.z-=1
                    break;
            }
        }
        return {
            scene:scene,
            renderer:renderer,
            camera:camera
        }
}





    
