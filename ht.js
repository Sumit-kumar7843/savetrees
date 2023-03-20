var img = document.getElementById('myImage');
let currentImgIdx = 0;
var i=0;
var currenttext=0;

const images = [ 
    'https://tse4.mm.bing.net/th?id=OIP.x-VO0WWj2Ez5QY4YdZ5-IwHaE8&pid=Api&P=0',
    'https://tse3.mm.bing.net/th?id=OIP.1BrzXH6DfbfKYRupLTwsUgHaHa&pid=Api&P=0',
    'https://tse1.explicit.bing.net/th?id=OIP.nJp3sGabRqvIs_Y63P6LKwHaE8&pid=Api&P=0',
    'https://tse2.mm.bing.net/th?id=OIP.pUdoD-lUhMl2wstHJmSJwgAAAA&pid=Api&P=0',
    'https://tse4.mm.bing.net/th?id=OIP.UbyzycSwNKaBG5kEuSLqQAHaHa&pid=Api&P=0',
]; 
var h1=document.getElementById("h1");
var array=['Trees purify our air and combat climate change. ...',
    'Trees provide housing to millions of species that protect us from disease. ...',
    'Trees cool our streets and cities. ...',
    'Trees protect against floods and water pollution. ...',
    'Trees ease the mind during stressful times.'
]
function changeImage(){
    i++;
    currentImgIdx=i%5;
    img.src = images[currentImgIdx];
    currentImgIdx++;
     currenttext=currentImgIdx%5;
        
    var text1= h1.innerHTML=array[currenttext];
    currenttext++;
    
}