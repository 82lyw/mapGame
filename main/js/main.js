var careerism = {	current_img: 0,	current_grade: 0,    current_continuity: 0,    score: "",	current_level: 1,	levelMax: 4,	baseURL: "",	userID: "",    Img: [	],	init: function() {		this.bindEvent();	},	initImg: function () {		var self = this;		self.loadImg(1);	},	loadImg: function  (index) {		var self = this;		var img = self.Img[index - 1],			img_number = img.i_n,			img_imgUrl = img.i_url,			img_imgBoolean = img.i_boolean,			img_html = '';		$('.now_level').html(self.current_level);		//$('.now_score').html(self.current_grade);		img_html = '<div class="img_option" img_index="' + self.current_img + '" img_value="' + img_imgBoolean + '"><img src="' + img_imgUrl + '" ></div>'		$('.fade_wrap').html(img_html);		self.current_img++;	},	loadOver: function () {        var self = this;	    $.ajax({            type:'GET',            url:self.baseURL+'/api/game_result',            data:{                'username': this.username            },            success:function(res,status) {                console.log(status + "," + msg)                self.score = res.data.score            },            error:function(data) {                console.log(data.status)                alert(data.message)            }        })        $('.score_num').html(self.score);	},	bindEvent: function () {        var self = this;        $('.wrap').on('click', '#submit', function () {            var username = $('input[name=username]').val(),                password = $('input[name=password]').val();            $.ajax({                type:'POST',                url:self.baseURL+'/api/game',                data:{                    'username':username,                    'password':password                },                success:function(res,status) {                	console.log(status + "," + msg)                    self.userID = res.data.game_id                    $.each(res.data.pics,function(i,temp) {                        self.Img[i] = temp                        // for(var i=0;i<self.Img.length;i++) {                        // 	console.log(self.Img[i])                        // }                    });                },                error:function(data) {                    console.log(data.status)                    alert(data.message)                }            })            $('.enter_wrap').css('display', 'none');            $('.topic_wrap').css('display', 'block');            self.initImg();        });        $('.wrap').on('click', '.enter_game', function () {            $('.enter_wrap').css('display', 'none');            $('.topic_wrap').css('display', 'none');            $('.over_wrap').css('display', 'block');        });        $('.wrap').on('click', '.judge-yes', function () {        	var _this = $(this);			console.log(self.current_img+" selected true")			$.ajax({				type:'POST',				url:self.baseURL + '/api/game',				data:{				    'pic_1':_this.Img[0],                    'pic_2':_this.Img[1],                    'select':"yes"                },				contentType:'application/json,charset=UTF-8',				success:function(res) {				    console.log(res.status + ',' + res.message)                    _this.current_grade = res.data.score                    _this.current_continuity = res.data.continuity				},				error:function(data) {				    console.log(data.status)                    alert(data.message)				}			})        	if(self.current_img < 2) {        		$('.fade_wrap').fadeOut('normal',function () {        			self.loadImg(self.current_img + 1);        			$(this).fadeIn('normal');				})			} else{                $('.over_wrap').css('display','none');                $('.next_wrap').css('display','block');			}        });        $('.wrap').on('click', '.judge-no', function () {            var _this = $(this);            console.log(self.current_img+" selected false")            $.ajax({                type:'POST',                url:self.baseURL + '/api/game',                data:{                    'pic_1':_this.Img[0],                    'pic_2':_this.Img[1],                    'select':"no"                },                contentType:'application/json,charset=UTF-8',                success:function(res) {                    console.log(res.status + ',' + res.message)                    _this.current_grade = res.data.score                    _this.current_continuity = res.data.continuity                },                error:function(data) {                    console.log(data.status)                    alert(data.message)                }            })            if(self.current_img < 2) {                $('.fade_wrap').fadeOut('normal',function () {                    self.loadImg(self.current_img + 1);                    $(this).fadeIn('normal');                })            } else{                $('.over_wrap').css('display','none');                $('.next_wrap').css('display','block');            }        });        $('.wrap').on('click', '#sure', function () {            var self = this;            self.current_level++;            $.ajax({                type:'POST',                url:self.baseURL + '/api/game',                data:{                },            })            if(self.current_level < self.levelMax) {                $('.next_wrap').css('display', 'none');                $('.topic_wrap').css('display', 'block');            } else{                $('.next_wrap').css('display', 'none');                self.loadOver();                $('.last_wrap').css('display', 'block');            }        });        $('.wrap').on('click','.share_grade',function () {		})        $('.wrap').on('click','.over_share',function () {        })    }}