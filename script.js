
let video;
//Url Videos
let videosPlanetasRuta = [
    './assets/videos/01mercurio.mp4',
    './assets/videos/01mercurio.mp4',
    './assets/videos/02venus.mp4',
    './assets/videos/03tierra.mp4',
    './assets/videos/04marte.mp4',
    './assets/videos/05jupiter.mp4',
    './assets/videos/06saturno.mp4',
    './assets/videos/07urano.mp4',
    './assets/videos/08neptuno.mp4'
];

let ImagenesPlanetaSizes = [
    './assets/img/sizesPlanetas/Tierra.png',
    './assets/img/sizesPlanetas/Mercurio.png',
    './assets/img/sizesPlanetas/Venus.png',
    './assets/img/sizesPlanetas/Tierra.png',
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

let videoInicio = null
let videoInicioMobile = null

let changeView = true;


let divTextosPlanetas = [
    `<div class="flex flex-col items-center content-center justify-center"><!-- Sol -->
  
<div id="Sol" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="SolVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto sm:h-fit xs:h-fit"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[0]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow lg:p-8 md:p-2 sm:p-2 w-[100%] h-[54vh] sm:h-fit text-lg lg:text-base md:text-base sm:text-sm xs:text-sm">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Sol</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 1,400,000 km</p>
        <p><span class="font-bold">Temperatura (superficie):</span> 5,500??C</p>
        <p><span class="font-bold">Atm??sfera:</span> Hidr??geno y helio.</p>
        <p><span class="font-bold">Superficie:</span> Gaseosa, extremadamente caliente.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh]  lg:h-[54vh] sm:h-fit  flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[0]}" class="md:h-[45vh] sm:h-40 mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[0]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center  text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 sm:h-fit mx-auto text-left flex flex-col items-center content-center justify-center sm:h-fit   ">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>El Sol es una estrella.</p></li>
            <br>
            <li><p>El Sol tiene manchas solares, unas ??reas oscuras menos calientes que el resto de la estrella.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8  md:p-5 sm:p-2 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 active:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','tamano')">Tama??o</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','orbita')">??rbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Sol','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Mercurio -->
  
<div id="Mercurio" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="MercurioVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[1]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated informacion animate__animated animate__fadeIn grow p-8 lg:p-8 sm:p-2 lg:w-full md:h-[54vh] text-lg lg:text-base md:text-xs sm:text-xs">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Mercurio</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 4,878 km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 58 millones de km</p>
        <p><span class="font-bold">D??a:</span> 176 d??as terrestres</p>
        <p><span class="font-bold">A??o:</span> 88 d??as terrestres</p>
        <p><span class="font-bold">Temperatura (superficie):</span> -184??C a 427 ??C.</p>
        <p><span class="font-bold">Anillos:</span> cero </p>
        <p><span class="font-bold">Lunas:</span> cero.</p>
        <p><span class="font-bold">Atm??sfera:</span> Sodio, potasio, helio, ox??geno. Muy escasa.</p>
        <p><span class="font-bold">Superficie:</span> Solida, con cambios extremos de temperatura.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] lg:h-[54vh]  sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[1]}" class="md:h-[45vh] sm:h-40 mx-auto"  alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh]  lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[1]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center  sm:h-fit  ">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Mercurio se parece a la luna porque est?? lleno de crateres.</p></li>
            <br>
            <li><p>Un d??a de Mercurio es m??s largo que uno de sus a??os.</p></li>
            <br>
            <li><p>Mercurio es menor que Gan??menes y Tit??n, los sat??lites mayores de J??piter y Saturno.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 lg:p-8 md:p-8 sm:p-2 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','tamano')">Tama??o</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','orbita')">??rbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Mercurio','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Venus -->
  
<div id="Venus" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="VenusVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[2]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow lg:p-8 md:p-2 sm:p-2 w-[100%]  lg:w-full md:h-[54vh] text-lg lg:text-base md:text-xs sm:text-xs">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Venus</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 12,100 km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 108 millones de km</p>
        <p><span class="font-bold">D??a:</span> 243 dias terrestres</p>
        <p><span class="font-bold">A??o:</span> 225 d??as terrestres</p>
        <p><span class="font-bold">Temperatura (superficie):</span> 480??C</p>
        <p><span class="font-bold">Anillos:</span> cero </p>
        <p><span class="font-bold">Lunas:</span> cero.</p>
        <p><span class="font-bold">Atm??sfera:</span> Di??xido de carbono, mon??xido de carbono, nitr??geno, ??cido sulf??rico y arg??n.</p>
        <p><span class="font-bold">Superficie:</span> S??lida, con densa capa de nubes de di??xido de carbono y part??culas de azufre que atrapa el calor del Sol y no lo deja escapar, creando un efecto invernadero.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh]  lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[2]}" class="md:h-[45vh] sm:h-40 mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh]  lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[2]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left lg: md:text-lg md:text-base  sm:text-xs xs:text-xs flex flex-col items-center content-center justify-center sm:h-fit ">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Venus es el planeta m??s caliente del Sistema Solar.</p></li>
            <br>
            <li><p>Venus gira sobre s?? mismo en sentido contrario al de los dem??s planetas.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 md:p-8 sm:p-2 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','tamano')">Tama??o</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','orbita')">??rbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm xs:text-xs text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Venus','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div id="infoTierra" class="flex flex-col items-center content-center justify-center"><!-- Tierra -->
  
<div id="Tierra" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="TierraVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[3]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow lg:p-8 md:p-2 sm:p-2 w-[100%]  lg:w-full md:h-[54vh] text-lg lg:text-base md:text-xs sm:text-xs">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 12,755 km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 150 millones de km</p>
        <p><span class="font-bold">D??a:</span> 23 horas 56 minutos terrestres</p>
        <p><span class="font-bold">A??o:</span> 365,24 a??os terrestres</p>
        <p><span class="font-bold">Temperatura (superficie):</span> -15??C</p>
        <p><span class="font-bold">Anillos:</span> cero</p>
        <p><span class="font-bold">Lunas:</span> 1.</p>
        <p><span class="font-bold">Atm??sfera:</span> Ox??geno, vapor de agua, arg??n, nitr??geno, ozono, di??xido de carbono, metano y otros.</p>
        <p><span class="font-bold">Superficie:</span> S??lida, con mares de agua. Por su distancia al Sol se conserva una temperatura en la que hay agua s??lida, l??quida y gaseosa.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh]  lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[3]}" class="md:h-[45vh] sm:h-40 mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh]  lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[3]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] sm:h-[45vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Tierra</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left lg: md:text-lg md:text-base  sm:text-xs xs:text-xs flex flex-col items-center content-center justify-center sm:h-fit ">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>En la superficie del planeta Tierra hay m??s agua que tierra: 70% contra 30%, por eso se le llama el planeta azul.</p></li>
            <br>
            <li><p>La Tierra es el ??nico planeta en el que sabemos que hay vida.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 md:p-8 sm:p-2 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','tamano')">Tama??o</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','luna')">Luna</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Tierra','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
<div id="luna" class="flex flex-col items-center content-center justify-center hidden"><!-- Luna -->
  
<div id="Luna" class="hidden">
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="LunaVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="./assets/videos/03bluna.mp4" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow lg:p-8 md:p-2 sm:p-2 w-[100%]  lg:w-full md:h-[54vh] text-lg lg:text-base md:text-xs sm:text-xs">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Luna</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 3,476 Km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 238 mil km</p>
        <p><span class="font-bold">D??a:</span> 29 d??as terrestres</p>
        <p><span class="font-bold">A??o:</span> 1 a??o terrestre</p>
        <p><span class="font-bold">Temperatura (superficie):</span> -127??C a 116??C</p>
        <p><span class="font-bold">Atm??sfera:</span> No tiene</p>
        <p><span class="font-bold">Superficie:</span> S??lida, rocosa, llena de cr??teres; de temperaturas extremas.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh]  lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="./assets/img/sizesPlanetas/Luna.png" class="md:h-[45vh] sm:h-40 mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[3]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] sm:h-[45vh] flex flex-col items-center content-center justify-center text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Luna</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Siempre vemos la misma cara de la luna porque ella tarda el mismo tiempo en girar sobre si misma, que en recorrer su ??rbita alrededor de la Tierra.</p></li>
            <br>
            <li><p>La Luna no cambia de forma, lo que pase es que s??lo vemos la pare iluminada por el sol.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 md:p-8 sm:p-2 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Luna','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Luna','tamano')">Tama??o</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Luna','sabias')">??Sabias Que?</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="VolverTierra()">Regresar</div>
    </div>
    </div>
</div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Marte -->
  
<div id="Marte" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="MarteVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[4]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated informacion animate__animated animate__fadeIn grow p-8 lg:p-8 sm:p-2 w-[100%] h-fit text-lg lg:text-base md:text-xs sm:text-xs">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Marte</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 6,786 km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 228 millones de km</p>
        <p><span class="font-bold">D??a:</span> 24 horas 37 minutos terrestres</p>
        <p><span class="font-bold">A??o:</span> 687 a??os terrestres</p>
        <p><span class="font-bold">Temperatura (superficie):</span> -62??C</p>
        <p><span class="font-bold">Anillos:</span> cero </p>
        <p><span class="font-bold">Lunas:</span> 2.</p>
        <p><span class="font-bold">Atm??sfera:</span> Dioxido de Carbono, nitrogeno y arg??n.</p>
        <p><span class="font-bold">Superficie:</span> Solida. Desierto lleno de ??xido de hierro (de ahi su color rojo) m??s seco que el Sahara, con vientos constantes.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[4]}" class="md:h-[45vh] sm:h-40  mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[4]}" alt="tamano">
    </div>
    <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center  text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center  sm:h-fit">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Marte es un planeta helado.</p></li>
            <br>
            <li><p>En muchas historias de ficci??n los extraterrestres se consideran marcianos porque hay mas posibilidades de encontrar vida en Marte que en otros planetas, aunque de haberla seria vida microsc??pica..</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','tamano')">Tama??o</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','orbita')">??rbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Marte','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Jupiter -->
  
<div id="Jupiter" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="JupiterVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[5]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated informacion animate__animated animate__fadeIn grow p-8 lg:p-8 sm:p-2 w-[100%] h-fit text-lg lg:text-base md:text-xs sm:text-xs">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Jupiter</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 139,824 km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 779 millones de km</p>
        <p><span class="font-bold">D??a:</span> 10 horas terrestres</p>
        <p><span class="font-bold">A??o:</span> 12 a??os terrestres</p>
        <p><span class="font-bold">Temperatura (superficie):</span> -153??C</p>
        <p><span class="font-bold">Anillos:</span> 2</p>
        <p><span class="font-bold">Lunas:</span> 17 principales, mas de 40 peque??as.</p>
        <p><span class="font-bold">Atm??sfera:</span> Hidr??geno y helio.</p>
        <p><span class="font-bold">Superficie:</span> Gaseosa, con veloces vientos.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[5]}" class="md:h-[45vh] sm:h-40  mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[5]}" alt="tamano">
    </div>
    <div class="sabias text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center  text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center sm:h-fit ">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>J??piter tiene m??s masa que todos los dem??s planetas del Sistema Solar juntos.</p></li>
            <br>
            <li><p>J??piter es el planeta que gira m??s r??pidamente sobre su eje.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','tamano')">Tama??o</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','orbita')">??rbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Jupiter','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Saturno -->
  
<div id="Saturno" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="SaturnoVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[6]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated informacion animate__animated animate__fadeIn grow p-8 w-[100%] h-fit text-lg lg:text-base md:text-xs sm:text-xs">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 120,536 km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 1.430 millones de km</p>
        <p><span class="font-bold">D??a:</span> 11 horas terrestres</p>
        <p><span class="font-bold">A??o:</span> 29 a??os terrestres</p>
        <p><span class="font-bold">Temperatura (superficie):</span> -184??C</p>
        <p><span class="font-bold">Anillos:</span> 7</p>
        <p><span class="font-bold">Lunas:</span> 22 principales y mas de  20 peque??as.</p>
        <p><span class="font-bold">Atm??sfera:</span> Hidr??geno y helio.</p>
        <p><span class="font-bold">Superficie:</span> Gaseosa, poco compacta.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[6]}" class="md:h-[45vh] mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[6]}" alt="tamano">
    </div>
    <div class="sabias text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center  text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Saturno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center ">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
            <ul class="list-disc">
            <li><p>Los anillo s de Saturno son my delgados, apenas tienen 10 kil??metros de espesor. Intentar verlos de perfil desde Tit??n, su mayor luna, ser??a como ver el grueso de un  CD a 120 metros de distancia.</p></li>
            <br>
            <li><p>Los anillos de Saturno est??n formados por miles de millones de trozos de hielo.</p></li>
            </ul>
        </div>
       
    </div>
    
</div>
<div class="w-[100%] h-full">
    <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','tamano')">Tama??o</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','orbita')">??rbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Saturno','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Urano -->
  
<div id="Urano" >
    <div class="informacion-completa  w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
    <div class="UranoVideo animate__animated animate__fadeIn">
        <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
            <source src="${videosPlanetasRuta[7]}" type="video/mp4">
        </video>
    </div>
    <div class="informacion animate__animated animate__fadeIn grow lg:p-8 md:p-2 sm:p-2 w-[100%] h-[54vh] sm:h-fit text-lg lg:text-base md:text-base sm:text-sm xs:text-sm">
        <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Urano</div>
        <hr>
        <p><span class="font-bold">Tama??o (di??metro):</span> 51,118 km</p>
        <p><span class="font-bold">Distancia al Sol:</span> 2,870 millones de km</p>
        <p><span class="font-bold">D??a:</span> 17 horas terrestres</p>
        <p><span class="font-bold">A??o:</span> 84 a??os terrestres</p>
        <p><span class="font-bold">Temperatura (superficie):</span> -214??C</p>
        <p><span class="font-bold">Anillos:</span> 11</p>
        <p><span class="font-bold">Lunas:</span> 21 principales y al menos 6 peque??as.</p>
        <p><span class="font-bold">Atm??sfera:</span> Hidr??geno, helio y metano.</p>
        <p><span class="font-bold">Superficie:</span> Gaseosa.</p>
    </div>
    </div>
    <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaSizes[7]}" class="md:h-[45vh] sm:h-[40vh] mx-auto" alt="tamano">
    </div>
    <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] flex flex-col items-center content-center justify-start">
        <img src="${ImagenesPlanetaOrbita[7]}" alt="tamano">
    </div>
    <div class="sabias text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center  text-lg lg:text-lg md:text-base sm:text-sm">
        <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Neptuno</div>-->
        <hr>
        
        <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center sm:h-fit">
             <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
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
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','informacion-completa')">Informaci??n</div>
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','tamano')">Tama??o</div>
                <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','orbita')">??rbita</div>-->
                <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Urano','sabias')">??Sabias Que?</div>
    </div>
    </div>
</div>
</div>`,
    `<div class="flex flex-col items-center content-center justify-center"><!-- Neptuno -->
  
    <div id="Neptuno" >
        <div class="informacion-completa   w-[100%] lg:h-[54vh] md:h-[45vh] sm:h-fit grid   grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] items-center content-center justify-center">
        <div class="NeptunoVideo animate__animated animate__fadeIn">
            <video  class=" w-full aspect-auto md:aspect-video lg:aspect-auto"  id="video-animacion-mobile" class="responsive"  preload autoplay loop="true" >
                <source src="${videosPlanetasRuta[8]}" type="video/mp4">
            </video>
        </div>
        <div class="informacion animate__animated animate__fadeIn grow lg:p-8 md:p-2 sm:p-2 w-[100%] h-[54vh] sm:h-fit text-lg lg:text-base md:text-base sm:text-sm xs:text-sm">
            <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Neptuno</div>
            <hr>
            <p><span class="font-bold">Tama??o (di??metro):</span> 49,528 km</p>
            <p><span class="font-bold">Distancia al Sol:</span> 4,500 millones de km</p>
            <p><span class="font-bold">D??a:</span> 16 horas terrestres</p>
            <p><span class="font-bold">A??o:</span> 165 a??os terrestres</p>
            <p><span class="font-bold">Temperatura (superficie):</span> -225??C</p>
            <p><span class="font-bold">Anillos:</span> 4</p>
            <p><span class="font-bold">Lunas:</span> 8 principales y al menos 5 peque??as.</p>
            <p><span class="font-bold">Atm??sfera:</span> Hidr??geno, helio y un poco de metano.</p>
            <p><span class="font-bold">Superficie:</span> Gaseosa, con tormentas y vientos que alcanzan los 2,000 km/hora.</p>
        </div>
        </div>
        <div class="tamano animate__animated animate__fadeIn  hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
            <img src="${ImagenesPlanetaSizes[8]}" class="md:h-[45vh] sm:h-[40vh] mx-auto" alt="tamano">
        </div>
        <div class="orbita animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-start">
            <img src="${ImagenesPlanetaOrbita[8]}" alt="tamano">
        </div>
        <div class="sabias  text-base animate__animated animate__fadeIn hidden w-[100%] h-[54vh] lg:h-[54vh] sm:h-fit flex flex-col items-center content-center justify-center  text-lg lg:text-lg md:text-base sm:text-sm">
            <!-- <div class="text-cyan-900 mx-auto text-lg lg:text-2xl  md:text-sm text-center font-extrabold w-full">Neptuno</div>-->
            <hr>
            
            <div class="w-[50vw] h-80 mx-auto text-left flex flex-col items-center content-center justify-center  sm:h-fit">
                 <p><span class="text-red-900 font-extrabold ">??SABIAS QUE?</span></p>
                <ul class="list-disc">
                <li><p>Neptuno fue el primer planeta descubierto al predecir su existencia por c??lculos.</p></li>
                <br>
                <li><p>Trit??n, una luna de Neptuno, es el lugar m??s frio del sistema Solar; all??, los volcanes expulsan nitr??geno helado en vez de lava.</p></li>
                </ul>
            </div>
           
        </div>
        
    </div>
    <div class="w-[100%] h-full">
        <div class="w-[100%] h-full p-8 nowrap flex flex-row  gap-2 items-center justify-between content-center">
                    <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','informacion-completa')">Informaci??n</div>
                    <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','tamano')">Tama??o</div>
                    <!--<div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','orbita')">??rbita</div>-->
                    <div class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  md:text-sm sm:text-sm text-center grow basis-1/4 cursor-pointer" onclick="ocultar('Neptuno','sabias')">??Sabias Que?</div>
        </div>
        </div>
    </div>
</div>`
]




function init() {

    document.querySelector('#data').style.display = 'none'

    const selectElement = document.querySelector('#velociad-translacion');
    let stylesMapaMercurioOrbit = document.querySelector(`#mercury.orbit`).style
    let stylesMapaVenusOrbit = document.querySelector(`#venus.orbit`).style
    let stylesMapaTierraOrbit = document.querySelector(`#earth.orbit`).style
    let stylesMapaMarteOrbit = document.querySelector(`#mars.orbit`).style
    let stylesMapaJupiterOrbit = document.querySelector(`#jupiter.orbit`).style
    let stylesMapaSaturnoOrbit = document.querySelector(`#saturn.orbit`).style
    let stylesMapaUranoOrbit = document.querySelector(`#uranus.orbit`).style
    let stylesMapaNeptunoOrbit = document.querySelector(`#neptune.orbit`).style

    $("#simulador").click(() => {
        $("body").toggleClass("view-3D view-2D");
        document.querySelector('.simulador-seleccion').style.display = 'block'


        ReiniciarGalaxia()




        if (document.querySelector('.contenido-actividad-bienvenida').style.opacity == 1) {
            ocultarVentana()
        }
    });

    $("#simulador-mobile").click(() => {
        $("body").toggleClass("view-3D view-2D");
        document.querySelector('.simulador-seleccion').style.display = 'block'


        ReiniciarGalaxia()




        if (document.querySelector('.contenido-actividad-bienvenida').style.opacity == 1) {
            ocultarVentana()
        }
    });





    selectElement.addEventListener('change', (event) => {



        //ocultando info
        document.querySelector('#neptune  .infos').style.display = 'none'
        document.querySelector('#uranus  .infos').style.display = 'none'
        document.querySelector('#saturn  .infos').style.display = 'none'
        document.querySelector('#jupiter  .infos').style.display = 'none'
        document.querySelector('#mars  .infos').style.display = 'none'
        document.querySelector('#earth  .infos').style.display = 'none'
        document.querySelector('#venus  .infos').style.display = 'none'
        document.querySelector('#mercury  .infos').style.display = 'none'

        switch (event.target.value) {
            case '1':

                //rotacion

                //tierra


                document.querySelector('#earth .planet').style.animationDuration = '0.2s'


                //mart

                document.querySelector('#mars .planet').style.animationDuration = '0.8s'


                //jupiter

                document.querySelector('#jupiter .planet').style.animationDuration = '1.9s'
                //saturn

                document.querySelector('#saturn .planet').style.animationDuration = '2s'
                //uranus

                document.querySelector('#uranus .planet').style.animationDuration = '1s'
                //neptune

                document.querySelector('#neptune .planet').style.animationDuration = '1.5s'


                stylesMapaVenusOrbit.setProperty('--rotacion-venus', '2.9s')
                stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '1.9s')
                stylesMapaTierraOrbit.setProperty('--rotacion-earth', '5.9s')
                stylesMapaMarteOrbit.setProperty('--rotacion-marte', '6099999ms')
                stylesMapaJupiterOrbit.setProperty('--rotacion-jupiter', '9000s')
                stylesMapaSaturnoOrbit.setProperty('--rotacion-saturno', '1000s')
                stylesMapaUranoOrbit.setProperty('--rotacion-urano', '12.0044s')
                stylesMapaNeptunoOrbit.setProperty('--rotacion-neptuno', '66600s')

                break;
            case '2':
                //rotacion

                //tierra

                document.querySelector('#earth .planet').style.animationDuration = '0.2s'


                //mart

                document.querySelector('#mars .planet').style.animationDuration = '1.5s'


                //jupiter

                document.querySelector('#jupiter .planet').style.animationDuration = '1.9s'
                //saturn

                document.querySelector('#saturn .planet').style.animationDuration = '2s'
                //uranus

                document.querySelector('#uranus .planet').style.animationDuration = '1s'
                //neptune

                document.querySelector('#neptune .planet').style.animationDuration = '1.5s'



                stylesMapaVenusOrbit.setProperty('--rotacion-venus', '2.9s')
                stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '1.9s')
                stylesMapaTierraOrbit.setProperty('--rotacion-earth', '5.9s')
                stylesMapaMarteOrbit.setProperty('--rotacion-marte', '690s')
                stylesMapaJupiterOrbit.setProperty('--rotacion-jupiter', '2220s')
                stylesMapaSaturnoOrbit.setProperty('--rotacion-saturno', '3222s')
                stylesMapaUranoOrbit.setProperty('--rotacion-urano', '2100s')
                stylesMapaNeptunoOrbit.setProperty('--rotacion-neptuno', '22000s')

                break;

            case '3':

                //rotacion

                //tierra

                document.querySelector('#earth .planet').style.animationDuration = '0.2s'


                //mart

                document.querySelector('#mars .planet').style.animationDuration = '0.8s'


                //jupiter

                document.querySelector('#jupiter .planet').style.animationDuration = '1.9s'
                //saturn

                document.querySelector('#saturn .planet').style.animationDuration = '2s'
                //uranus

                document.querySelector('#uranus .planet').style.animationDuration = '1s'
                //neptune

                document.querySelector('#neptune .planet').style.animationDuration = '1.5s'


                stylesMapaMarteOrbit.setProperty('--rotacion-marte', '9.09s')
                stylesMapaTierraOrbit.setProperty('--rotacion-earth', '15.0009s')
                stylesMapaVenusOrbit.setProperty('--rotacion-venus', '21.00009s')
                stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '1.9s')

                break;
            case '4':

                //rotacion

                //tierra

                document.querySelector('#earth .planet').style.animationDuration = '0.8s'


                //mart

                document.querySelector('#mars .planet').style.animationDuration = '0.8s'


                //jupiter

                document.querySelector('#jupiter .planet').style.animationDuration = '1.9s'
                //saturn

                document.querySelector('#saturn .planet').style.animationDuration = '2s'
                //uranus

                document.querySelector('#uranus .planet').style.animationDuration = '1s'
                //neptune

                document.querySelector('#neptune .planet').style.animationDuration = '1.5s'


                stylesMapaVenusOrbit.setProperty('--rotacion-venus', '2.9s')
                stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '1.9s')
                stylesMapaTierraOrbit.setProperty('--rotacion-earth', '5.9s')
                stylesMapaMarteOrbit.setProperty('--rotacion-marte', '6099999ms')
                stylesMapaJupiterOrbit.setProperty('--rotacion-jupiter', '1800s')
                stylesMapaSaturnoOrbit.setProperty('--rotacion-saturno', '1800s')
                stylesMapaUranoOrbit.setProperty('--rotacion-urano', '10000000s')
                stylesMapaNeptunoOrbit.setProperty('--rotacion-neptuno', '10000000s')

                break;
            case '5':


                //rotacion

                //mart

                document.querySelector('#mars .planet').style.animationDuration = '0.8s'


                //jupiter

                document.querySelector('#jupiter .planet').style.animationDuration = '1.9s'
                //saturn

                document.querySelector('#saturn .planet').style.animationDuration = '2s'
                //uranus

                document.querySelector('#uranus .planet').style.animationDuration = '1s'
                //neptune

                document.querySelector('#neptune .planet').style.animationDuration = '1.5s'


                stylesMapaVenusOrbit.setProperty('--rotacion-venus', '2.9s')
                stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '1.9s')
                stylesMapaTierraOrbit.setProperty('--rotacion-earth', '5.9s')
                stylesMapaMarteOrbit.setProperty('--rotacion-marte', '6099999ms')
                stylesMapaJupiterOrbit.setProperty('--rotacion-jupiter', '1800s')
                stylesMapaSaturnoOrbit.setProperty('--rotacion-saturno', '1800s')
                stylesMapaUranoOrbit.setProperty('--rotacion-urano', '10000000s')
                stylesMapaNeptunoOrbit.setProperty('--rotacion-neptuno', '10000000s')

                break;

            case '6':

                //rotacion

                //mart

                document.querySelector('#mars .planet').style.animationDuration = '0.8s'


                //jupiter

                document.querySelector('#jupiter .planet').style.animationDuration = '1.9s'
                //saturn

                document.querySelector('#saturn .planet').style.animationDuration = '2s'
                //uranus

                document.querySelector('#uranus .planet').style.animationDuration = '1s'
                //neptune

                document.querySelector('#neptune .planet').style.animationDuration = '1.5s'
                document.querySelector('#neptune .infos').style.display = 'none'

                stylesMapaVenusOrbit.setProperty('--rotacion-venus', '1000000s')
                stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '10000s')
                stylesMapaTierraOrbit.setProperty('--rotacion-earth', '100000ms')
                stylesMapaMarteOrbit.setProperty('--rotacion-marte', '100000ms')
                stylesMapaJupiterOrbit.setProperty('--rotacion-jupiter', '180s')
                stylesMapaSaturnoOrbit.setProperty('--rotacion-saturno', '200s')
                stylesMapaUranoOrbit.setProperty('--rotacion-urano', '10s')
                stylesMapaNeptunoOrbit.setProperty('--rotacion-neptuno', '100s')

                break;

            case '7':
                //rotacion

                //mart

                document.querySelector('#mars .planet').style.animationDuration = '0.8s'


                //jupiter

                document.querySelector('#jupiter .planet').style.animationDuration = '0.8s'
                //saturn

                document.querySelector('#saturn .planet').style.animationDuration = '0.8s'
                //uranus

                document.querySelector('#uranus .planet').style.animationDuration = '1s'
                //neptune

                document.querySelector('#neptune .planet').style.animationDuration = '0.5s'


                //Translacion

                stylesMapaMarteOrbit.setProperty('--rotacion-marte', '6099999ms')
                stylesMapaTierraOrbit.setProperty('--rotacion-earth', '7299999ms')
                stylesMapaVenusOrbit.setProperty('--rotacion-venus', '90.99999s')
                stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '300000ms')
                stylesMapaJupiterOrbit.setProperty('--rotacion-jupiter', '10000000s')
                stylesMapaSaturnoOrbit.setProperty('--rotacion-saturno', '10000000s')
                stylesMapaUranoOrbit.setProperty('--rotacion-urano', '10000000s')
                stylesMapaNeptunoOrbit.setProperty('--rotacion-neptuno', '10000000s')




                break;

            default:
                break;
        }

    });

    let contenedor = document.querySelector('.contenido-actividad-bienvenida')

    //ocultarBotonesMenu()

    setTimeout(() => {
        contenedor.classList.remove('hidden')
        gsap.fromTo(contenedor, { opacity: 0, scaleX: 0, scaleY: 0, transformOrigin: "50% 50%" }, {
            opacity: 1, scaleX: 1, scaleY: 1, duration: 0.5, ease: Linear.easeInOut, stagger: 0.2, onComplete: () => {
                document.querySelector('.contenedor-actividad').innerHTML = `
                <div id="instrucciones">
    <div class=" h-fit w-90 sm:w-100% md:w-fit sm:h-fit md:h-fit  mx-auto sm:mx-auto  md:overflow lg:p-20 md:overflow-hidden md:p-2 sm:p-2">
      <h1 class="text-2xl lg:text-2xl  md:text-2xl sm:text-ms text-cyan-900 mb-4">INSTRUCCIONES</h1>
      <hr class=" w-20 mx-auto mb-3">
      <p class="text-justify text-base lg:text-lg md:text-sm sm:text-sm xs:text-xs">Vamos a explorar nuestro sistema solar y nuestro planeta tierra,Haz clic en cualquiera de los nombres de los planetas que se encuentran en la parte inferior para ingresar a su ficha descriptiva, Puedes seleccionar tambi??n los botones de tama??o y distancia para conocer m??s sobre estos temas.</p>
      <div class="w-40  mx-auto   mt-20 md:mt-6 sm:mt-4">
        <div
          class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg lg:text-lg  md:text-sm text-center grow basis-1/4 cursor-pointer hover:transform-scale-1"
          onclick="siguienteInicio()">Siguiente</div>
      </div>
    </div>
  </div>
  <div id="introvideo" class="hidden w-full h-100">
    <div
      class="w-fit sm:w-full h-fit flex flex-col justify-center items-center content-center text-center   lg:p-4 md:p-2 sm:p-2">
      <h1 class="text-2xl text-cyan-900 mb-4">SISTEMA SOLAR</h1>
      <hr class=" w-20 mx-auto mb-3">
      <div class="contendor-video mx-auto  w-full  h-20 lg:h-80 md:h-40  mb-[16px] text-center">
        <video id="video-sistema" preload controls class="h-20 lg:h-80 mx-auto mt-2">
          <source src="./assets/videos/origen_sist_solar.mp4" type="video/mp4">
          <source src="./assets/videos/origen_sist_solar.ogg" type="video/ogg">

        </video>
      </div>
      <div class="w-80 mx-auto mt-6 grid grid-cols-1  lg:grid-cols-1  md:grid-cols-2  sm:grid-cols-2 place-items-center">
        <div
          class="animate__animated animate__fadeInUp  lg:hidden md:visible sm:visible bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg  lg:text-lg md:text-sm text-center grow basis-1/4 cursor-pointer hover:transform-scale-1"
          onclick="verVideoSistema()">Ver video
        </div>
        <div
          class="animate__animated animate__fadeInUp  bg-cyan-900 hover:bg-cyan-600 p-2 text-white text-lg   lg:text-lg md:text-sm text-center grow basis-1/4 cursor-pointer hover:transform-scale-1"
          onclick="ocultarVentana()">Siguiente
        </div>
      </div>
    </div>
  </div>
              `
            }
        });
    }, 3000);


}

