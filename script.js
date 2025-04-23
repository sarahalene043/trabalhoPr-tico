

//APENAS O CARROSEL

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.btn.next');
const prevButton = document.querySelector('.btn.prev');
let currentIndex = 0;

function updateCarousel() {
     const slideWidth = slides[0].getBoundingClientRect().width;
     track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
     currentIndex = (currentIndex + 1) % slides.length;
     updateCarousel();
});

prevButton.addEventListener('click', () => {
     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
     updateCarousel();
});

window.addEventListener('resize', updateCarousel);


document.addEventListener("DOMContentLoaded", () => {
     const homePage = document.querySelector(".home-page");
     const detailPage = document.querySelector(".detail-page");
     const backButton = document.getElementById("backToHome");
     const itemCards = document.querySelectorAll(".item-card");

     const detailTitle = detailPage.querySelector(".detail-container h2");
     const detailDescription = detailPage.querySelector(".custom-layout p");
     const warning = detailPage.querySelector(".warning");
     const photoGallery = detailPage.querySelector(".photo-gallery");

     detailPage.style.display = "none";

     itemCards.forEach(card => {
          card.addEventListener("click", () => {
               const id = card.getAttribute("data-id");
               const destino = destinos.find(d => d.id === id);

               if (destino) {
                    // Preencher informações
                    detailTitle.textContent = destino.nome;
                    detailDescription.textContent = destino.descricao;
                    warning.textContent = "Prepare-se para uma experiência inesquecível!";

                    // Limpar e inserir imagens
                    photoGallery.innerHTML = "";
                    destino.imagens.forEach(img => {
                         const div = document.createElement("div");
                         div.classList.add("photo-item");
                         div.innerHTML = `<img src="${img}" alt="${destino.nome}">`;
                         photoGallery.appendChild(div);
                    });

                    // Mostrar página de detalhes
                    homePage.style.display = "none";
                    detailPage.style.display = "block";
               }
          });
     });

     backButton.addEventListener("click", (e) => {
          e.preventDefault();
          detailPage.style.display = "none";
          homePage.style.display = "block";
     });
});






const destinos = [
     {
          id: "Paris",
          nome: "Paris - França",
          descricao: [
               "Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena. A cidade é conhecida por monumentos como a Torre Eiffel e a Catedral de Notre-Dame, uma construção gótica do século XII, sendo famosa também pela cultura dos cafés e por lojas de estilistas famosos na Rue du Faubourg Saint-Honoré."
          ],
          imagens: [
               "./images/frança02.avif",
               "./images/frança01.avif",
               "./images/frança03.avif",
               "./images/frança04.avif"
          ]
     },

     {
          id: "Itália",
          nome: "Itália - Roma",
          descricao: [
               " Roma, a capital da Itália, é repleta de curiosidades fascinantes. Uma delas é que é conhecida como a Cidade Eterna e tem uma história que remonta a mais de 2.500 anos. Além disso, Roma abriga o Vaticano, o menor país do mundo e sede da Igreja Católica. Outra curiosidade é que a cidade tem mais de 2.000 fontes e cerca de 900 igrejas. "
          ],
          imagens: [
               "./images/italia01.avif",
               "./images/italia02.avif"

          ]
     },

     {
          id: "Cristo",
          nome: "Brasil - Cristo Redentor",
          descricao: ["Por estar no alto do Corcovado, o Monumento foi projetado para resistir a ventos de até 250km/h — uma média quatro vezes maior do que a registrada na época de sua construção. Ele suportaria até mesmo os ventos de um furacão de categoria 5, como o furacão Katrina, que atingiu os EUA em 2005."],
          imagens: [
               "./images/Cristo Redentor.avif",
               "./images/rio01.avif",
               "./images/rio02.avif",
               "./images/rio03.avif"

          ]
     },

     {
          id: "Angkor Wat",
          nome: "Camboja - Angkor Wat",
          descricao: [
               "Angkor Wat é um templo situado 5,5 km a norte da cidade de Siem Reap, na província homônima do Camboja. É o maior e mais bem preservado templo dos que integram o assentamento de Angkor. É também o único que restou com importante significado religioso — inicialmente hindu, e depois budista — desde a sua fundação"
          ],
          imagens: [
               "./images/Camboja01.avif",
               "./images/Camboja02.avif",
               "./images/Camboja03.avif"
          ]
     },

     {
          id: "India",
          nome: "India - Taj Mahal",
          descricao: [
               "O Taj Mahal é um mausoléu situado em Agra, na Índia, sendo o mais conhecido dos monumentos do país. Encontra-se classificado pela UNESCO como Patrimônio da Humanidade. Foi anunciado em 2007 como uma das sete maravilhas do mundo moderno."
          ],
          imagens: [
               "./images/taj01.avif",
               "./images/taj02.avif"
          ]
     },

     {
          id: "Muralha da China",
          nome: "Muralha da China",
          descricao: [
               "A Grande Muralha da China possui torres construídas no topo de colinas. Em uma época na qual não existia telefone ou internet, essas plataformas serviam como ponto de envio de comunicação militar. A comunicação era feita por “fogo ou lamparina durante a noite ou sinais de fumaça durante o dia"
          ],
          imagens: [
               "./images/Muralha da China.avif"
          ]
     },

     {
          id: "Milão",
          nome: "Catedral de Milão",
          descricao: [
               "A construção do Duomo de Milão foi iniciada em 1396 e concluída em 1965, no lugar onde se anteriormente encontrava-se a Basílica de San Ambrogio desde o século V d.C até 836 quando foi acrescentada a Basílica de Santa Tecla, ambas destruídas em um incêndio em 1075."
          ],
          imagens: [
               "./images/Catedral de Milão.avif"
          ]
     },

     {
          id: "Acrópole de Atenas",
          nome: "Acrópole de Atenas",
          descricao: [
               "A Acrópole de Atenas é a mais conhecida e importante acrópole grega. Embora existam muitas outras acrópoles na Grécia, o significado da Acrópole de Atenas é tal que é comumente conhecida como A Acrópole, sem qualificação"
          ],
          imagens: [
               "./images/atenas01.avif",
               "./images/atenas02.avif"

          ]
     }
]