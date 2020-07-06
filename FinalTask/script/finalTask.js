function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    
    
    // Screen Size ------------------
    
    var maxWidth  = 800;
    var maxHeight = 600;

    screen.init( volume, {
        width:  Math.min( window.innerWidth, maxWidth ),
        height: Math.min( window.innerHeight, maxHeight ),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    
    
    // gui control variables
    var guiControls;
    
    var surfaces;
    
    var surfaceInit = function() {
        //gui control parameter definition and initialization;
        guiControls = new function() {
            this.isovalue = 50;
        };
        
        surfaces = Isosurfaces( volume, guiControls.isovalue );
        screen.scene.add( surfaces );
    }
    surfaceInit();
    
    var gui = new dat.GUI();
    var isovalueController = gui.add(guiControls, 'isovalue', 0, 255);
    isovalueController.onFinishChange(function(value) {
        surfaces = Isosurfaces( volume, value );
    });
    

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
}