function ReiniciarGalaxia() {
    const selectElement = document.querySelector('#velociad-translacion');
    let stylesMapaMercurioOrbit = document.querySelector(`#mercury.orbit`).style
    let stylesMapaVenusOrbit = document.querySelector(`#venus.orbit`).style
    let stylesMapaTierraOrbit = document.querySelector(`#earth.orbit`).style
    let stylesMapaMarteOrbit = document.querySelector(`#mars.orbit`).style
    let stylesMapaJupiterOrbit = document.querySelector(`#jupiter.orbit`).style
    let stylesMapaSaturnoOrbit = document.querySelector(`#saturn.orbit`).style
    let stylesMapaUranoOrbit = document.querySelector(`#uranus.orbit`).style
    let stylesMapaNeptunoOrbit = document.querySelector(`#neptune.orbit`).style

    if (changeView) {

        //Animation Rotation
        document.querySelector('#earth .planet').style.animationName = 'shadow-earth-rotation'
        document.querySelector('#mars .planet').style.animationName = 'shadow-mars-rotation'
        document.querySelector('#jupiter .planet').style.animationName = 'shadow-jupiter-rotation'
        document.querySelector('#saturn .planet').style.animationName = 'shadow-saturn-rotation'
        document.querySelector('#uranus .planet').style.animationName = 'shadow-uranus-rotation'
        document.querySelector('#neptune .planet').style.animationName = 'shadow-neptune-rotation'

        changeView = !changeView
    } else {
        document.querySelector('#earth .planet').style.animationName = 'shadow-earth'
        document.querySelector('#mars .planet').style.animationName = 'shadow-mars'
        document.querySelector('#jupiter .planet').style.animationName = 'shadow-jupiter'
        document.querySelector('#saturn .planet').style.animationName = 'shadow-saturn'
        document.querySelector('#uranus .planet').style.animationName = 'shadow-uranus'
        document.querySelector('#neptune .planet').style.animationName = 'shadow-neptune'

        //Reiniciamos la velocidad de las orbitas

        stylesMapaVenusOrbit.setProperty('--rotacion-venus', '2.89016s')
        stylesMapaMercurioOrbit.setProperty('--rotacion-mercurio', '7.38237s')
        stylesMapaTierraOrbit.setProperty('--rotacion-earth', '12.00021s')
        stylesMapaMarteOrbit.setProperty('--rotacion-marte', '22.57017s')
        stylesMapaJupiterOrbit.setProperty('--rotacion-jupiter', '22.57017s')
        stylesMapaSaturnoOrbit.setProperty('--rotacion-saturno', '353.36998s')
        stylesMapaUranoOrbit.setProperty('--rotacion-urano', '1008.20215s')
        stylesMapaNeptunoOrbit.setProperty('--rotacion-neptuno', '1977.49584s')

        //rotacion

        //tierra


        document.querySelector('#earth .planet').style.animationDuration = 'initial'


        //mart

        document.querySelector('#mars .planet').style.animationDuration = 'initial'


        //jupiter

        document.querySelector('#jupiter .planet').style.animationDuration = 'initial'
        //saturn

        document.querySelector('#saturn .planet').style.animationDuration = 'initial'
        //uranus

        document.querySelector('#uranus .planet').style.animationDuration = 'initial'
        //neptune

        document.querySelector('#neptune .planet').style.animationDuration = 'initial'
        document.querySelector('.simulador-seleccion').style.display = 'none'
        changeView = !changeView


    }
}

