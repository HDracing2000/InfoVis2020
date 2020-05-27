function main()
{
    var width = 500;
    var height = 500;
    
    //create Scene
    var scene  = new THREE.Scene();
    var scene2 = new THREE.Scene();

    //create Camera and add to Scene
    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );
    scene2.add( camera );
    
    //create light and add to Scene
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );
    scene2.add( light );


    //Create Object=geometry+material and add to scene
        //degine geometry and material
    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('gouraud.vert').text,
        fragmentShader: document.getElementById('gouraud.frag').text,
    });
    
    var material2 = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('phong.vert').text,
        fragmentShader: document.getElementById('phong.frag').text,
    });
        //create Object and add to Scene
    var torus_knot = new THREE.Mesh( geometry, material );
    scene.add( torus_knot );
    var torus_knot2 = new THREE.Mesh( geometry, material2 );
    scene2.add( torus_knot2 );
    
    
    var renderer1 = new THREE.WebGLRenderer();
    renderer1.setSize( width, height );
    const canvas_1 = document.getElementById("canvas1");
    canvas_1.appendChild( renderer1.domElement );
    
    document.getElementById("title1").innerHTML = "Gouraud shading";
    
    
    var renderer2 = new THREE.WebGLRenderer();
    renderer2.setSize( width, height );
    const canvas_2 = document.getElementById("canvas2");
    canvas_2.appendChild( renderer2.domElement );
    
    document.getElementById("title2").innerHTML = "Phong shading";
    
    
    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot.rotation.x += 0.01;
        torus_knot.rotation.y += 0.01;
        renderer1.render( scene, camera );
        
        torus_knot2.rotation.x += 0.01;
        torus_knot2.rotation.y += 0.01;
        renderer2.render( scene2, camera );
    }
}
