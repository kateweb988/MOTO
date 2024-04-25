document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});
document.addEventListener("DOMContentLoaded", () => {
  $(function () {
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      slidesToScroll: 1,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider',
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/top1.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/own1.svg"></button>',
      vertical: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {
  $('.catalog__filters a').on('click', function (e) {
    e.preventDefault();
    var data = $(this).attr('data-id');

    if ($('.catalog__filters a[data-id=' + data + ']').hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $('.catalog__filters a').removeClass('active');

      $(this).addClass('active');
    }
  });
});
$(document).ready(function () {
  $('.menu__left li a').mouseover(function () {
    myvar = this.id;
    $(".mydiv").hide();
    $('#div' + myvar).show();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.catalog__open').click(function (event) {
    $(this).css('display', 'none');
    $('.catalog__see').slideToggle();
    $('.swiper-button-prev2').addClass('opened');
    $('.swiper-button-next2').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.catalog__open2').click(function (event) {
    $(this).css('display', 'none');
    $('.catalog__see2').slideToggle();
    $('.swiper-button-prev3').addClass('opened');
    $('.swiper-button-next3').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.catalog__open3').click(function (event) {
    $(this).css('display', 'none');
    $('.catalog__see3').slideToggle();
    $('.swiper-button-prev4').addClass('opened');
    $('.swiper-button-next4').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.catalog__open4').click(function (event) {
    $(this).css('display', 'none');
    $('.catalog__see4').slideToggle();
    $('.swiper-button-prev5').addClass('opened');
    $('.swiper-button-next5').addClass('opened');
    return false;
  });
});
$(document).ready(function () {
  let items = document.querySelectorAll('.menu__left li');

  // Loopeo y agrego evento
  items.forEach(item => item.addEventListener('mouseenter', function () { handleHover(this, items) }))


  function handleHover(el, objects) {
    // Desattachando la clase green te ahorras el evento de mouseleave
    items.forEach(item => {
      item.classList.remove('active')
    })

    // Aplico lo que necesito
    el.classList.add('active')
  }
});
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
    })
    $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
      },
      "Please check your input."
    );
    function valEl(el) {

      el.validate({
        rules: {
          tel: {
            required: true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          tel: {
            required: 'Заполните поле',
            regex: 'Телефон может содержать символы + - ()'
          },
          name: {
            required: 'Заполните поле',
          },
          text: {
            required: 'Заполните поле',
          },
          email: {
            required: 'Заполните поле',
            email: 'Неверный формат E-mail'
          }
        },
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch ($formId) {
            case 'popupResult':
              $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
              })
                .always(function (response) {
                  setTimeout(function () {
                    $('#loader').fadeOut();
                  }, 800);
                  setTimeout(function () {
                    $.arcticmodal('close');
                    $('#popup-thank').arcticmodal({});
                    $form.trigger('reset');
                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                  }, 1100);

                });
              break;
          }
          return false;
        }
      })
    }

    $('.js-form').each(function () {
      valEl($(this));
    });
    $('[data-scroll]').on('click', function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
    })
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Scrollto
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 0 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var basicScrollTop = function () {
    var btnTop = document.querySelector('.up');
    var btnReveal = function () {
      if (window.scrollY >= 400) {
        btnTop.classList.add('is-visible');
      } else {
        btnTop.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', btnReveal);
  };
  basicScrollTop();
});
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $("#up").on('click', function () {
      $("#incdec input").val(parseInt($("#incdec input").val()) + 1);
    });

    $("#down").on('click', function () {
      $("#incdec input").val(parseInt($("#incdec input").val()) - 1);
    });

  });
});
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $("#up2").on('click', function () {
      $("#incdec2 input").val(parseInt($("#incdec2 input").val()) + 1);
    });

    $("#down2").on('click', function () {
      $("#incdec2 input").val(parseInt($("#incdec2 input").val()) - 1);
    });

  });
});
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
document.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    var elActive = '';
    $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
        color: "#888888", // color
        backgroundColor: "#FFFFFF", // background
        change: function () { }, // event change
      }, options);

      return this.each(function () {

        var selectParent = $(this);
        list = [],
          html = '';

        //parameter CSS
        var width = $(selectParent).width();

        $(selectParent).hide();
        if ($(selectParent).children('option').length == 0) { return; }
        $(selectParent).children('option').each(function () {
          if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
          list.push({
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })

        // style
        var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

        html += "<ul class='selectCF'>";
        html += "<li>";
        html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
        html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
        html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
        html += "<ul>";
        $.each(list, function (k, v) {
          s = (v.selected == 1) ? "selected" : "";
          html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
        })
        html += "</ul>";
        html += "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

        // handle active select
        $(customSelect).unbind('click').bind('click', function (e) {
          e.stopPropagation();
          if ($(this).hasClass('onCF')) {
            elActive = '';
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          } else {
            if (elActive != '') {
              $(elActive).removeClass('onCF');
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })

        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function (e) {
          var value = $(this).attr('value');
          if ($(this).hasClass('selected')) {
            //
          } else {
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })

        // handle search 
        $(seachEl).children('input').bind('keyup', function (e) {
          var value = $(this).val();
          if (value) {
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function () {
              if ($(this).text().search(new RegExp(value, "i")) < 0) {
                // not item
                $(this).fadeOut();
              } else {
                // have item
                $(this).fadeIn();
              }
            })
          } else {
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })

      });
    };
    $(document).click(function () {
      if (elActive != '') {
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }(jQuery));

  $(function () {
    var event_change = $('#event-change');
    $(".select").selectCF({
      change: function () {
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log(value + ' : ' + text);
        event_change.html(value + ' : ' + text);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == "accordeon__button closed") {
      this.className = "accordeon__button active";
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons2 = document.getElementsByClassName("accordeon__button2");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons2.length; i++) {
    var accordeonButton2 = accordeonButtons2[i];

    accordeonButton2.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass2 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons2.length; i++) {
      accordeonButtons2[i].className = "accordeon__button2 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels2 = document.getElementsByClassName("accordeon__panel2");
    for (var z = 0; z < pannels2.length; z++) {
      pannels2[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass2 == "accordeon__button2 closed") {
      this.className = "accordeon__button2 active";
      var panel2 = this.nextElementSibling;
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons3 = document.getElementsByClassName("accordeon__button3");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons3.length; i++) {
    var accordeonButton3 = accordeonButtons3[i];

    accordeonButton3.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass3 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons3.length; i++) {
      accordeonButtons3[i].className = "accordeon__button3 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels3 = document.getElementsByClassName("accordeon__panel3");
    for (var z = 0; z < pannels3.length; z++) {
      pannels3[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass3 == "accordeon__button3 closed") {
      this.className = "accordeon__button3 active";
      var panel3 = this.nextElementSibling;
      panel3.style.maxHeight = panel3.scrollHeight + "100px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons4 = document.getElementsByClassName("accordeon__button4");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons4.length; i++) {
    var accordeonButton4 = accordeonButtons4[i];

    accordeonButton4.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass4 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons4.length; i++) {
      accordeonButtons4[i].className = "accordeon__button4 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels4 = document.getElementsByClassName("accordeon__panel4");
    for (var z = 0; z < pannels4.length; z++) {
      pannels4[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass4 == "accordeon__button4 closed") {
      this.className = "accordeon__button4 active";
      var panel4 = this.nextElementSibling;
      panel4.style.maxHeight = panel4.scrollHeight + "100px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons5 = document.getElementsByClassName("accordeon__button5");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons5.length; i++) {
    var accordeonButton5 = accordeonButtons5[i];

    accordeonButton5.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass5 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons5.length; i++) {
      accordeonButtons5[i].className = "accordeon__button5 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels5 = document.getElementsByClassName("accordeon__panel5");
    for (var z = 0; z < pannels5.length; z++) {
      pannels5[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass5 == "accordeon__button5 closed") {
      this.className = "accordeon__button5 active";
      var panel5 = this.nextElementSibling;
      panel5.style.maxHeight = panel5.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons6 = document.getElementsByClassName("accordeon__button6");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons6.length; i++) {
    var accordeonButton6 = accordeonButtons6[i];

    accordeonButton6.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass6 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons6.length; i++) {
      accordeonButtons6[i].className = "accordeon__button6 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels6 = document.getElementsByClassName("accordeon__panel6");
    for (var z = 0; z < pannels6.length; z++) {
      pannels6[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass6 == "accordeon__button6 closed") {
      this.className = "accordeon__button6 active";
      var panel6 = this.nextElementSibling;
      panel6.style.maxHeight = panel6.scrollHeight + "100px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  //popup1
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.a1');
  let closePopupButton = document.querySelector('.close-popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
    })
  });

  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup2
  let popupBg2 = document.querySelector('.popup__bg2');
  let popup2 = document.querySelector('.popup2');
  let openPopupButtons2 = document.querySelectorAll('.a2');
  let closePopupButton2 = document.querySelector('.close-popup2');

  openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg2.classList.add('active');
      popup2.classList.add('active');
    })
  });

  closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg2) {
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup3
  let popupBg3 = document.querySelector('.popup__bg3');
  let popup3 = document.querySelector('.popup3');
  let openPopupButtons3 = document.querySelectorAll('.a3');
  let closePopupButton3 = document.querySelector('.close-popup3');

  openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg3.classList.add('active');
      popup3.classList.add('active');
    })
  });

  closePopupButton3.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg3) {
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup4
  let popupBg4 = document.querySelector('.popup__bg4');
  let popup4 = document.querySelector('.popup4');
  let openPopupButtons4 = document.querySelectorAll('.a4');
  let closePopupButton4 = document.querySelector('.close-popup4');

  openPopupButtons4.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg4.classList.add('active');
      popup4.classList.add('active');
    })
  });

  closePopupButton4.addEventListener('click', () => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg4) {
      popupBg4.classList.remove('active');
      popup4.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg4.classList.remove('active');
      popup4.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup5
  let popupBg5 = document.querySelector('.popup__bg5');
  let popup5 = document.querySelector('.popup5');
  let openPopupButtons5 = document.querySelectorAll('.a5');
  let closePopupButton5 = document.querySelector('.close-popup5');

  openPopupButtons5.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg5.classList.add('active');
      popup5.classList.add('active');
    })
  });

  closePopupButton5.addEventListener('click', () => {
    popupBg5.classList.remove('active');
    popup5.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg5) {
      popupBg5.classList.remove('active');
      popup5.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg5.classList.remove('active');
      popup5.classList.remove('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4
      }
    }
  });
  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4
      }
    }
  });
  const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
    pagination: {
      el: ".swiper-pagination4",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4
      }
    }
  });
  const swiper5 = new Swiper('.swiper5', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    },
    pagination: {
      el: ".swiper-pagination5",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4
      }
    }
  });
  const swiper6 = new Swiper('.swiper6', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next6',
      prevEl: '.swiper-button-prev6',
    },
    pagination: {
      el: ".swiper-pagination6",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  });
  const swiper7 = new Swiper('.swiper7', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next7',
      prevEl: '.swiper-button-prev7',
    },
    pagination: {
      el: ".swiper-pagination7",
      type: "fraction",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination7",
          type: "bullets",
          clickable: true,
        },
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination7",
          type: "bullets",
          clickable: true,
        },
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination7",
          type: "bullets",
          clickable: true,
        },
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 2
      }
    }
  });
  const swiper8 = new Swiper('.swiper8', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next8',
      prevEl: '.swiper-button-prev8',
    },
    pagination: {
      el: ".swiper-pagination8",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 1
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 1
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn2 = document.querySelector('.menu-btn2');
  let menu2 = document.querySelector('.menu2');
  menuBtn2.addEventListener('click', function () {
    menuBtn2.classList.toggle('active');
    menu2.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn3 = document.querySelector('.menu-btn3');
  let menu3 = document.querySelector('.menu3');
  menuBtn3.addEventListener('click', function () {
    menuBtn3.classList.toggle('active');
    menu3.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn4 = document.querySelector('.menu-btn4');
  let menu4 = document.querySelector('.menu4');
  menuBtn4.addEventListener('click', function () {
    menuBtn4.classList.toggle('active');
    menu4.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn5 = document.querySelector('.menu-btn5');
  let menu5 = document.querySelector('.menu5');
  menuBtn5.addEventListener('click', function () {
    menuBtn5.classList.toggle('active');
    menu5.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn6 = document.querySelector('.menu-btn6');
  let menu6 = document.querySelector('.menu6');
  menuBtn6.addEventListener('click', function () {
    menuBtn6.classList.toggle('active');
    menu6.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn7 = document.querySelector('.menu-btn7');
  let menu7 = document.querySelector('.menu7');
  menuBtn7.addEventListener('click', function () {
    menuBtn7.classList.toggle('active');
    menu7.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn9 = document.querySelector('.menu-btn9');
  let menu9 = document.querySelector('.menu9');
  menuBtn9.addEventListener('click', function () {
    menuBtn7.classList.toggle('active');
    menu9.classList.toggle('active');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider');
  const toSlider = document.querySelector('#toSlider');
  const fromInput = document.querySelector('#fromInput');
  const toInput = document.querySelector('#toInput');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider2');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider2');
  const toSlider = document.querySelector('#toSlider2');
  const fromInput = document.querySelector('#fromInput2');
  const toInput = document.querySelector('#toInput2');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider3');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider3');
  const toSlider = document.querySelector('#toSlider3');
  const fromInput = document.querySelector('#fromInput3');
  const toInput = document.querySelector('#toInput3');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});


document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider4');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider4');
  const toSlider = document.querySelector('#toSlider4');
  const fromInput = document.querySelector('#fromInput4');
  const toInput = document.querySelector('#toInput4');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider5');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider5');
  const toSlider = document.querySelector('#toSlider5');
  const fromInput = document.querySelector('#fromInput5');
  const toInput = document.querySelector('#toInput5');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E0E5EB', '#00603A', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider6');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider6');
  const toSlider = document.querySelector('#toSlider6');
  const fromInput = document.querySelector('#fromInput6');
  const toInput = document.querySelector('#toInput6');
  fillSlider(fromSlider, toSlider, '#E0E5EB', '#00603A', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});