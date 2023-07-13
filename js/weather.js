$(function(){


	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=ff23761d0b2c8f1ae78f4c1afd920239&units=Metric',function(data){


		var $cTemp = data.main.temp; /*현재온도  */
        var $wIcon = data.weather[0].icon; //아이콘

		var now = new Date(Date.now());  
		var b = now.getDay()
		switch(b)
		{
			case 0 : c="일"
			break

			case 1 : c="월"
			break

			case 2 : c="화"
			break

			case 3 : c="수"
			break

			case 4 : c="목"
			break
			
			case 5 : c="금" 
			break
			
			case 6 : c="토" 
			break
		}	
		

        var month = now.getMonth()+1;
        var $cDate = now.getFullYear()+'년 '+month+'월 '+now.getDate()+'일 '+c+'요일 '+now.getHours()+'시 '+now.getMinutes()+'분 '; /* 현재시간 년월일 */
        var $wIcon = data.weather[0].icon;
        

        //요소의 마지막에 새로운 요소나 콘텐츠를 추가
        $('.ctemp').append($cTemp);//현재온도

        $('.cicon').append('<img src="https://openweathermap.org/img/w/' + $wIcon +  '.png"/>'); 
        $('h5').prepend($cDate); //요소의 첫번째에 새로운 요소나 컨텐츠를 추가

    })



});


	
	
	
	