import Dsmovie from './../../../images/projetoDsmovie.jpg'
import SistemaList from './../../../images/SisListagem.jpg'
import Netflix from './../../../images/clonenetfliximg.jpg'

const Dados = [

    {
        id: 1,
        tittle: 'Dsmovie',
        typeProject: 'Fullstack',
        tecs: [
            {
                tectype: 'Backend',
                TecDesc: 'Spring boot(java) & postgreSQL'
            },
            {
                tectype: 'Frontend',
                TecDesc: 'React.js & Bootstrap'
            },
        ],
        link: 'https://desenvolvedor-lucasmelodsmovie.netlify.app/',
        image: Dsmovie
    },
    {
        id: 2,
        tittle: 'Sis. de listagem',
        typeProject: 'Fullstack',
        tecs: [
            {
                tectype: 'Backend',
                TecDesc: 'Node.js & postgresql'
            },
            {
                tectype: 'Frontend',
                TecDesc: 'React.js & CSS'
            },
        ],
        link: 'https://sistema-de-listagem.netlify.app/',
        image: SistemaList
    }, 
    {
        id: 2,
        tittle: 'Netflix interface',
        typeProject: 'Frontend',
        tecs: [
            {
                tectype: 'Frontend',
                TecDesc: 'React.js & CSS'
            },
        ],
        link: 'https://dev-lucasmelo.github.io/netflix_build/',
        image: Netflix
    }

]

export default Dados