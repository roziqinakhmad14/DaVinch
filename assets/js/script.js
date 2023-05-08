// scrolling

onscroll = function() {
  if (document.documentElement.scrollTop>100) {
    document.querySelector('header').style.lineHeight = '65px';
    document.querySelector('nav').style.top = '65px';
  } else {
    document.querySelector('header').style.lineHeight = '100px';
    document.querySelector('nav').style.top = '100px';
  }
}

// lesson slider

let lessonIndex = 0;
let lessons = document.querySelectorAll('.lesson');
showLesson();

function prevLesson() {
  hideLesson();
  if (lessonIndex === 0) {
    lessonIndex = lessons.length - 1;
  } else {
    lessonIndex -= 1;
  };
  lessonIndex %= lessons.length;
  showLesson();
}
function nextLesson() {
  hideLesson();
  lessonIndex += 1;
  lessonIndex %= lessons.length;
  showLesson();
}
function hideLesson() {
  lessons[lessonIndex].style.display='none';
}
function showLesson() {
  lessons[lessonIndex].style.display='block';
}

// navbar

let navbar = false;

function showNav() {
  if (navbar == false) {
    document.querySelector('i').classList.replace('fa-bars','fa-times');
    document.querySelector('nav').style.display = 'inline-block';
    navbar = true;
  } else {
    document.querySelector('i').classList.replace('fa-times','fa-bars');
    document.querySelector('nav').style.display = 'none';
    navbar = false;
  }
}