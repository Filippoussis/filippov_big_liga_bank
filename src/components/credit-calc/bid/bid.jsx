import React from 'react';

function Bid() {
  return (
    <section className="bid">
      <h3>Шаг 3. Оформление заявки</h3>
      <dl>
        <div>
          <dt>Номер заявки</dt>
          <dd>№ 0010</dd>
        </div>
        <div>
          <dt>Цель кредита</dt>
          <dd>Ипотека</dd>
        </div>
        <div>
          <dt>Стоимость недвижимости</dt>
          <dd>2 000 000 рублей</dd>
        </div>
        <div>
          <dt>Первоначальный взнос</dt>
          <dd>200 000 рублей</dd>
        </div>
        <div>
          <dt>Срок кредитования</dt>
          <dd>5 лет</dd>
        </div>
      </dl>
      <div>
        <input type="text" placeholder="ФИО" />
        <input type="text" placeholder="Телефон" />
        <input type="text" placeholder="E-mail" />
      </div>
      <button className="bid__button" type="button">Отправить</button>
    </section>
  );
}

export default Bid;
