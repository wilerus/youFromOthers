(function() {

var tabSelected=1;

  var app = angular.module('helloPage', ["ngAnimate",'ui.router'])    

  .config(['$urlRouterProvider','$stateProvider','$animateProvider',function($urlRouterProvider,$stateProvider,$animateProvider){
$urlRouterProvider.otherwise('mainPage');

$stateProvider
  .state('mainPage',{
    url:'/mainPage',
    templateUrl:'pages/ru/mainPage.htm'
  })

   .state('utoPrograms',{
    url:'/utoPrograms',
    templateUrl:'pages/ru/utoPrograms.htm'
  })

  .state('utoTools',{
    url:'/utoTools',
    templateUrl:'pages/ru/utoTools.htm'
  })

  .state('utoAnswers',{
    url:'/utoAnswers',
    templateUrl:'pages/ru/utoAnswers.htm'
  })

  .state('utoResultsPactis',{
    url:'/utoResultsPactis',
    templateUrl:'pages/ru/utoResultsPactis.htm'
  })


  .state('utoResultsOrganis',{
    url:'/utoResultsOrganis',
    templateUrl:'pages/ru/utoResultsOrganis.htm'
  })
///---страницы на английском
  .state('utoSkills',{
    url:'/utoSkills',
    templateUrl:'pages/ru/utoSkills.htm'
  })

  .state('utoTrainings',{
    url:'/utoTrainings',
    templateUrl:'pages/ru/utoTrainings.htm'
  })

  }]);

  app.controller('pageController', function(){
      tabSelected=5;
    checkNavBar();
  
    this.programs = programs;
    this.startWords = startWords;
    this.businesTasks = businesTasks;
    this.businesParts = businesParts;
    this.practic= practic;
    this.future= future;
    this.traningForms= traningForms;
    this.comments= comments;
  });

function checkNavBar(){

if ($('.navbar').css('opacity')==0&&tabSelected!=1){
 $('.navbar').animate({opacity:'1',top:'0'},600,function(){
  $('.navbar').css('display','block');
 });
}else{
  if (tabSelected==1)
 $('.navbar').animate({opacity:'0',top:'0'},600,function(){
  $('.navbar').css('display','none');
 });
}

$('.navbar').height()>56 ?
  $(".navbar-toggle").trigger( "click" )
  :null;        

}

app.controller('basicSkillCtrl',['$scope','$timeout', function($scope,$timeout){

checkNavBar();

var tabSel;

var init = function () {
 
  tabSelected=2;

  checkNavBar();
};
init();

}]);


app.controller('angularCtrl',['$scope','$timeout','$http', function($scope,$timeout,$http){

checkNavBar();

var tabSel;

var init = function () {
 
  tabSelected=2;

  checkNavBar();
};

init();

var containerHeight;
}]);

app.controller('practiceCtrl',['$scope','$timeout', function($scope,$timeout){


checkNavBar();

var tabSel;

var init = function () {
 
  tabSelected=2;

  checkNavBar();
};

init();

var containerHeight;
}]);

app.controller('TabController', function(){

    this.setTab = function(newValue){
      this.tab = newValue;
      tabSelected=newValue;       
        
    };

    this.isSet = function(tabName){

      return this.tab === tabName;
     
    };
});

  app.controller('landPageCtrl', ['$scope', function($scope,$timeout){


 TweenLite.set("#centerBlock", {autoAlpha:0, marginBottom:100});
    angular.element(document).ready(function () {

TweenLite.to("#centerBlock", 0.9, {autoAlpha:1, marginBottom:0, delay:0.5});
    });

document.getElementById('toMainPart').onclick=function(){
  $(window).scrollTop($(window).height());
};

document.getElementById('modalWindowClose').onclick=function(){
  document.getElementById('modalWindow').style.display='none';
};
/*
document.getElementById('dialogConflict').onclick=function(){
  document.getElementById('modalWindow').style.display='block';

var secondLeft=$(window).width()/3 -5;

var thirdLeft=($(window).width()/3)*2 - 10;

var timeLine = new TimelineLite();

  timeLine.to(document.getElementById('modalWindow'), 0.3, {opacity:1});
  timeLine.to($('.modalContainer'), 0, {display:'block'});
  timeLine.to($('.modalContainer'), 0.3, {top:0});  
  timeLine.to(document.getElementById('modalContainerSecond'), 0.3, {left:secondLeft});  
  timeLine.to(document.getElementById('modalContainerThird'), 0.3, {left:thirdLeft},'-=0.3');

  timeLine.play();
};
*/
document.getElementById('modalWindowMore').onclick=function(){

var timeLine = new TimelineLite();

  timeLine.to(document.getElementById('modalContainerFirst'), 0.3, {rotationX:-30});
  timeLine.to(document.getElementById('modalContainerSecond'), 0.3, {rotationX:-30},'-=0.15');
  timeLine.to(document.getElementById('modalContainerThird'), 0.3, {rotationX:-30},'-=0.15');
  timeLine.to($('.modalContainerOverlap'), 0.8, {top:0});
  timeLine.to($('.modalContainer'), 0, {display:'none'});
  //timeLine.to(document.getElementById('mcoSecond'), 0.5, {left:secondLeft});  
  //timeLine.to(document.getElementById('mcoThird'), 0.5, {left:thirdLeft},'-=0.5');
  timeLine.to(document.getElementById('mcoFirst'), 0.3, {rotationX:0});
  timeLine.to(document.getElementById('mcoSecond'), 0.3, {rotationX:0},'-=0.15');
  timeLine.to(document.getElementById('mcoThird'), 0.3, {rotationX:0},'-=0.15');

  timeLine.play();
};

/*
$('#landPageBody').scroll(function(){
  alert($('#landPageBody').scrollTop());
});
*/
$('#slickID').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false
});

$('#gallaryId').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: false
});


 $(function() {
    FastClick.attach(document.body);
});
 
$(window).scroll(function(){

//$(window).animate({
  //  scrollTop: $(window).height()+'px'
 //}, 2000);

 //$(window).animate({scrollTop:$(window).height()},600);

 // $(window).scrollTop($(window).height());
});
tabSelected=1;
checkNavBar();
  }]);

  app.controller('GalleryController', function(){checkNavBar();});


window.onload = function() {checkNavBar();};

})();