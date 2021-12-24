
let video;
//Url Videos
let videosPlanetasRuta = [
    './assets/videos/01mercurio.mp4',
    './assets/videos/01mercurio.mp4',
    './assets/videos/02venus.mp4',
    './assets/videos/03bluna.mp4',
    './assets/videos/04marte.mp4',
    './assets/videos/05jupiter.mp4',
    './assets/videos/06saturno.mp4',
    './assets/videos/07urano.mp4',
    './assets/videos/08neptuno.mp4'
];

let ImagenesPlanetaSizes = [
    './assets/img/sizesPlanetas/Mercurio.png',
    './assets/img/sizesPlanetas/Mercurio.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Luna.png',
    './assets/img/sizesPlanetas/Marte.png',
    './assets/img/sizesPlanetas/Jupiter.png',
    './assets/img/sizesPlanetas/Saturno.png',
    './assets/img/sizesPlanetas/Urano.png',
    './assets/img/sizesPlanetas/Neptuno.png'
]

let ImagenesPlanetaOrbita = [
    './assets/img/sizesPlanetas/Mercurio.png',
    './assets/img/sizesPlanetas/Mercurio.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Venus.png'
]


let divTextosPlanetas = [
    `<div class="flex flex-col items-center content-center justify-center"><!-- Sol -->
  
<div id="Sol" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="SolVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[0]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Sol</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 1,400,000 km</p>
        <p><b>Temperatura (superficie):</b> 5,500°C</p>
        <p><b>Atmósfera:</b> Hidrógeno y helio.</p>
        <p><b>Superficie:</b> Gaseosa, extremadamente caliente.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[0]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[0]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>El Sol es una estrella.</p></li>
            <br>
            <li><p>El Sol tiene manchas solares, unas áreas oscuras menos calientes que el resto de la estrella.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
`<div class="flex flex-col items-center content-center justify-center"><!-- Mercurio -->
  
<div id="Mercurio" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="MercurioVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[1]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Mercurio</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 4,878 km</p>
        <p><b>Distancia al Sol:</b> 58 millones de km</p>
        <p><b>Día:</b> 176 días terrestres</p>
        <p><b>Año:</b> 88 días terrestres</p>
        <p><b>Temperatura (superficie):</b> -184°C a 427 °C.</p>
        <p><b>Anillos:</b> cero </p>
        <p><b>Lunas:</b> cero.</p>
        <p><b>Atmósfera:</b> Sodio, potasio, helio, oxígeno. Muy escasa.</p>
        <p><b>Superficie:</b> Solida, con cambios extremos de temperatura.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[1]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[1]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Mercurio se parece a la luna porque está lleno de crateres.</p></li>
            <br>
            <li><p>Un día de Mercurio es más largo que uno de sus años.</p></li>
            <br>
            <li><p>Mercurio es menor que Ganímenes y Titán, los satélites mayores de Júpiter y Saturno.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
`<div class="flex flex-col items-center content-center justify-center"><!-- Venus -->
  
<div id="Venus" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="VenusVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[2]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Venus</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 12,100 km</p>
        <p><b>Distancia al Sol:</b> 108 millones de km</p>
        <p><b>Día:</b> 243 dias terrestres</p>
        <p><b>Año:</b> 225 días terrestres</p>
        <p><b>Temperatura (superficie):</b> 480°C</p>
        <p><b>Anillos:</b> cero </p>
        <p><b>Lunas:</b> cero.</p>
        <p><b>Atmósfera:</b> Dióxido de carbono, monóxido de carbono, nitrógeno, ácido sulfúrico y argón.</p>
        <p><b>Superficie:</b> Sólida, con densa capa de nubes de dióxido de carbono y partículas de azufre que atrapa el calor del Sol y no lo deja escapar, creando un efecto invernadero.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[2]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[2]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Venus es el planeta más caliente del Sistema Solar.</p></li>
            <br>
            <li><p>Venus gira sobre sí mismo en sentido contrario al de los demás planetas.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
`<div class="flex flex-col items-center content-center justify-center"><!-- Tierra -->
  
<div id="Tierra" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="TierraVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[3]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 12,755 km</p>
        <p><b>Distancia al Sol:</b> 150 millones de km</p>
        <p><b>Día:</b> 23 horas 56 minutos terrestres</p>
        <p><b>Año:</b> 365,24 años terrestres</p>
        <p><b>Temperatura (superficie):</b> -15°C</p>
        <p><b>Anillos:</b> cero</p>
        <p><b>Lunas:</b> 1.</p>
        <p><b>Atmósfera:</b> Oxígeno, vapor de agua, argón, nitrógeno, ozono, dióxido de carbono, metano y otros.</p>
        <p><b>Superficie:</b> Sólida, con mares de agua. Por su distancia al Sol se conserva una temperatura en la que hay agua sólida, líquida y gaseosa.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[3]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[3]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>En la superficie del planeta Tierra hay más agua que tierra: 70% contra 30%, por eso se le llama el planeta azul.</p></li>
            <br>
            <li><p>La Tierra es el único planeta en el que sabemos que hay vida.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
`<div class="flex flex-col items-center content-center justify-center"><!-- Marte -->
  
<div id="Marte" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="MarteVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[4]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Marte</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 6,786 km</p>
        <p><b>Distancia al Sol:</b> 228 millones de km</p>
        <p><b>Día:</b> 24 horas 37 minutos terrestres</p>
        <p><b>Año:</b> 687 años terrestres</p>
        <p><b>Temperatura (superficie):</b> -62°C</p>
        <p><b>Anillos:</b> cero </p>
        <p><b>Lunas:</b> 2.</p>
        <p><b>Atmósfera:</b> Dioxido de Carbono, nitrogeno y argón.</p>
        <p><b>Superficie:</b> Solida. Desierto lleno de óxido de hierro (de ahi su color rojo) más seco que el Sahara, con vientos constantes.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[4]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[4]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Marte es un planeta helado.</p></li>
            <br>
            <li><p>En muchas historias de ficción los extraterrestres se consideran marcianos porque hay mas posibilidades de encontrar vida en Marte que en otros planetas, aunque de haberla seria vida microscópica..</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
`<div class="flex flex-col items-center content-center justify-center"><!-- Jupiter -->
  
<div id="Jupiter" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="JupiterVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[5]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Jupiter</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 139,824 km</p>
        <p><b>Distancia al Sol:</b> 779 millones de km</p>
        <p><b>Día:</b> 10 horas terrestres</p>
        <p><b>Año:</b> 12 años terrestres</p>
        <p><b>Temperatura (superficie):</b> -153°C</p>
        <p><b>Anillos:</b> 2</p>
        <p><b>Lunas:</b> 17 principales, mas de 40 pequeñas.</p>
        <p><b>Atmósfera:</b> Hidrógeno y helio.</p>
        <p><b>Superficie:</b> Gaseosa, con veloces vientos.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[5]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[5]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Júpiter tiene más masa que todos los demás planetas del Sistema Solar juntos.</p></li>
            <br>
            <li><p>Júpiter es el planeta que gira más rápidamente sobre su eje.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`, 
`<div class="flex flex-col items-center content-center justify-center"><!-- Saturno -->
  
<div id="Saturno" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="SaturnoVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[6]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 120,536 km</p>
        <p><b>Distancia al Sol:</b> 1.430 millones de km</p>
        <p><b>Día:</b> 11 horas terrestres</p>
        <p><b>Año:</b> 29 años terrestres</p>
        <p><b>Temperatura (superficie):</b> -184°C</p>
        <p><b>Anillos:</b> 7</p>
        <p><b>Lunas:</b> 22 principales y mas de  20 pequeñas.</p>
        <p><b>Atmósfera:</b> Hidrógeno y helio.</p>
        <p><b>Superficie:</b> Gaseosa, poco compacta.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[6]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[6]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Los anillo s de Saturno son my delgados, apenas tienen 10 kilómetros de espesor. Intentar verlos de perfil desde Titán, su mayor luna, sería como ver el grueso de un  CD a 120 metros de distancia.</p></li>
            <br>
            <li><p>Los anillos de Saturno están formados por miles de millones de trozos de hielo.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Urano -->
  
<div id="Urano" >
    <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="UranoVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[7]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Urano</div>
        <hr>
        <p><b>Tamaño (diámetro):</b> 51,118 km</p>
        <p><b>Distancia al Sol:</b> 2,870 millones de km</p>
        <p><b>Día:</b> 17 horas terrestres</p>
        <p><b>Año:</b> 84 años terrestres</p>
        <p><b>Temperatura (superficie):</b> -214°C</p>
        <p><b>Anillos:</b> 11</p>
        <p><b>Lunas:</b> 21 principales y al menos 6 pequeñas.</p>
        <p><b>Atmósfera:</b> Hidrógeno, helio y metano.</p>
        <p><b>Superficie:</b> Gaseosa.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[7]}" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[7]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Neptuno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Urano fue el primer planeta descubierto mediante un telescopio.</p></li>
            <br>
            <li><p>Vemos que Urano gira con su eje horizontal, como si fuera una rueda y no vertical o levemente incilinado como el resto de los planetas.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','informacion-completa')">Información</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','tamano')">Tamaño</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','orbita')">Órbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','sabias')">¿Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Neptuno -->
  
    <div id="Neptuno" >
        <div class="informacion-completa  w-[100%] h-auto grid   grid-cols-[1fr_2fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
        <div class="NeptunoVideo animate__animated animate__fadeIn">
            <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
                <source src="${videosPlanetasRuta[8]}" type="video/mp4">
            </video>
        </div>
        <div class="informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-[54vh] text-lg md:text-base">
            <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Neptuno</div>
            <hr>
            <p><b>Tamaño (diámetro):</b> 49,528 km</p>
            <p><b>Distancia al Sol:</b> 4,500 millones de km</p>
            <p><b>Día:</b> 16 horas terrestres</p>
            <p><b>Año:</b> 165 años terrestres</p>
            <p><b>Temperatura (superficie):</b> -225°C</p>
            <p><b>Anillos:</b> 4</p>
            <p><b>Lunas:</b> 8 principales y al menos 5 pequeñas.</p>
            <p><b>Atmósfera:</b> Hidrógeno, helio y un poco de metano.</p>
            <p><b>Superficie:</b> Gaseosa, con tormentas y vientos que alcanzan los 2,000 km/hora.</p>
        </div>
        </div>
        <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
            <img src="${ImagenesPlanetaSizes[8]}" alt="tamano">
        </div>
        <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
            <img src="${ImagenesPlanetaOrbita[8]}" alt="tamano">
        </div>
        <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base">
            <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Neptuno</div>-->
            <hr>
            
            <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
                 <p><span class="text-red-900 font-extrabold ">¿SABIAS QUE?</span></p>
                <ul class="list-disc">
                <li><p>Neptuno fue el primer planeta descubierto al predecir su existencia por cálculos.</p></li>
                <br>
                <li><p>Tritón, una luna de Neptuno, es el lugar más frio del sistema Solar; allá, los volcanes expulsan nitrógeno helado en vez de lava.</p></li>
                </ul>
            </div>
           
        </div>
        
    </div>
    <div class="w-[100%] h-full">
        <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                    <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','informacion-completa')">Información</div>
                    <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','tamano')">Tamaño</div>
                    <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','orbita')">Órbita</div>-->
                    <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','sabias')">¿Sabias Que?</div>
        </div>
        </div>
    </div>
