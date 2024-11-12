const discuss= () =>{
  fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
   .then(res => res.json())
      .then(data => {
         
        detalce(data.posts);
      })
}

const detalce= (datas) =>{
    const cardId=document.getElementById('card');
    datas.forEach(info => {
        const cardDiv=document.createElement('div');
        cardDiv.classList=`bg-[#F3F3F5] p-8 rounded-xl mb-6`;
        cardDiv.innerHTML=`<div class="flex gap-5">
        <div class="indicator relative">
          <span id="isActive">
          <span class="indicator-item badge bg-green-500 absolute left-14 top-2"></span>
          </span>
          <div class="bg-base-300 grid h-20 w-20 place-items-center"><img src="${info.image}" alt="" class="rounded-xl"></div>
        </div>
        <div>
          <div class="text-base font-medium">
            <span class="mr-5">#${info.category}</span>
            <span>Author : ${info.author.name}</span>
          </div>
          <h3 class="text-xl font-bold py-2">${info.title}</h3>
          <p class="text-lg font-medium py-1">${info.description}</p>
          <hr class="border-dashed border-gray-400 w-full my-4">
  
          <div class="flex justify-between p-2">
            <div class="flex gap-10">
              <div class="flex gap-2">
                <i class="fa-regular fa-message mt-[4px]"></i>
                <span >${info.comment_count}</span>
              </div>
              <div class="flex gap-2">
                <i class="fa-regular fa-eye mt-[4px]"></i>
                <span >${info.view_count}</span>
              </div>
              <div class="flex gap-2">
                <i class="fa-regular fa-clock mt-[4px]"></i>
                <span >${info.posted_time} min</span>
              </div>
            </div>
            <button onclick="cardHendel('${info.title}', ${info.view_count})" class="bg-[#10B981] text-white py-1 px-2 text-xl rounded-full">
              <i class="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>
       </div>`;
       cardId.appendChild(cardDiv);
    });  
}

const cardHendel= (title,view) =>{
     const cardHendel=document.getElementById('bookCard');

     const bookCardDiv=document.createElement('div');
     bookCardDiv.classList=`flex gap-5 bg-white p-4 rounded-lg my-5`;
     bookCardDiv.innerHTML=`<h1 class="text-xl font-bold" id="titles">${title}</h1>
          <div class="flex gap-2 mt-5">
            <i class="fa-regular fa-eye mt-[4px]"></i>
            <span>${view}</span>
          </div>`;
    cardHendel.appendChild(bookCardDiv);

   
    const counting=document.getElementById('count');
    const countingValue=counting.innerText;
    const countingCongartInt = parseInt(countingValue);
    const totleCount = countingCongartInt + 1;
    
    counting.innerText=totleCount;
}

discuss();