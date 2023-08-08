total.addEventListener('mouseenter', totalJobDescriptionOn);
total.addEventListener('mouseleave', totalJobDescriptionOff);
pizzaExpress.addEventListener('mouseenter', pizzaExpressJobDescriptionOn);
pizzaExpress.addEventListener('mouseleave', pizzaExpressJobDescriptionOff);
neptik.addEventListener('mouseenter', neptikJobDescriptionOn);
neptik.addEventListener('mouseleave', neptikJobDescriptionOff);

function neptikJobDescriptionOn(){
    const neptik = document.querySelector('#jobDescription');
    const neptikJobDescription1 = document.createElement('li');
    neptikJobDescription1.classList.add('neptikJobDescription');
    neptikJobDescription1.textContent = 'Day to day, my role included gathering and cleansing large amounts of data, managing multiple inboxes, building daily email campaigns and monitoring their performance. This required me to be organised and independent in managing my workload.';
    neptik.appendChild(neptikJobDescription1);
    const neptikJobDescription2 = document.createElement('li');
    neptikJobDescription2.classList.add('neptikJobDescription');
    neptikJobDescription2.textContent = 'I independently created a series of Macros to help increase efficiency. They hugely reduced processing times across the whole team, and was praised by management.';
    neptik.appendChild(neptikJobDescription2);
    const neptikJobDescription3 = document.createElement('li');
    neptikJobDescription3.classList.add('neptikJobDescription');
    neptikJobDescription3.textContent = 'Created monthly performance reports for clients before attending video calls. Gained confidence in communicating the relevant data and information to the client.';
    neptik.appendChild(neptikJobDescription3);
    const neptikJobDescription4 = document.createElement('li');
    neptikJobDescription4.classList.add('neptikJobDescription');
    neptikJobDescription4.textContent = 'Tasks were time-sensitive, developing my ability to work under pressure whilst maintaining a high level of quality. When colleagues needed help we shared the workload, so I am used to picking up extra tasks when required. ';
    neptik.appendChild(neptikJobDescription4);
}

function neptikJobDescriptionOff(){
    const neptik = document.querySelector('#jobDescription');
    const neptikJobDescription1 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription1);
    const neptikJobDescription2 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription2);
    const neptikJobDescription3 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription3);
    const neptikJobDescription4 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription4);
}


function pizzaExpressJobDescriptionOn(){
    const pizzaExpress = document.querySelector('#jobDescription');
    const pizzaExpressJobDescription = document.createElement('li');
    pizzaExpressJobDescription.classList.add('pizzaExpressJobDescription');
    pizzaExpressJobDescription.textContent = 'For just over a year I worked as a waiter in a busy central Brighton restaurant. It was full each weekend and during school holidays, so I got used to fast-paced work environments. This meant I became very good at multitasking and looking after a high number of tables at once.'
    pizzaExpressJobDescription.style.cssText = ('transition: 1s');
    pizzaExpress.appendChild(pizzaExpressJobDescription);
}

function pizzaExpressJobDescriptionOff(){
    const pizzaExpress = document.querySelector('#jobDescription');
    const pizzaExpressJobDescription = document.querySelector('li')
    pizzaExpress.removeChild(pizzaExpressJobDescription);
}


function totalJobDescriptionOn(){
    const total = document.querySelector('#jobDescription');
    const totalJobDescription1 = document.createElement('li');
    totalJobDescription1.classList.add('totalJobDescription');
    totalJobDescription1.textContent = 'This role involved considerable attention to detail, daily tasks involved data entry, checking high volumes of information and handling queries.'
    total.appendChild(totalJobDescription1);
    const totalJobDescription2 = document.createElement('li');
    totalJobDescription2.classList.add('totalJobDescription');
    totalJobDescription2.textContent = 'I communicated via email and phone call with key stakeholders daily, helping me to develop interpersonal and communication skills. I also worked from home for a large part of my time at Total and adapted to using Microsoft Teams to keep in touch with my colleagues.'
    total.appendChild(totalJobDescription2);
}

function totalJobDescriptionOff(){
    const total = document.querySelector('#jobDescription');
    const totalJobDescription1 = document.querySelector('li')
    total.removeChild(totalJobDescription1);
    const totalJobDescription2 = document.querySelector('li')
    total.removeChild(totalJobDescription2);
}


