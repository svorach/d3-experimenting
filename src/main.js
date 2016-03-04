var d = {"data":[[{"start":0,"leftover":["",""],"type":"other","value":"  Paper and Paperboard","subtype":"none"},{"start":42,"leftover":["",""],"type":"large_num","value":"29,990","subtype":"none"},{"start":62,"leftover":["",""],"type":"large_num","value":"55,160","subtype":"none"}],[{"start":0,"leftover":["",""],"type":"other","value":"  Glass","subtype":"none"},{"start":43,"leftover":["",""],"type":"large_num","value":"6,720","subtype":"none"},{"start":62,"leftover":["",""],"type":"large_num","value":"15,130","subtype":"none"}],[{"start":4,"leftover":["",""],"type":"other","value":"Ferrous","subtype":"none"},{"start":42,"leftover":["",""],"type":"large_num","value":"10,300","subtype":"none"},{"start":52,"leftover":[""," 12,620 12,640 14,150 15,210 15,950 16,830 16,540 16,800"],"type":"complex","value":"12,360 12,620 12,640 14,150 15,210 15,950 16,830 16,540 16,800","subtype":"unknown"}],[{"start":4,"leftover":["",""],"type":"other","value":"Aluminum","subtype":"none"},{"start":45,"leftover":["",""],"type":"integer","value":"340","subtype":"none"},{"start":55,"leftover":["800   ","   2,810   3,190   3,330   3,410   3,500   3,510   3,580"],"type":"complex","value":"800   1,730   2,810   3,190   3,330   3,410   3,500   3,510   3,580","subtype":"unknown"}],[{"start":4,"leftover":["",""],"type":"other","value":"Other Nonferrous","subtype":"none"},{"start":45,"leftover":["",""],"type":"integer","value":"180","subtype":"none"},{"start":55,"leftover":["670   ","   1,100   1,600   1,860   1,940   2,020   2,000   2,000"],"type":"complex","value":"670   1,160   1,100   1,600   1,860   1,940   2,020   2,000   2,000","subtype":"unknown"}],[{"start":4,"leftover":["",""],"type":"other","value":"Total Metals","subtype":"none"},{"start":42,"leftover":["",""],"type":"large_num","value":"10,820","subtype":"none"},{"start":52,"leftover":[""," 15,510 16,550 18,940 20,400 21,300 22,350 22,050 22,380"],"type":"complex","value":"13,830 15,510 16,550 18,940 20,400 21,300 22,350 22,050 22,380","subtype":"unknown"}],[{"start":0,"leftover":["",""],"type":"other","value":"  Plastics","subtype":"none"},{"start":45,"leftover":["",""],"type":"integer","value":"390","subtype":"none"},{"start":53,"leftover":["","   6,830 17,130 25,550 29,380 30,260 31,290 31,840 31,750"],"type":"complex","value":"2,900   6,830 17,130 25,550 29,380 30,260 31,290 31,840 31,750","subtype":"unknown"}],[{"start":0,"leftover":["",""],"type":"other","value":"  Rubber and Leather","subtype":"none"},{"start":43,"leftover":["",""],"type":"large_num","value":"1,840","subtype":"none"},{"start":53,"leftover":["","   4,200   5,790   6,670   7,290   7,570   7,440   7,580   7,530"],"type":"complex","value":"2,970   4,200   5,790   6,670   7,290   7,570   7,440   7,580   7,530","subtype":"unknown"}],[{"start":0,"leftover":["",""],"type":"other","value":"  Textiles","subtype":"none"},{"start":43,"leftover":["",""],"type":"large_num","value":"1,760","subtype":"none"},{"start":53,"leftover":["","   2,530   5,810   9,480 11,510 12,700 13,110 13,120 14,330"],"type":"complex","value":"2,040   2,530   5,810   9,480 11,510 12,700 13,110 13,120 14,330","subtype":"unknown"}],[{"start":0,"leftover":["",""],"type":"other","value":"  Wood","subtype":"none"},{"start":43,"leftover":["",""],"type":"large_num","value":"3,030","subtype":"none"},{"start":53,"leftover":["","   7,010 12,210 13,570 14,790 15,450 15,710 15,780 15,820"],"type":"complex","value":"3,720   7,010 12,210 13,570 14,790 15,450 15,710 15,780 15,820","subtype":"unknown"}],[{"start":0,"leftover":["",""],"type":"other","value":"  Other **","subtype":"none"},{"start":46,"leftover":["",""],"type":"integer","value":"70","subtype":"none"},{"start":55,"leftover":["770   ","   3,190   4,000   4,290   4,650   4,700   4,630   4,600"],"type":"complex","value":"770   2,520   3,190   4,000   4,290   4,650   4,700   4,630   4,600","subtype":"unknown"}],[{"start":4,"leftover":["",""],"type":"other","value":"Total Materials in Products","subtype":"none"},{"start":42,"leftover":["",""],"type":"large_num","value":"54,620","subtype":"none"},{"start":52,"leftover":[""," 108,890 146,510 178,720 185,040 181,500 177,440 176,490 176,600"],"type":"complex","value":"83,280 108,890 146,510 178,720 185,040 181,500 177,440 176,490 176,600","subtype":"unknown"}]]};

var width = window.innerWidth;

var all = [];
d.data.forEach(function(data) {
	all.push(Math.max(...data[2].value.split(' ').filter(val => val).map(val => parseInt(val.replace(',', '')))));
})

var p = d3.select("body").selectAll("p")
	.data(d.data)
	.enter()
	.append("p")
	.text(function(da) {
		return da[0].value + ' - ' + da[1].value;
	}).append('div').attr('class', 'yo').attr('style', function(da) {
		var x = da[2].value.split(' ').filter(function(val) { return val }).map(function(val) { val = val.replace(',', ''); return parseInt(val) });
		
		var maxW = Math.max(...all);
		d3.select(this).text(Math.max(...x));

		return 'width: ' + maxW/Math.max(...x) + '%';
	});