function siguienteInicio() {
    document.querySelector('#instrucciones').style.display = 'none'
    document.querySelector('#introvideo').style.display = 'block'
}


function MostrarInfoLuna() {
    let infoluna = `
   
    `
}

function cerrarSimuladorOpcion() {
    document.querySelector('.simulador-seleccion').style.display = 'none'
    changeView = !changeView
    ReiniciarGalaxia()
}

function verVideoSistema() {

    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        videoInicio = document.querySelector('#video-sistema')
        videoInicio.play()
    } else {
        videoInicioMobile = document.querySelector('#video-animacion-mobile')
        MostrarVideo()
        videoInicioMobile.play()
    }

}

function mostrarContenido(planetaN) {
    let contenedor = document.querySelector('.contenido-actividad-bienvenida')

    //ocultarBotonesMenu()
    contenedor.style.height = '74%'
    document.querySelector('.contenedor-actividad').innerHTML = ''
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

    if (videoInicio != null) {
        videoInicio.pause()
    }


    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
        document.querySelector('#data').style.display = 'block'
    } else {
        document.querySelector('#navbar').classList.remove('hidden')
    }




    gsap.fromTo(document.querySelector('.contenido-actividad-bienvenida'), { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin: "50% 50%" }, {
        opacity: 0, scaleX: 0, scaleY: 0, duration: 0.5, ease: Linear.easeInOut, stagger: 0.2, onComplete: () => {
            document.querySelector('.contenido-actividad-bienvenida').classList.add('hidden')
            document.querySelector('.contenedor-actividad').innerHTML = ''
            ocultarBotonesMenu()
        }
    });

}


