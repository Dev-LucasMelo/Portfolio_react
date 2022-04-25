import Dsmovie from './../../../images/projetoDsmovie.jpg'
import SistemaList from './../../../images/SisListagem.jpg'
import Netflix from './../../../images/clonenetfliximg.jpg'
import gerenciadortarefas from './../../../images/gerenciadortarefas.jpg'

const Dados = [
    {
        id: 1,
        tittle: 'Gerenciador',
        typeProject: 'Fullstack',
        tecs: [
            {
                tectype: 'Backend',
                TecDesc: 'Node.js & postgreSQL'
            },
            {
                tectype: 'Frontend',
                TecDesc: 'React.js & CSS'
            },
        ],
        link: 'https://lucasmelogerenciador.netlify.app/',
        image: gerenciadortarefas
    },
    {
        id: 2,
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
        id: 3,
        tittle: 'S de listagem',
        typeProject: 'Fullstack',
        tecs: [
            {
                tectype: 'Backend',
                TecDesc: 'Node.js & postgreSQL'
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
        id: 4,
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