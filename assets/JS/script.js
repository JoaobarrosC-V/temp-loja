//banner

const imgs = document.querySelectorAll('.img-select a');

const imgBtns = [...imgs];

let imgid = 1;


const images =[
  {'id': '1', 'url': './assets/IMG/imgbanner/img1.jpg'},
  {'id': '2', 'url': './assets/IMG/imgbanner/img2.jpeg'},
  {'id': '3', 'url': './assets/IMG/imgbanner/img3.jpg'},
  {'id': '4', 'url': './assets/IMG/imgbanner/img4.jpg'},
  {'id': '5', 'url': './assets/IMG/imgbanner/img5.jpg'},


];

const conteineritems = document.querySelector("#conteiner-items");

const loadImages = (images) =>{
  images.forEach(image =>{
    conteineritems.innerHTML += `
    <div class='items'>
    <img src='${image.url}'>
    </div>
    `;
  });
};

loadImages(images, conteineritems);
let items = document.querySelectorAll(".items");
const previous = () =>{
  const lastItem = items[items.length - 1];
  conteineritems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".items");
};

const next = () =>{
  conteineritems.appendChild(items[0]);
  items = document.querySelectorAll(".items");
};

document.querySelector("#previous").addEventListener("click", previous);

document.querySelector("#next").addEventListener("click", next);



let autoPlayInterval;

const startAutoPlay = () =>{
  autoPlayInterval = setInterval(() =>{
    next();
  }, 3000);
};

const stopAutoPlay = () =>{
  clearInterval(autoPlayInterval);
};

startAutoPlay();

const interactiveElements = [conteineritems, ...
  document.querySelectorAll('.conteiner-shadow, .items, .items img')];
  interactiveElements.forEach(element =>{
    element.addEventListener("mouseenter",
     stopAutoPlay
    );
    element.addEventListener("mouseleave",
      startAutoPlay
    );
  });

conteineritems.addEventListener("mouseover", stopAutoPlay);
conteineritems.addEventListener("mouseout", startAutoPlay);




//lojas


const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const fristcardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");


const carouselChildreans = [...carousel.children];