/* function mostrarSimulador(){
    
} */

function ocultar(menu, submenu) {


    if (submenu == 'luna') {
        document.querySelector(`#infoTierra`).classList.add('hidden')
        document.querySelector(`#Luna`).classList.remove('hidden')
        document.querySelector(`#luna`).classList.remove('hidden')

    }

    //Ocultamos las demas

    document.querySelector(`#${menu} .informacion-completa`).classList.add('hidden')
    document.querySelector(`#${menu} .tamano`).classList.add('hidden')
    document.querySelector(`#${menu} .orbita`).classList.add('hidden')
    document.querySelector(`#${menu} .sabias`).classList.add('hidden')


    if (submenu != 'luna') {
        document.querySelector(`#${menu} .${submenu}`).classList.toggle('hidden')
    }


}

function VolverTierra() {
    document.querySelector(`#infoTierra`).classList.remove('hidden')
    document.querySelector(`#Tierra .informacion-completa`).classList.remove('hidden')
    document.querySelector(`#Luna`).classList.add('hidden')
    document.querySelector(`#luna`).classList.add('hidden')
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
        if (videoInicio != null) {
            videoInicio.currentTime = 0
            videoInicio.pause()

        }
        videoInicioMobile.currentTime = 0

        videoInicioMobile.pause()
        modal.style.display = "none";

    }
}

function MostrarVideo() {
    modal.style.display = "flex";
}

function OcultarVideo() {
    if (videoInicio != null) {
        videoInicio.currentTime = 0
        videoInicio.pause()
    }


    videoInicioMobile.currentTime = 0
    videoInicioMobile.pause()
    modal.style.display = "none";
}

function ReproducirVideo(e) {
    video.play()
    document.querySelector('#videoOthers').classList.add("disabledbutton")
    video.addEventListener('ended', function (e) {

        document.querySelector('#videoOthers').classList.remove("disabledbutton")

    })
}
