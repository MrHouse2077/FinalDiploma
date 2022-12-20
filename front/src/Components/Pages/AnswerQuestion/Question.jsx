import Styles from "./Question.module.scss";
import React, { Component } from 'react';
import { useState } from "react";
import DefaultLayout from '../../Layouts/DefaultLayout/DefaultLayout';

function Question(props){
    let [] = useState({
        
    });
    return (
        <div>
          <DefaultLayout title="FAQ">
              <div className={"accordion wrap "+Styles.Question} id="accordionPanelsStayOpenExample">
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
                      Я хочу переоформить свой контракт на другого человека. Как я могу это сделать?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                    Для того чтобы переоформить контракт на другого человека, необходимо написать заявление. Правильно его составить Вам помогут администраторы клуба на рецепции или сотрудники отдела продаж клуба. Обращаем Ваше внимание, что переоформление контракта – это платная услуга, точную стоимость Вы можете уточнить у менеджеров клуба
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Могу ли я заниматься в вашем клубе с персональным тренером? Какова стоимость персональной тренировки?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                    Стоимость персональной тренировки зависит от продолжительности тренировки и от категории инструктора, с которым вы планируете заниматься. Более подробную информацию по стоимости других видов персональных тренировок можно узнать на рецепции клуба.
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
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Когда активируется мой контракт после даты оформления контракта?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                    Если вы покупаете годовой контракт на сайте - то активировать контракт необходимо в течение 14 дней, для этого нужно прийти в клуб. Если в течение 14-ти дней вы не пришли в клуб - ваш контракт будет автоматически активирован на 15-й день после оплаты. Контракт с помесячной оплатой активируется сразу после оплаты. Однако при первом визите в клуб вам всё равно необходимо зайти в Отдел продаж для подписания документов.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Что такое "заморозка членства"? Эта опция входит в стоимость моего членства?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                    Заморозка членства - это возможность приостановить действие контракта на время, когда вы не можете заниматься фитнесом. Например, это удобно, если вы планируете длительную командировку. Заморозка является дополнительной услугой, её вы можете приобрести в отделе продаж.
                    </div>
                  </div>
                </div>
              </div>
          </DefaultLayout>
        </div>
    );
}
export default Question;