let isDragging = false,
    isAutoplay = true,
    startX,
    startScrollLeft,
    timeoutId;


  let cardPreView = Math.round(carousel.offsetWidth / fristcardWidth);
  
  carouselChildreans.slice(-cardPreView).reverse().forEach( card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });



  carouselChildreans.slice(0, cardPreView).forEach( card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");

  arrowBtns.forEach(btn =>{
    btn.addEventListener("click", () =>{
      carousel.scrollLeft += btn.id == "left" ? -fristcardWidth : fristcardWidth; 
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging")
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
  };

  const dragStop = () =>{
    isDragging =  false;
    carousel.classList.remove("dragging");
  };

  const infiniteScroll = () =>{
    if ( carousel.scrollLeft === 0){
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition");
    }

    else if (Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth){
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
  };

  const autoPlay =()=>{

    if (window.innerWidth <800 || !isAutoplay ) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += fristcardWidth, 2500);

  };

  autoPlay();

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);

  wrapper.addEventListener("mouseenter", () => clearTimeout (timeoutId));

  wrapper.addEventListener("mouseleave", autoPlay);


/*mapa */
const imagemContainer = document.getElementById('imagemContainer');
const mapaContainer = document.getElementById('mapaContainer');

// Função para mostrar o mapa em cima da imagem
imagemContainer.addEventListener('mouseover', () => {
    mapaContainer.style.opacity = '1'; // Torna o mapa visível
    mapaContainer.style.visibility = 'visible'; // Garante que o mapa esteja visível
    mapaContainer.style.transition = 'opacity 0.3s ease, visibility 0s'; // Ajusta transição
});

// Função para esconder o mapa
imagemContainer.addEventListener('mouseout', () => {
    mapaContainer.style.opacity = '0'; // Torna o mapa invisível
    mapaContainer.style.visibility = 'hidden'; // Garante que o mapa esteja invisível
    mapaContainer.style.transition = 'opacity 0.3s ease, visibility 0s linear 0.3s'; // Ajusta transição
});



/*mapa */
const imagemContainer2 = document.getElementById('imagemContainer2');
const mapaContainer2 = document.getElementById('mapaContainer2');

// Função para mostrar o mapa em cima da imagem
imagemContainer2.addEventListener('mouseover', () => {
    mapaContainer2.style.opacity = '1'; // Torna o mapa visível
    mapaContainer2.style.visibility = 'visible'; // Garante que o mapa esteja visível
    mapaContainer2.style.transition = 'opacity 0.3s ease, visibility 0s'; // Ajusta transição
});

// Função para esconder o mapa
imagemContainer2.addEventListener('mouseout', () => {
    mapaContainer2.style.opacity = '0'; // Torna o mapa invisível
    mapaContainer2.style.visibility = 'hidden'; // Garante que o mapa esteja invisível
    mapaContainer2.style.transition = 'opacity 0.3s ease, visibility 0s linear 0.3s'; // Ajusta transição
});


/*Relogio */

 // Definindo a data final da promoção (exemplo: 1 de Abril de 2025, às 23:59)
 const dataFinal = new Date("Apr 1, 2025 23:59:59").getTime();

 // Atualizando o contador a cada 1 segundo
 const intervalo = setInterval(function() {
     // Pegando a data e hora atual
     const agora = new Date().getTime();

     // Calculando a diferença entre a data final e a data atual
     const distancia = dataFinal - agora;

     // Calculando dias, horas, minutos e segundos restantes
     const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
     const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
     const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

     // Atualizando os valores no 
     const contadores = document.querySelectorAll(".contador");
     contadores.forEach(contador => {
 
      contador.querySelector(".dias").innerHTML = dias < 10 ? "0" + dias : dias;
      contador.querySelector(".horas").innerHTML = horas < 10 ? "0" + horas : horas;
      contador.querySelector(".minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
      contador.querySelector(".segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;
     });
     // Se a contagem regressiva terminar, exibe uma mensagem
     if (distancia < 0) {
         clearInterval(intervalo);
         const elemento1 = document.querySelectorAll(".contador");
         elemento1.forEach(elemento => {
          elemento.innerHTML = "Promoção Encerrada!"

         })
        
     }
 }, 1000);

 /*favoritar*/
 document.querySelectorAll('.favoritar').forEach(button => {
  button.addEventListener('click', () => {
      if (button.style.color === 'red') {
          button.style.color = ''; // Desfavorecer
      } else {
          button.style.color = 'red'; // Favoritar
      }
  });
});

/*kits*/
// Seleciona todas as seções com a classe .destaque
const sections = document.querySelectorAll('.destaque');

// Função para atualizar a visibilidade dos cards dentro de cada seção
function updateCards(section, currentIndex) {
  const cards = section.querySelectorAll('.card-destaque'); // Seleciona todos os cards na seção
  cards.forEach((card, index) => {
    // Esconde todos os cards
    card.style.display = 'none';
    
    // Exibe o card no índice atual
    if (index === currentIndex) {
      card.style.display = 'block';
    }
  });
}

// Função de navegação para alternar entre os cards
function navigate(event) {
  const section = event.target.closest('.destaque'); // Encontra a seção onde o botão foi clicado
  const cards = section.querySelectorAll('.card-destaque'); // Seleciona todos os cards dessa seção
  let currentIndex = Array.from(cards).findIndex(card => card.style.display === 'block'); // Encontra o índice do card visível

  // Verifica qual botão foi pressionado
  if (event.target.closest('.right2')) {
    currentIndex = (currentIndex + 1) % cards.length; // Vai para o próximo card
  } else if (event.target.closest('.left2')) {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Vai para o card anterior
  }

  updateCards(section, currentIndex); // Atualiza a exibição do card na seção
}

// Adiciona o evento de clique para os botões de navegação
const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach(button => {
  button.addEventListener('click', navigate);
});

// Inicializa a exibição do primeiro card para cada seção
sections.forEach(section => {
  updateCards(section, 0); // Exibe o primeiro card de cada seção
});
