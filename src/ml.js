import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    years: new Date().getFullYear() - 2020,
    initial: 'PT-BR',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('EN').create({
            menuProjects: "Projects",
            workPersonal:"Personal Project",
            workProfessional: "Professional Project",
            menuTec: "Technologies",
            menuAbout: "About",
            menuContact: "Contact",
            moreBtn: "Click to more details",
            emailSuccessText:"Sent with success",
            emailFailText:"There was an error, please try again",
            sendBtn:"Send",
            accessBtn: "Access",
            closeBtn: "Close",
            technologiesDescriptionTitle: "Technologies<br>and<br>Experiences",
            technologiesDescriptionStart: "S",
            technologiesDescription: 'ince the beginning as a web developer, approximately {years} years ago, where since then I have improved my skills with JavaScript/Vue.js and PHP/Laravel. I developed for companies like Unimed and Gespag using Vue.js and Vuetify, acquiring knowledge of the entire ecosystem of the framework such as VueRouter and Vuex.',
            aboutDescriptionTitle: "About Me",
            aboutDescriptionStart: "H",
            aboutDescription: "ey everyone, I'm Arthur Ayres, front-end developer, with experience working on large projects for national companies. Starting in development in 2020, I recognize myself as an enthusiast in modern market technologies, with learning acquired daily. <br><br> I have a focus on development with Javascript, Vue.js, CSS/SASS among other technologies that I use to create high level and value web applications. Currently I'm focused on deepening my knowledge in Javascript and Typescript as well as developing my skills in Node.js through studies.<br><br> I consider myself versatile and efficient in learning new technology and highly adaptable to changes! If I could define myself in 3 words, they would certainly be: optimistic, communicative and proficient!",
            contactDescriptionTitle: "Contact me",
            contactText: "Contact me through social networks, or if you prefer send a message through the form below",
            descriptionTitle: "Description",
            technologiesTitle: "Technologies used",
            social_network: {
                summary: `Social network layout based on Facebook`,
                description: `Project developed for study and self improvement based on Facebook layout.`,
                technologiesUsed: "I used the Vue.js Framework along with the Vuetify css library set.",
                technologies: "VUE, VUETIFY",
            },
            portalContribuinte: {
                summary: `Website for some northeastern city halls`,
                description: `Site developed to meet demands, such as "iptu", requirements, issuance of certificates, among others from city halls in the northeast of Brazil.`,
                technologiesUsed: "I worked as FullStack developing the front-end screens using AdminLTE 2 as the project base and Vue.js, HTML, CSS, JS and jquery, also developing the back-end with the creation of APIs using Laravel, PHP and Mysql for the database.",
                technologies: "Based on AdminLTE 2 | HTML, CSS, JS, VUE, LARAVEL",
            },
            gespag: {
                summary: `Developing new front-end layout`,
                description: `Sales management system with dobby rental.`,
                technologiesUsed: "Acting as Front-end, I used Vue.js and Vuetify to remodel the original layout and develop new features.",
                technologies: "VUE, VUETIFY",
            },
            alagoasMaior: {
                summary: `Landing Page Development`,
                description: `Landing page aimed at promoting local producers in the state of Alagoas in Brazil, the landing page contains a list of separate products and producers and filters on both sides for a better search as well as details of products and producers and contact for customers.`,
                technologiesUsed: "It was used in the Vue.js project as a base and Vuetify as a css framework, consuming an API provided for the development and completion of the landing page",
                technologies: "VUE, VUETIFY",
            },
        }),

        new MLanguage('PT-BR').create({
            menuProjects: "Projetos",
            workPersonal:"Projeto Pessoal",
            workProfessional: "Projeto Profissional",
            menuTec: "Tecnologias",
            menuAbout: "Sobre",
            menuContact: "Contato",
            moreBtn: "Clique para mais detalhes",
            emailSuccessText:"Enviado com sucesso",
            emailFailText:"Ocorreu um erro, tente novamente",
            sendBtn:"Enviar",
            accessBtn: "Acessar",
            closeBtn: "Fechar",
            technologiesDescriptionTitle: "Tecnologias e<br> Experiências",
            technologiesDescriptionStart: "D",
            technologiesDescription: 'esde o inicio como desenvolvedor web, a aproximadamente {years} anos, onde desde então aprimorei minhas habilidades com JavaScript/Vue.js e PHP/Laravel. Desenvolvi Para empresas como Unimed e Gespag utilizando Vue.js e Vuetify adquirindo conhecimento de todo o ecosistema do framework como o VueRouter e Vuex.',
            aboutDescriptionTitle: "Sobre Mim",
            aboutDescriptionStart: "O",
            aboutDescription: "lá a todos, sou Arthur Ayres, desenvolvedor front-end, com experiência de atuação em grandes projetos de empresas nacionais. Iniciando no desenvolvimento em 2020, me reconheço como entusiasta em tecnologias modernas do mercado, com aprendizado adquirido diariamente. <br><br>Possuo foco em desenvolvimento com Javascript, Vue.js, CSS/SASS dentre outras tecnologias que uso para criar aplicações web de alto nível e valor. Atualmente estou focado em aprofundar meus conhecimentos em Javascript e Typescript bem como desenvolver minhas habilidades em Node.js através de estudos. <br><br>Me considero versátil e eficiente em aprender uma nova tecnologia e alta adaptabilidade às mudanças! Se eu pudesse me definir em 3 palavras, certamente seriam: otimista, comunicativo e proficiente!",
            contactDescriptionTitle: "Contate-me",
            contactText: "Entre em contato comigo pelas redes sociais, ou se preferir envie uma mensagem através do formulário abaixo.",
            descriptionTitle: "Descrição",
            technologiesTitle: "Tecnologias usadas",
            social_network: {
                summary: `Layout de rede social basado no Facebook`,
                description: `Projeto desenvolvido para estudo e aprimoramento proprio baseado no layout do Facebook.`,
                technologiesUsed: "Utilizei o Framework Vue.js junto com o conjunto de biblotecas css Vuetify.",
                technologies: "VUE, Vuetify",
            },
            portalContribuinte: {
                summary: `Website para algumas prefeituras do nordeste`,
                description: `Website desenvolvido para atender demandas, como "iptu", requerimentos, emissão de certidões, entre outros de prefeituras do nordeste Brasileiro.`,
                technologiesUsed: "Atuei como FullStack desenvolvendo as telas do front-end utilizando AdminLTE 2 como base do projeto e Vue.js, HTML, CSS, JS e jquery, tambem desenvolvendo o back-end com a criação de APIs utilizando Laravel, PHP e Mysql para o banco de dados.",
                technologies: "Baseado no AdminLTE 2 | HTML, CSS, JS, VUE, LARAVEL",
            },
            gespag: {
                summary: `Desenvolver um novo layout front-end`,
                description: `Sistema de gerenciamento de vendas com aluguel de maquinetas.`,
                technologiesUsed: "Atuando como Front-end, utilizei Vue.js e Vuetify para remodelar o layout original e desenvolver novas features.",
                technologies: "VUE, VUETIFY",
            },
            alagoasMaior: {
                summary: `Desenvolvimento de uma Landing Page`,
                description: `Landing page voltada para a divulgação de produtores locais do estado de Alagoas no Brasil, a landing page contem lista de produtos e produtores separados e filtros em ambas as partes para melhor busca assim como detalhamento dos produtos e dos produtores e contato para clientes.`,
                technologiesUsed: "Foi utilizado no projeto Vue.js como base e Vuetify como framework css, consulmindo uma API fornecida para o desenvolvimento e preenchimento da landing page",
                technologies: "VUE, VUETIFY",
            },
        })
    ]
})