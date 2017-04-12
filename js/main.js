function main()
{
	var index = document.test.budget.selectedIndex;
	var option = document.test.budget.options[index].innerHTML;

	// do not repeat yourself
	// use an array or object

	// How do I build this dynamically
	// Such that it is easy to change values
	// And I do not repeat myself
    
	
	// information about the phones
	var phoneInfo = [
	// minimum budget phones
	{"ID":0, "PHONE":"Tecno Y2", "RAM":"512MB", "Internal Storage Memory":"8GB", 
	"Main Camera":"2 MP", "Front Camera":"0.3MP",
	 "Buy":"http://www.konga.com/tecno-y2-2392988", 
	 "Image Link":"https://images.konga.com/v2/media/catalog/product//Y/2/Y2-6543455.jpg?h=400&w=400&scale_mode=aspect_fit"},

	{"ID":1, "PHONE":"Alcatel Pixi", "RAM":"1GB", "Internal Storage Memory":"8GB", 
	"Main Camera":"8 MP", "Front Camera":"5MP",
	 "Buy":"http://www.konga.com/alcatel-pixi-4-5inches-1gbram-8gbrom-3100795", 
	 "Image Link":"https://images.konga.com/v2/media/catalog/product//P/i/Pixi-4-5inches-1GBRAM-8GBROM-6568565.jpg?h=400&w=400&scale_mode=aspect_fit"},

	 {"ID":2, "PHONE":"Xtouch E1", "RAM":"1GB", "Internal Storage Memory":"8GB", 
	"Main Camera":"5 MP", "Front Camera":"2MP",
	 "Buy":"http://www.konga.com/xtouch-e1-8gb-rom-1gb-ram-3151092", 
	 "Image Link":"https://images.konga.com/v2/media/catalog/product//E/1/E1---8GB-ROM---1GB-RAM-6281010.jpg?h=400&w=400&scale_mode=aspect_fit"},

	// basic buget phones
	{"ID":3, "PHONE":"Gionee P8W", "RAM":"1 GB", "Internal Storage Memory":"16 GB", 
	"Main Camera":"8 MP", "Front Camera":"5 MP",
	 "Buy":"http://www.konga.com/gionee-p8w-4g-8mp-5mp-1gb-ram-16gb-black-free-phone-ring-3227837", 
	 "Image Link":"https://images.konga.com/v2/media/catalog/product//P/8/P8W---4G---8MP-5MP---1GB-RAM---16GB---Black-Free-Phone-ring-6373770_6.jpg?h=400&w=400&scale_mode=aspect_fit"},
	 
	 {"ID":4, "PHONE":"Infinix Hot 4 Lite", "RAM":"1 GB", "Internal Storage Memory":"16 GB", 
	 "Main Camera":"8 MP", "Front Camera":"5 MP",
	 "Buy":"http://www.konga.com/gionee-p8w-4g-8mp-5mp-1gb-ram-16gb-black-free-phone-ring-3227837", 
	 "Image Link": "https://images.konga.com/v2/media/catalog/product//H/o/Hot-4-Lite---1GB-RAM---16GB---Black-6381189_2.jpg?h=400&w=400&scale_mode=aspect_fit"},
	 
	 {"ID":5, "PHONE":"Tecno L8 Lite Gold", "RAM":"1 GB", "Internal Storage Memory":"16 GB", 
	 "Main Camera":"8 MP", "Front Camera":"2 MP",
	 "Buy":"http://www.konga.com/tecno-l8-lite-gold-3236566", 
	 "Image Link":"https://images.konga.com/v2/media/catalog/product//L/8/L8-Lite---Gold-6544423.jpg?h=400&w=400&scale_mode=aspect_fit"},

	// advanced buget phones
	{"ID":6, "PHONE":"Samsung Galaxy S7 Edge", "RAM":"4 GB", "Internal Storage Memory":"32 GB", 
	"Main Camera":"12 MP", "Front Camera":"5 MP",
	 "Buy":"http://www.konga.com/samsung-galaxy-s7-edge-32gb-dual-sim-2430432?gclid=CjwKEAjw_bHHBRD4qbKukMiVgU0SJADr08ZZVH5UeBKV38KK9utOzWlYGFNpcHrOs0PgtKSXZlrCfxoCERjw_wcB", 
	 "Image Link":"https://images.konga.com/v2/media/catalog/product//G/a/Galaxy-S7---Edge---32GB---Dual-Sim-6559613_1.jpg?h=400&w=400&scale_mode=aspect_fit"},
	 
	 {"ID":7, "PHONE":"HTC 10", "RAM":"32 GB", "Internal Storage Memory":"4 GB", 
	 "Main Camera":"12 MP", "Front Camera":"5 MP",
	 "Buy":"https://www.konga.com/htc-10-32gb-rom-4gb-ram-4g-lte-gold-2621818", 
	 "Image Link": "https://images.konga.com/v2/media/catalog/product//1/0/10---32GB-ROM---4GB-RAM---4G-LTE---Gold-6263760.jpg?h=400&w=400&scale_mode=aspect_fit"},
	 
	 {"ID":8, "PHONE":"Apple Iphone 7", "RAM":"32 GB", "Internal Storage Memory":"2 GB", 
	 "Main Camera":"12 MP", "Front Camera":"7 MP",
	 "Buy":"http://www.konga.com/apple-iphone-7-32gb-3223339", 
	 "Image Link":"https://images.konga.com/v2/media/catalog/product//i/P/iPhone-7--32GB-6594031.jpg?h=400&w=400&scale_mode=aspect_fit"},
	 ];
	

	// arrays to store the code for images and specs
	var imageCode = [], specsCode = [];
	for (var k = 0; k < phoneInfo.length; k++)
	{
		// build the image link dynamically
		imageCode[k] = 	"<img src='" + phoneInfo[k]["Image Link"] + "' class='img-responsive img-rounded imageBox'>";

		// build the specs link dynamically
		specsCode[k] = "RAM: " + phoneInfo[k]["RAM"] + "<br> Internal Storage Memory:" + phoneInfo[k]["Internal Storage Memory"] + " <br> Main Camera: " + phoneInfo[k]["Main Camera"] + "<br> Front Camera: " + phoneInfo[k]["Front Camera"] + 
		" <p><a href='" + phoneInfo[k]["Buy"] + "' target='_blank'><button class='btn btn-primary btn-lg'>BUY</button></a></p>";
	}

	// assign names to the code for images/specs
	var tecnoY2Specs = specsCode[0], alcatelSpecs = specsCode[1], xtouchSpecs = specsCode[2];
	var tecnoY2Image = imageCode[0]; alcatelImage = imageCode[1], xtouchImage = imageCode[2];

	var gioneeSpecs = specsCode[3], infinixSpecs = specsCode[4], tecnoSpecs = specsCode[5];
	var gioneeImage = imageCode[3],	infinixImage = imageCode[4], tecnoImage = imageCode[5];

	var samsungSpecs = specsCode[6], htcSpecs = specsCode[7], iphoneSpecs = specsCode[8];
	var samsungImage = imageCode[6], htcImage = imageCode[7], iphoneImage = imageCode[8];

	
	// element id and recommended information
    var minimumBudget = [{"imageA":tecnoY2Image, "titleA":"Tecno Y2", "priceA":"N20,999", "specsA":tecnoY2Specs},
    {"imageB":alcatelImage, "titleB":"Alcatel Pixi", "priceB":"N25,750", "specsB":alcatelSpecs},
    {"imageC":xtouchImage, "titleC":"Xtouch E1", "priceC":"N29,500", "specsC":xtouchSpecs} ];

    var basicBudget = [{"imageA":gioneeImage, "titleA":"Gionee P8W", "priceA":"N34,500", "specsA":gioneeSpecs}, 
    {"imageB":infinixImage, "titleB":"Infinix Hot 4 Lite", "priceB":"N39,900", "specsB":infinixSpecs},
    {"imageC":tecnoImage, "titleC":"Tecno L8 Lite - Gold", "priceC":"N40,800", "specsC":tecnoSpecs}  ];

    var advancedBudget = [{"imageA":samsungImage, "titleA":"Samsung Galaxy S7 Edge", "priceA":"N234,999", "specsA":samsungSpecs}, 
    {"imageB":htcImage, "titleB":"HTC 10", "priceB":"N250,000", "specsB":htcSpecs},
    {"imageC": iphoneImage, "titleC":"Apple Iphone 7", "priceC":"N305,000", "specsC":iphoneSpecs}  ]; 


	// user selects < N30,000
	if (option === "below N30,000")
	{
		writeInfo(minimumBudget);
	}

    // user selects between N30,000 to N50,000
	if (option === "N30,000-N50,000")
	{
		writeInfo(basicBudget);
	}

	// user selects above N50,000
	if (option === "above N50,000")
	{
		writeInfo(advancedBudget);
	}

}



function writeInfo(budget)
{
	for (var i = 0; i < budget.length; i++)
		{
			for (var key in budget[i])
			{
				document.getElementById(key).innerHTML = budget[i][key];
			}
		}
}
