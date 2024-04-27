

import './ConteudoLateralDireita.css'
import '../../componentes/ladoDireito/SugestoesPessoas.css'
import SeuPerfil from './SeuPerfil'
import SugestoesPessoas from './SugestoesPessoas'
import InfoMeta from './InfosMeta'
import Perfil1 from '../../imagens/perfil.png'
import Perfil2 from '../../imagens/perfil.png'
import Perfil3 from '../../imagens/perfil.png'
import Perfil4 from '../../imagens/perfil.png'
import Perfil5 from '../../imagens/perfil.png'

function ConteudoLateralDireita() {
  return (
    <div className='ConteudoLateralDireita'>
        <div className='containerContentDireita'>
            <SeuPerfil/>
        <div className='SugestoesPessoas'>
            <div className='topSide'>
                <p>Sugestões para você</p>
                <button>Ver tudo</button>
            </div>
            <div className='bottomSide'>
                <SugestoesPessoas imgPerfil={Perfil1} nome ='perfil' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil2}  nome ='perfil' acao='Seguido(a) por Neymar' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil3}  nome ='perfil' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil4} nome ='perfil' acao='Seguido(a) por Mbappe' seguir='Seguindo' />
                <SugestoesPessoas imgPerfil={Perfil5}  nome ='perfil' acao='Seguido(a) Por Muller' seguir='Seguindo'/>
            </div>   
        </div>
        <InfoMeta/>
    </div>
  
    </div>
  )
}

export default ConteudoLateralDireita