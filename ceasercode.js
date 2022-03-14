function Encode() {
    let massig1 = document.getElementById('box1').value;    
    output = new String;
    Arr1 = new Array();
    Arr2 = new Array();
    TextSize = massig1.length;
    for (i = 0; i < TextSize; i++) {
        rnd1 = Math.round(Math.random() * 122) + 68;
        Arr1[i] = massig1.charCodeAt(i) + rnd1;
        Arr2[i] = rnd1;
    }
    document.getElementById("box2").innerHTML = rnd1;
    for (i = 0; i < TextSize; i++) {
        output += String.fromCharCode(Arr1[i], Arr2[i]);
        document.getElementById("box2").innerHTML = output;        
    }   
    return output;    
    }
    
    function Decode() {
    let massig2 = document.getElementById('box2').value;
    outputs = new String;
    Arr1 = new Array();
    Arr2 = new Array();
    TextSize = massig2.length;
    for (i = 0; i < TextSize; i++) {
        Arr1[i] = massig2.charCodeAt(i);
        Arr2[i] = massig2.charCodeAt(i + 1);       
    }
    
    for (i = 0; i < TextSize; i = i+2) {
        outputs += String.fromCharCode(Arr1[i] - Arr2[i]);
        document.getElementById("box3").innerHTML = outputs;
    }    
    document.getElementById("box3").innerHTML = outputs;    
    return outputs;    
    }
    
