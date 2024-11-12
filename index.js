const discuss= (searchText= 'Comedy') =>{
  fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)
   .then((res) => res.json())
      .then((data) => {
         data=data.posts;
        detalce(data);
      })
}

const detalce= (datas) =>{
    const cardId=document.getElementById('card');
      cardId.textContent='';

    datas.forEach(info => {
        const cardDiv=document.createElement('div');
        cardDiv.classList=`bg-[#F3F3F5] p-8 rounded-xl mb-6`;
        cardDiv.innerHTML=`<div class="flex gap-5">
        <div class="indicator relative">
          <span id="isActive">
          <span class="indicator-item badge ${info.isActive ? 'bg-green-500' : 'bg-red-500'}  absolute left-14 top-2"></span>
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

const Search = () =>{
   const searchCategorys=document.getElementById('searchCategorys');
   const searchCategorysValue=searchCategorys.value;
   console.log(searchCategorysValue)
   discuss(searchCategorysValue);
   searchCategorys.value='';
}

discuss();

const latest = () =>{
  fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
  .then((res) => res.json())
  .then((data) => {
    latestPost(data);
  })
}

const latestPost= (latestPosts) =>{
  const latestPost=document.getElementById('latestPost');
  latestPosts.forEach(postInfo => {
   const latestPostDiv=document.createElement('div');
   latestPostDiv.classList=`w-[99%] shadow-xl rounded-2xl`;
   latestPostDiv.innerHTML=`<figure class="px-6 pt-6">
        <img
          src="${postInfo.cover_image}"
          alt="Shoes"
          class="rounded-xl" />
      </figure>
      <div class="px-6 pb-6">

        <div class="flex gap-4 py-3">
          <i class="fa-solid fa-calendar-days pt-[3px]"></i>
          <h5 class="">${postInfo.author.posted_date ? postInfo.author.posted_date : "No publish date"}</h5>
        </div>

        <h2 class="text-xl font-semibold">${postInfo.title}</h2>
        <p class="py-2">${postInfo.description}</p>
       
        <div class="flex gap-4 pt-2">
          <img src="${postInfo.profile_image}" alt="" class="rounded-full h-[50px] w-[50px]">
          <div>
            <h4 class="text-base font-bold">${postInfo.author.name}</h4>
            <h6 class="text-sm font-normal">${postInfo.author.designation}</h6>
          </div>
        </div>
      </div>`;
      latestPost.appendChild(latestPostDiv);
  });
}

latest()