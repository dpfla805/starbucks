const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 이벤트 추가
searchEl.addEventListener('click',function(){
    //Logic (input요소에 focus를 해라!!)
    searchInputEl.focus();
});
//포커스가 추가되면
searchInputEl.addEventListener('focus',function(){
    //클래스 추가
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색')
})
//포커스가 해제되면
searchInputEl.addEventListener('blur',function(){
    //클래스 추가
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','')
})