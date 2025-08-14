const btn=document.getElementById('btn')

const nav=document.getElementById('meno-nav-hamberger')


// btn.addEventListener('click',function(){
//     nav.classList.toggle('active')
//     btn.classList.toggle('active')
// })

function btnMeno(){
    document.getElementById('meno-nav-hamberger').style.display='block';
}

function showMeno(){
    document.getElementById('meno-nav-hamberger').style.display='none';
}

const blackTam=document.getElementById('light-tam-buttom');
const whiteTam=document.getElementById('night-tam-buttom');

whiteTam.addEventListener('click',function(){
    document.body.style.backgroundColor='rgb(39 39 39)'
    document.body.style.color='white'
})
blackTam.addEventListener('click',function(){
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
})

const videos=[
    {
        title:'اموزش سرمایه گذاری معتبر با توجه به مقدار سرمایه و سود وکیفیت خدمات',
        thumbnail:'./26-facts-about-talent-1730629912.jpeg',
        explanation:'.شما میتوانید با ما سرمایه گذاری امن و معتبر را در بازار های بین الملل تجربه کنید',
        price:'رایگان'
    },
    {
        title:'اموزش رباتیک(صفر تا صد+مینی پروژه )',
        thumbnail:'./InShot_۲۰۲۵۰۸۱۰_۱۶۲۵۳۵۲۱۵.jpg',
        explanation:'رباتیک یکی از مباحث جذاب و کابردی در امروزه . دوره ی رباتیک می تواند شما را به سمت جهان بی نهایت جذاب برنامه نویسی و ساخت و ساز هدایت کند',
        price:'رایگان'
    },
    {
    title:'اموزش هوش مصنوعی',
    thumbnail:'./InShot_۲۰۲۵۰۸۱۰_۱۶۵۴۴۷۱۸۵.jpg',
    explanation:'میتوان گفت که هوش مصنوعی از مهم ترین موضوعات امروزه است .هوش مصنوعی ساختاری از کد های پیچیده و کتابخانه های بزرگ است ',
    price:'رایگان'
    },
    {
    title:'اموزش هوش مصنوعی',
    thumbnail:'./InShot_۲۰۲۵۰۷۲۷_۰۰۰۷۰۴۴۰۳.png',
    explanation:'میتوان گفت که هوش مصنوعی از مهم ترین موضوعات امروزه است .هوش مصنوعی ساختاری از کد های پیچیده و کتابخانه های بزرگ است ',
    price:'رایگان'
    },
]

const container = document.getElementById("video-container");

videos.forEach(video => {
  const box = document.createElement("div");
  box.classList.add("video-box");

  box.innerHTML =`
    <img src="${video.thumbnail}" alt="${video.title}">
    <h3 class="video-title">${video.title}</h3>
    <p class='p-box'>${video.explanation}</p>
    <p class='p-box-price'>${video.price}</p>`
  ;

  container.appendChild(box);
});

const input = document.getElementById('search');

    input.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  document.querySelectorAll('#video-container .video-box').forEach(box => {
    const title = (box.querySelector('.video-title')?.textContent || '').toLowerCase();
    box.style.display = title.includes(q) ? '' : 'none';
  });
})
