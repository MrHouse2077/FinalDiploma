import Styles from "./Question.module.scss";
import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import DefaultLayout from '../../Layouts/DefaultLayout/DefaultLayout';
import Requests from "../../Requests";


function Question(props){

  let [faq, setData] = useState({
    loader: true,
    question: [],
  });

  // let [num, setNum] = useState({
  //   num:1,
  // });

  function recordUS(serverRequest){
    // let copy1 = Object.assign([], num);
    // copy1.num = 2;
    // console.log(copy1);
    // setNum(copy1);
    // console.log(num);
    if(serverRequest.code == 200){
      console.log(serverRequest);
      let copy = Object.assign([], faq);
      copy.question = serverRequest.data;
      copy.loader = false;
      console.log(copy);
      setData(copy);
      console.log(faq);
    }
  }

useEffect(()=>{
  Requests({
              method: 'get', 
              url: '/qaf-get',
              callback:recordUS
  });
}, []);
    
    return (
        <div>
          <DefaultLayout title="FAQ">
              {/* <div className={"accordion wrap "+Styles.Question} id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Я хочу продлить действие своего абонемента ещё на год. Как это сделать? Могу ли я рассчитывать на скидку?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                    Льготная цена на продление годового контракта действует за 30 дней до окончания действующего контракта. Продлить ваш контракт вы можете в отделе продаж или в вашем Личном кабинете
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Я хочу заниматься в Futexo, но ни разу не был ни в одном из клубов вашей сети. Могу ли я до оформления контракта прийти в клуб, чтобы познакомиться с ним?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                    Да, у вас есть возможность прийти в любой клуб нашей сети на ознакомительный тур.В рамках гостевого тура у вас есть возможность посетить любую фитнес-зону клуба, а менеджер клуба расскажет подробно о наполнении каждой тренировочной зоны. Также подать заявку можно на рецепции интересующего клуба.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                       А если я передумаю ходить в клуб - смогу ли я вернуть деньги после оплаты контракта?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                    Да, конечно. Если вы передумали посещать в клуб и ещё не активировали контракт, то вы можете вернуть деньги. Годовой контракт, купленный на сайте, вы можете активировать в течение 14-ти дней, если вы этого не сделаете - на 15-й день после покупки контракт будет активирован автоматически. Контракт с помесячной оплатой активируется в момент покупки. Если вы захотите его расторгнуть - для этого вам нужно будет написать заявление в отделе продаж клуба, менеджеры отдела продаж объяснят вам, как будет рассчитана сумма к возврату.
                    </div>
                  </div>
                </div>
              </div> */}





          </DefaultLayout>
        </div>
    );
}
export default Question;