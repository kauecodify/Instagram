import Stories from "./Stories"
import Post from "./Post"
import './ConteudoCentral.css'
import Storie1 from '../../imagens/perfil.png'
import Storie2 from '../../imagens/perfil.png'
import Storie3 from '../../imagens/perfil.png'
import Storie4 from "../../imagens/perfil.png"
import Storie5 from '../../imagens/perfil.png'
import Storie6 from '../../imagens/perfil.png'
import Storie7 from '../../imagens/perfil.png'
import PostFoto from '../../imagens/perfil.png'
import PostFoto2 from '../../imagens/perfil.png'
import TopMobile from "./TopMobile"
function ConteudoCentral () {
  return (
    <div className="conteudoCentral">
        <TopMobile/>
        <div className="containerStories">
            <Stories fotoStorie = {Storie1}
            nomeStorie = 'perfil'
            />
            <Stories fotoStorie = {Storie2}
            nomeStorie = 'perfil'/>
            <Stories fotoStorie = {Storie3}
            nomeStorie = 'perfil'/>
            <Stories fotoStorie = {Storie4}
            nomeStorie = 'perfil'/>
             <Stories fotoStorie = {Storie5}
            nomeStorie = 'perfil'/>
            <Stories fotoStorie = {Storie6}
            nomeStorie = 'perfil'/>    
            <Stories fotoStorie = {Storie7}
            nomeStorie = 'perfil'/>    
        </div>
        <div className="containerPost">   
            <Post fotoUser={Storie1} title='L7' imgPostagem={PostFoto} titledown='Hi' titlepostagem='Faça valer' />
            <Post fotoUser={Storie2} title='Homer diz' imgPostagem={PostFoto2} titledown='Olá' titlepostagem='Veja eu ficando calvo...' />
        </div>
    </div>
  )
}

export default ConteudoCentral