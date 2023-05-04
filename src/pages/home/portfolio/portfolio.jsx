import "../../../index.css";
import caffeStore from "/src/assets/images/portfolios/web/caffe_store.png";
import digitaize from "/src/assets/images/portfolios/web/digitaize.png";
import Appetizer from "/src/assets/images/portfolios/web/Appetizer.png";
import coto from "/src/assets/images/portfolios/web/coto.png";
import CSshop from "/src/assets/images/portfolios/web/CS-shop.png";
import carsShop from "/src/assets/images/portfolios/design/carsShop.png";
import coffeLogin from "/src/assets/images/portfolios/design/coffeLogin.png";
import musicPlayer from "/src/assets/images/portfolios/design/musicPlayer.png";
import scopeLogin from "/src/assets/images/portfolios/design/scopeLogin.png";

function Portfolio() {
  return (
    <div id="portfolios" className="bg-slate-700 py-10">
      <div className="mx-auto container max-w-[1440px]">
        <p className="text-white text-2xl text-center">Portfolio</p>
        <div className="grid md:grid-cols-3 gap-5 mx-auto max-w-[768px] my-10 px-3">
          <a href={carsShop}>
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={carsShop}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href={coffeLogin}>
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={coffeLogin}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href={musicPlayer}>
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={musicPlayer}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href={scopeLogin}>
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={scopeLogin}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href="https://github.com/mehrganakbari/coffee-store-v2.git">
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={caffeStore}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href="https://github.com/mehrganakbari/digitaizApp.git">
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={digitaize}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href="https://github.com/mehrganakbari/coto-company/tree/master/COTO">
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={coto}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href="https://github.com/mehrganakbari/Appetizer-resturant.git">
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={Appetizer}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
          <a href="https://github.com/mehrganakbari/CS-shop.git">
            <div className="transition-shadow duration-300 hover:shadow-2xl shadow-slate-100">
              <img
                src={CSshop}
                alt=""
                className="w-full border-2 border-yellow-400 rounded-md"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
