  (function($,window,document,undefined){

    class NB {
      init(){
        this.header();
        this.section1();
        this.section2();
        this.section5();
      }
      header(){

        const mainBtn = $('.main-btn');
        const sub = $('.sub');
        const nav = $('#nav');

        mainBtn.on({
          mouseenter(){
            sub.stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
          }
        });
        nav.on({
          mouseleave(){
            sub.stop().fadeOut(0);
          }
        });

        //검색페이지
        $('.search-icon').on({
          click: function(){
            $('#search').show();
          }
        });
        $('.container1').on({
          mouseleave: function(){
            $('#search').hide();
          }
        });


      }
      section1(){

        const slideWrap = $('.slide-wrap');
        const prevBtn = $('.prev-btn');
        const nextBtn = $('.next-btn');
        const pageBtn = $('.page-btn');
        let winW = $('.slide-view').innerWidth();
        var cnt = 0;

        function mainSlide(){
          slideWrap.stop().animate({left:-winW*cnt}, 400, 'easeInOutExpo', function(){
            if(cnt>3){cnt=0}
            if(cnt<0){cnt=3}
            slideWrap.stop().animate({left:-winW*cnt}, 0);
          })
          pageEvent();
        }

        // 페이지 이벤트 함수
        function pageEvent(){
          pageBtn.removeClass('currentPage');
          pageBtn.eq(cnt>3?0:cnt).addClass('currentPage');
        }

        pageBtn.each(function(idx){
          const $this = $(this);
            $this.on({
              click: function(e){
                e.preventDefault();
                cnt = idx;
                mainSlide();
                //console.log(idx);
              }
            });
        });

        function nextCount(){
          cnt++;
          mainSlide();
        }
        function prevCount(){
          cnt--;
          mainSlide();
        }
        setInterval(nextCount,13000);

        //prev/next 버튼 클릭 이벤트
        prevBtn.on({
          click: function(e){
            e.preventDefault();
            prevCount();
          }
        });
        nextBtn.on({
          click: function(e){
            e.preventDefault();
            nextCount();
          }
        });

      }
      section2(){

        const sec2 = $('#section2');
        const sec2MenuBtn = $('.sec2Menu-btn');
        const sub2Content = $('.sub2-content');

        sec2MenuBtn.click(function(e){
          const $this = $(this);
          e.preventDefault();

          sec2.removeClass('addChange');
          sec2MenuBtn.removeClass('addChange');
          $this.addClass('addChange');
          

          sub2Content.stop().fadeOut(0);
          $this.next().stop().fadeIn(300);
        });

      }
      section5(){

        const sec5 = $('#section5');
        const sec5MenuBtn = $('.sec5Menu-btn');
        const sub5Content = $('.sub5-content');

        sec5MenuBtn.click(function(e){
          const $this = $(this);
          e.preventDefault();
          
          sec5.removeClass('addChange');
          sec5MenuBtn.removeClass('addChange');
          $this.addClass('addChange');

          sub5Content.stop().fadeOut(0);
          $this.next().stop().fadeIn(300);
        });

      }
    }
    const newNB = new NB(); 
    newNB.init();

  })(jQuery,window,document,);