</div>`
]




function init() {

}

function mostrarContenido(planetaN) {
    let contenedor = document.querySelector('.contenido-actividad-bienvenida')

    ocultarBotonesMenu()

    contenedor.classList.remove('hidden')
    gsap.fromTo(contenedor, { opacity: 0, scaleX: 0, scaleY: 0, transformOrigin: "50% 50%" }, {
        opacity: 1, scaleX: 1, scaleY: 1, duration: 0.5, ease: Linear.easeInOut, stagger: 0.2, onComplete: () => {
            document.querySelector('.contenedor-actividad').innerHTML = divTextosPlanetas[planetaN]
        }
    });
}

function ocultarBotonesMenu() {
    let botones = document.querySelectorAll('.btnMenu')

    botones.forEach(element => {
        element.classList.toggle('hidden')
    });
}

function ocultarVentana() {

    gsap.fromTo(document.querySelector('.contenido-actividad-bienvenida'), { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%" }, {
        opacity: 0, scaleX: 0, scaleY: 0, duration: 0.5, ease: Linear.easeInOut, stagger: 0.2, onComplete: () => {
            document.querySelector('.contenido-actividad-bienvenida').classList.add('hidden')
            document.querySelector('.contenedor-actividad').innerHTML = ''
            ocultarBotonesMenu()
        }
    });

}

function ocultar(menu, submenu) {
    console.log(`#${menu} div`);

    //Ocultamos las demas

    document.querySelector(`#${menu} .informacion-completa`).classList.add('hidden')
    document.querySelector(`#${menu} .tamano`).classList.add('hidden')
    document.querySelector(`#${menu} .orbita`).classList.add('hidden')
    document.querySelector(`#${menu} .sabias`).classList.add('hidden')



    document.querySelector(`#${menu} .${submenu}`).classList.toggle('hidden')

}


// Get the modal
let modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

/* span.addEventListener('click', ocultarModal); */
window.addEventListener('click', ocultarModalVentana)

function ocultarModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function ocultarModalVentana(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function MostrarVideo() {
    modal.style.display = "flex";
}

function OcultarVideo() {
    video.currentTime = 0
    videoMobile.currentTime = 0
    video.pause()
    videoMobile.pause()
    modal.style.display = "none";
}

function ReproducirVideo(e) {
    video.play()
    document.querySelector('#videoOthers').classList.add("disabledbutton")
    video.addEventListener('ended', function (e) {

        document.querySelector('#videoOthers').classList.remove("disabledbutton")

    })
}
