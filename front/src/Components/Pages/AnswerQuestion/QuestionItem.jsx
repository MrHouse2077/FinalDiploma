import React from 'react';
import Collapsible from 'react-collapsible';

function QuestionItem(){
  return (
    <Collapsible trigger="Я хочу продлить действие своего абонемента ещё на год. Как это сделать? Могу ли я рассчитывать на скидку?">
      <p>
        Льготная цена на продление годового контракта действует за 30 дней до окончания действующего контракта. Продлить ваш контракт вы можете в отделе продаж или в вашем Личном кабинете
      </p>
    </Collapsible>
    
  );
};

export default QuestionItem;