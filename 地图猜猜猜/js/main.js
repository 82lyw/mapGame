var careerism = {	current_img: 0,	current_grade: 0,	//i_boolean 1为对，2为错    Img: [		{			i_n: 1,			i_url: 'http://img4.imgtn.bdimg.com/it/u=4026254309,1256124003&fm=27&gp=0.jpg',			i_boolean: 1		},		{            i_n: 2,            i_url: 'http://img.zcool.cn/community/0110215544dc1e0000019ae9ffed69.jpg@2o.jpg',            i_boolean: 1		},		{            i_n: 3,            i_url: 'http://img15.3lian.com/2015/h1/34/d/24.jpg',            i_boolean: 2		},		{            i_n: 4,            i_url: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1310/08/c14/27091648_1381205015463_mthumb.jpg',            i_boolean: 1		}	],	init: function() {		this.bindEvent();	},	initImg: function () {		var self = this;		self.loadImg(1);	},	loadImg: function  (index) {		var self = this;		var img = self.Img[index - 1],			img_number = img.i_n,			img_imgUrl = img.i_url,			img_imgBoolean = img.i_boolean,			img_html = '';		$('.now_level').html(img_number);		$('.now_score').html(self.current_grade);		img_html = '<div class="img_option" img_index="' + self.current_img + '" img_value="' + img_imgBoolean + '"><img src="' + img_imgUrl + '" ></div>'		$('.fade_wrap').html(img_html);		self.current_img++;	},	loadOver: function () {	},	bindEvent: function () {        var self = this;        $('.wrap').on('click', '.text', function () {            $('.enter_wrap').css('display', 'none');            $('.topic_wrap').css('display', 'block');            self.initImg();        });        $('.wrap').on('click', '.enter_game', function () {            $('.enter_wrap').css('display', 'none');            $('.topic_wrap').css('display', 'none');            $('.over_wrap').css('display', 'block');        });        $('.wrap').on('click', '.judge-yes', function () {        	var _this = $(this);			console.log(self.current_img+" selected true")        	//img_count=4为关卡数        	if(self.current_img < 4) {        		$('.fade_wrap').fadeOut('normal',function () {        			self.loadImg(self.current_img + 1);        			$(this).fadeIn('normal');				})			} else{                $('.over_wrap').css('display','none');                $('.next_wrap').css('display','block');			}        });        $('.wrap').on('click', '.judge-no', function () {            var _this = $(this);            console.log(self.current_img+" selected false")            //img_count=4为关卡数            if(self.current_img < 4) {                $('.fade_wrap').fadeOut('normal',function () {                    self.loadImg(self.current_img + 1);                    $(this).fadeIn('normal');                })            } else{                $('.over_wrap').css('display','none');                $('.next_wrap').css('display','block');            }        });        $('.wrap').on('click','.over_share',function () {		})    }}