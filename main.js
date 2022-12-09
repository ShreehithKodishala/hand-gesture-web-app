Webcam.set({

    width:400,
    height:350,
    image_format: 'png',
    png_quality: 90
    
    });
    
    Camera = document.getElementById("camera");
    
    Webcam.attach ('#Camera');
    
    function take_snapshot() {
    
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
    
    }
    console.log('ml5_version',ml5.version );
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iHn3fvVwG/model.json',modelLoaded);
    
    function modelLoaded() {
    console.log('Model Loaded')
    
    }
    
    