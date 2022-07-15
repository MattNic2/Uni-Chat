import './styles.css';
//import banner from './banner.jpeg';
import Circle from './blackcircle.png';
import Emblem from './CBUemblem.png'


function BoardHeader() {
    return (
        <>
        <div className = "h-20 bg-cover" style={{backgroundImage:'url("https://req.co/sites/default/files/styles/hero_wide/public/hero/work/REQ-CBU-Hero.jpg?itok=HmhQ6yIA")'}}>
        </div>
        <div className="bg-biome_dark-brighter">
          <div className="mx-6 relative flex">
            <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-2 border-white">
              <img src={Emblem} style={{filter:'invert(100%)'}}/>
            </div>
            <div className="pt-2 pl-4">
              <h1 className = "text-gray-300 text-3xl">CBU: Live your purpose</h1>
              <h5 className="text-gray-400">r/CBU</h5>
            </div>
          </div>
        </div>
        </>
    )
}
export default BoardHeader