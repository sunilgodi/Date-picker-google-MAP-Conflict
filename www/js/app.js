

	var TIMEZONEVALUE = 5; 


	var primaryColor = "#F15625";
	var secondaryColor = "#F15625";
	var appVersion = "1.0.0";    // the current version of the app





	var singleService = '<table id="service1"> <tbody> <tr> <td style="width:50%;padding:0"> <div id="home__SERVICENAME0__" style="margin-right:16px;"> <div style="text-align:center;padding-top:5px"> <i class="mdi __SERVICEIMG0__ mdi-48px tss-color-primary"></i> </div> <br> <div class="tss-homeservicelabel1" onclick="clickFunction1();">__SERVICELABEL0__</div> <br> <div class="tss-homeservicedesc1" >__SERVICEDESC0__</div> </div> </td> <td style="width:1px;padding:0;"> <div class="tss-divider-left" >&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> <div class="tss-divider-left" >&nbsp;</div> <div class="tss-divider-left">&nbsp;</div> </td> <td style="width:49%;padding:0"> <div id="home__SERVICENAME1__" style="margin-left:2px;"> <div style="text-align:center;padding-top:5px"> <i class="mdi __SERVICEIMG1__ mdi-48px tss-color-primary"></i> </div> <br> <div class="tss-homeservicelabel1">__SERVICELABEL1__</div> <br> <div class="tss-homeservicedesc1" onclick="clickFunction2();">__SERVICEDESC1__</div> </div> </td> </tr> </tbody> </table> <div class="col s12" style="padding:0px;margin-top:20px"> <div class="divider">&nbsp;</div> </div>';

var dualService = '<div id="home__SERVICENAME__" style="padding:20px 0px;width:100%"> <div class="row" style="margin-bottom:15px"> <div class="col s12 tss-homeservicelabel2 tss-color-primary tss-nopadding" style="font-size:20px;opacity:0.87">__SERVICELABEL__</div> </div> <div class="row tss-nomargin" style="display:flex;align-items:center"> <div class="col s2 tss-nopadding"> <i class="mdi __SERVICEIMG__ mdi-48px tss-color-primary"></i> </div> <div class="col s10 tss-nopadding"> <div style="vertical-align:middle"> <p class="tss-homeservicedesc2">__SERVICEDESC__</p> </div> </div> </div> </div> <div class="col s12 tss-nopadding"> <div class="divider">&nbsp;</div> </div>';


	
	
	var loginFlag = false;
	
	var userInput1 = "";	// to store user input until required
	var userInput2 = "";	// to store user input until required
	var userInput3 = "";	// to store user input until required
	var userInput4 = "";	
	
	var valHtml = "";     // to store html from validate page
	var ExtraAmountHash = [];
	
	var updateLink = "";		// to store the playstore link for the app
	
	var msisdnREG = "";			// to store msisdn during registration
	var imeiChangeFlag = 0;		// to be used during imei change {0 -  normal flow, 1 - imei change flow}
	var resetPinFlag = 0;		// to be used during reset of pin {0 - normal flow, 1 - reset pin flow}
	
	var sideDrawerFlag = 0; 	// to check if side drawer is open {0-closed, 1-open}
	var loadingFlag = 0;		// to check if loading screen is shown or not {0-hidden, 1 -shown}
	
	var page = 0;   				// variable to keep track of current page for handling back and other functions. see index on top
	
	var screenWidth = 0;					//to store screen width
	var loadingFlagUNLOCK = 0;
	var navMaxHeight = 0;					//to get 3:2 width:height ratio
	var navMinHeight = 0;					// to store minimum width
	var navDeltaHeight = 0;					// to store diff b/w max and min height
	
	var imageSizeMax = 0;					//Max size of profile image
	var imageSizeMin = 0;					//Min size of profile image
	//var imageSizeDelta = 0;
	
	var imageScaleMax = 2.1;
	var imageScaleMin = 1.0;
	var imageScaleDelta = imageScaleMax - imageScaleMin;
					
	var imageMinTop = 0;					//Min value for top of profile header info
	var imageMaxTop = 0;					//Max value for top of profile header info
	var imageDeltaTop = 0;
	
	var imageMinLeft = 0;					//Min value for left of profile header info
	var imageMaxLeft = 0;					//Max value for left of profile header info
	var imageDeltaLeft = 0;
	
	var currencyScaleMax = 0;
	var currencyScaleMin = 0;
	var currencyScaleDelta = 0;
	
	var sideNavWidth = 0;
	
	var image = new Image();  			// object to store profile image
	var img = new Image();
	var getCanvas; 						// global variable for HTMLtoCanavas
	var otpCount = 0;					// to keep count of concurrent resend otp 
	
	var storedBillNumber = "";			// to store bill number for payment
	var storedBillAmount = "";			// to store bill amount for payment
	var billLabel = "";
	
	var getCanvas ="";				
	var $recieptDiv = "";
	var $home = "";
	var $lockPage = "";
	var homeHammer = "";
	var loginHammer = "";
	var serviceHammer = "";
	
	var $login = "";
	var $service = "";
	
	var $imageDiv = "";
	var $headerText = ""; 
	var $headerBlock = "";
	
	var $loadingDiv = "";
	
	var $mainDiv = "";
	var $sideNav = "";
	
	var panFirstFlag = 0;
	var lastPanX = 0;
	
	var lastScrollTop = 0;
	
	var APPURL = "";
	var APPUSERNAME = "";
	var APPPASSWD = "";
	var PASSKEY = "";
	var APIURL = "";
	var SENDERID = "";
	var anyPayServices = ",44,";
	// array to store id's of input field which does not requires keyboard
	var noKeyboardInput = ["from_date_root", "to_date_root", "from_date", "to_date", "utilityList", "undefined"];     
	
	var finalShareURL = "";

    var kycFlag = false;		
	var kycImageType = 0;	
	
	var uploadImageHash = {};	
	
	var uploadedDocs = {};	
	
	var isUploadInProgress = false;
	
	var userKycDet = {};
	
	var kycAlertFLAG = "0";
	
	var kycAlertMessage = "";

    var uploadFirstAttemptFlag = false;

    var fileTransferRef = "";

    var islandHash = [];
	
	
	var apiCallUrl = "";
	var recieptUrl = "";
    var faqLink = "";

	var notifyHeader = {"alert" : "", "info":"" , "error":"" , "warning":"", "update":""};

	var appUsertype = "5";
	
	var MSG_PERMISSION_INSTRUCTION = "Please allow 'Manage phone calls' permission to continue using the app";
	
	
	var MSG_PERMISSION_DENIED = "You have denied a mandatory permission, cannot proceed further";
	
	
	var MSG_MANDATORY_PLUGIN_FAILED = "Unable to recognize your device";
	
	
	var MSG_AUTHENTICATE_FAILED = "Some error occurred while connecting to server !!";  
	
	
	var MSG_AUTHENTICATE_NO_RESPONSE = "Please check your Internet connection and try again";
	
	var MSG_AUTHENTICATE_FAILED = "Some error occured.Please try again after sometime";  

	
	var MSG_AUTHENTICATE_NO_RESPONSE = "Unable to connect to server. Please try again after sometime";


	var MSG_AUTHENTICATE_NO_INTERNET = "Please check your Internet connection and try again";
	/* ************************************************ */

	$.ajaxSetup({
  		cache: false
	});

	var cameraBar = 0;	 
	var cameraBarInterval = "";   
	
	
	document.addEventListener("deviceready", onDeviceReady, false);		
	function onDeviceReady()
	{
		
		cordova.plugins.Keyboard.disableScroll('true');
		StatusBar.backgroundColorByHexString(primaryColor);		// setting status bar color
		navigator.splashscreen.show();		
	
		$login.load("login.html",function() {
			$("#loadingText").text("Initializing ...");
			//$loadingDiv.nshow();
			loadingFlag=1;
		}); 
		MobileAccessibility.usePreferredTextZoom(false);
		document.addEventListener("resume", appResumeHandler, false);
		
		document.addEventListener("pause", appPauseHandler, false);
	}

	$(document).ready(function() 	// document ready event
	{
		$('body').attr('unselectable','on').css({'-moz-user-select':'-moz-none',
			'-moz-user-select':'none',
			'-o-user-select':'none',
			'-khtml-user-select':'none', 
			'-webkit-user-select':'none',
			'-ms-user-select':'none',
			'user-select':'none'
			}).bind('selectstart', function(){ return false; });
	 
	 
		$login = $("#login")
		$service = $("#service");
		$home = $("#home");
		$mainDiv = $("#mainDiv");
		$loadingDiv = $("#loadingDiv");
		$lockPage = $("#lockPage");
		
		FastClick.attach(document.body);
		 $('#from_date').on('change', function () {
		 //alert("");
    	 $("#to_date").val('');
   		});
			
  		$login.on("click",".tss-loginbtn",function(){
  			login();
  		});
		
  		$login.on("click",".tss-loginnewbtn",function(){
  			logintoregister();
  		});
		
  		$("#login, #service, #billList,#cameraDiv").on("click",".nav-wrapper span:first-child",function(){
			backFn();
		});
		
  		$login.on("click",".tss-registerbtn",function(){
  			register();
  		});	
			
		$("body").on("keypress","input",function(){
  			$(this).removeClass("invalid");	
  		});
		
		$home.on("click","#walletBtn",function(){
			showWallets();
			$(this).blur();
		});
		
		
		 $home.on("click",".tss-sidenavitem:nth-of-type(1)",function(){
			findAgents();
		});
		
        
        $home.on("click",".tss-sidenavitem:nth-of-type(2)",function(){
			checkKycStatus();
		});
        
       
		
		
		
  		document.addEventListener("backbutton",function() {backFn();}, false);		// to capture device back button
		
		
		
		

		window.addEventListener('native.keyboardshow', keyboardShowHandler);		// to capture keyboard show
		window.addEventListener('native.keyboardhide', keyboardHideHandler);		// to capture keyboard show
		window.addEventListener('native.keyboardshow', keyboardPadShowHandler);		// to capture keyboard show
		window.addEventListener('native.keyboardhide', keyboardPadHideHandler);		// to capture keyboard show
		window.addEventListener('native.keyboardshow', buttonShowHandler);     		//to push footer button up
		window.addEventListener('native.keyboardhide', buttonHideHandler);			//to revert button down

		homeHammer = new Hammer($home[0]);
		serviceHammer = new Hammer($service[0]);
		loginHammer = new Hammer($login[0]);
		
		homeHammer.on("swiperight",swipeRightHandler);    // ADDED ANIMATE CLASS TO SIDE NAV FOR THIS, PLEASE TAKE CARE	
    });
	
	function updatePosition()
    {
        //$("#balance").text(this.y);
        var st = this.y;
			if (this.y<0 && this.directionY == 1)
			{
				    shrink(-st);
			} 
			else if(this.directionY == -1) 
			{
				expand(-st);
			}
			//lastScrollTop = st;
    }
    
   

	
	function buttonShowHandler(e){
	
    var height =e.keyboardHeight;
   
    height = height+"px";
  
   $(".tss-btn-service").css("bottom",height);
  
	 
}
	function buttonHideHandler(e){
	$(".tss-btn-service").css("bottom",'0px');
		}
	

   
	
	function swipeRightHandler()
	{
		openNav();
	}
	
	function swipeLeftHandler()
	{
		closeNav();
	}
	
	/****************  Registering click and other events (done) ***************************/
	
	
	function keyboardPadShowHandler (keyObj)
	{
		//$("#keyboardPad").height(keyObj.keyboardHeight + 80);
	}
	function keyboardPadHideHandler (keyObj)
	{
		$("#keyboardPad").height("0px");
	}
	function keyboardShowHandler(keyObj)  // function to move page up when keypad is open
	{
		//navigator.notification.alert("inside",dummy,notifyHeader["alert"],'Retry');
		//alert(JSON.stringify(keyObj));
		try{
		$("#keyboardPad").height(keyObj.keyboardHeight + 80);
		}
		catch(err)
		{}
		
		serviceHammer.get('pan').set({ threshold: 1 });
		serviceHammer.get('swipe').set({ velocity: 0.1 });
		serviceHammer.on("touchstart pan swipe",keyboardSwiprHandler);
		loginHammer.get('pan').set({ threshold: 1 });
		loginHammer.get('swipe').set({ velocity: 0.1 });
		loginHammer.on("touchstart pan swipe",keyboardSwiprHandler);

	}
	
	function keyboardSwiprHandler(e)
	{
		
				cordova.plugins.Keyboard.close();
	}
	
	function keyboardHideHandler(keyObj)  // function to move page up when keypad is open
	{
		
		serviceHammer.on("touchstart pan swipe",keyboardSwiprHandler);
}
	
	function appResumeHandler()
	{
		
		var resTime = new Date();
		var extraTime = extraTimeFlag == true ? EXTRA_LOCK_TIME : 0;
		extraTimeFlag = false;
		var pauseDuration = (resTime - lockTime)/1000 - extraTime;
		
		if(loginFlag && pauseDuration > SESSION_LOCK_TIME)
		{
			
			var $input1 = $("#Pin");
			$input1.val('');
			lockFlag = true;
			$input1.removeClass("invalid");
			$lockPage.show();
			$input1.focus();
		}
		if(page == 0)
		{
			navigator.splashscreen.show();
		}
		else
		{
			var $focusedElem = $(":focus");
			if($focusedElem.length > 0 && noKeyboardInput.indexOf($focusedElem.attr("id").toString()) == -1)
			{
				$focusedElem.focus();
				cordova.plugins.Keyboard.show();
			}
			$('.toast').remove();
			logoutFlag = 0;
		}
	}
	
	function appPauseHandler()
	{
		//alert("apppause handler");
		//cordova.plugins.Keyboard.close();
		//alert(page);
		lockTime = new Date();
	}
	
	
	function backArrow()   // function to fire backbutton event
	{
		cordova.fireDocumentEvent('backbutton');
	}
	
	var exitFlag=0; 	// to check double back on exit
	var logoutFlag=0;	// to check doucle back on logout
	
	function exitApp() // function to exit app with confirmation
	{
		var resp = confirm("exit",3);
		if (resp == 1)
		{
			navigator.app.exitApp();
		}
	}
	
	function exitApp2()	// function to exit app on double back
	{ 				
			if(exitFlag == 1)
			{
				navigator.app.exitApp();
			}
			else
			{
				exitFlag = 1;
				Materialize.toast(MSG_BACK_TO_EXIT, 4000,"", function() {exitFlag=0;});
			}
	}
	
	function logout()  //function to logout
	{	
		$login.load("login.html",function() {
			if(localStorage.getItem("LASTMSISDN")!=null)
       	 	{
       	    	$("#msisdn").val(localStorage.getItem("LASTMSISDN"));
       	    	Materialize.updateTextFields();
       	    	setTimeout(function(){
       	 			cordova.plugins.Keyboard.show();
       	    	 	$("#Pin").focus();
       	    	},100);                                      
       	 	}
        
			var $input1 = $('#Pin')
			$input1.keyup(function(e) {
				onlyNumberHandler($input1);
				var max = 4;
				if ($input1.val().length == max) 
				{
					cordova.plugins.Keyboard.close();
					login();
				}
			});
			var $input2 = $('#msisdn');
			$input2.keyup(function(e) {
				onlyNumberHandler($input2);
				if ($input2.val().length >= msisdn_length_max) 
				{
					if (!validateMsisdn($input2.val()))
					{
						setTimeout(function(){
							$("#msisdnLabel").attr("data-error", MSG_INVALID_MOB_NUM);
							$input2.addClass("invalid");
						},300);
						return false;
					}
					else
					{
						$input1.focus();
						keyboardShowHandler();
					}
				}
			});
			if(localStorage.getItem("LASTMSISDN")==null)
			{
    			$input2.focus();
				keyboardShowHandler();
			}
			$home.scrollTop(0);
			$home.hide();
			$service.hide();
			$("#billList").hide();
			$lockPage.hide();
			
			$login.show();
			page = 1;
			$home.html("");
			$service.html("");
			$("#billList").html("");
			$('.toast').remove();
			logoutFlag = 0;
			sideDrawerFlag = 0;
			userInput1="";
			userInput2="";
			loginFlag = false;
		});
		lockFlag = false;
		page=1;
	}
	
	function logout2()  //function to check double back on logout
	{
		if(sideDrawerFlag == 1)
		{
			closeNav();
			return false;
		}
		else if(logoutFlag == 1)
		{
				logout();
		}
		else
		{
			logoutFlag = 1;
			Materialize.toast(MSG_BACK_TO_LOGOUT, 3000,"", function() {logoutFlag=0;});
		}	
	}
	
	function backFn()  // function to handle back on different pages
	{
		
		switch(page)
		{
			case 1 : //exitApp();       
					exitApp2();
				break;
			case 2 : registerTologin();
				break;
			case 3 : KYCcancel();
				break;
			case 4 : navigator.notification.confirm(MSG_CANCEL_CONFIRMATION,cancelOtp,notifyHeader["alert"],['Ok','Cancel']);
				break;
			case 5 : navigator.notification.confirm(MSG_CANCEL_REGISTRATION,cancelSetPin,notifyHeader["alert"],['Ok','Cancel']);
				break;
			case 6 : logout2();
				break;
			case 7 : backToHome();
				break;
			case 8 : if(serviceIndex == 4)
						{ if(checkPayType == 0)
							{
								backToBills();
								page = 7;
							}
						    else
							{
							$service.hide();
							$("#billList").show();
							$service.html("");
							page = 10;
							}
						}
						else
						{
							backToService();
						}
				break;
			case 9 : backToHome();
				break;
			case 10 : backToService();
				break;
			case 11 : hidePicMenu();
				break;
			case 12 :   $("#mainDiv2").hide();
						page=7;
				break;
			case 13 : 	$service.hide();
						registerTologin();
						$login.show();
				break;
			case 14	:	$("#billList").scrollTop(0);
						$("#billList").hide();
						$service.show();
						$("#billList").html("");
						page=7;
				break;
			case 15 :	QRBack();
				break;
            case 16 :	// check if unsaved changes are there
						backToHome();
				break;
			case 17 :	hideKycPicMenu();
				break;
            case 18 : 	backToHome();
						myMap.remove();
				break;
			case 19 : 	$(".modal").closeModal();
						page = 18;
					var overlay = $('.lean-overlay');
					overlay.detach();
			default: alert("back function not handled");
		}
	}
	
	function cancelSetPin(buttonIndex)
	{
		if(buttonIndex == 1)
		{
			logintoregister();
		}
	}
	
	
		
    function login() // function for login btn
    {
		
		var test = '{ "SERVICE_STRING": [{ "SERVICENAME": "TopS", "SERVICEWIDTH": "1", "SERVICEIMG": "mdi-cellphone", "SERVICELABEL": "Service 1", "SERVICEDESC": "Service1 description", "SERVICEID": 12 }, { "SERVICENAME": "TopA", "SERVICEWIDTH": "1", "SERVICEIMG": "mdi-account-multiple", "SERVICELABEL": "Service1 2", "SERVICEDESC": "Service2 description", "SERVICEID": 12 }, { "SERVICENAME": "Service1 3", "SERVICEWIDTH": "2", "SERVICEIMG": "mdi-login", "SERVICELABEL": "Service 3", "SERVICEDESC": "Service3 description", "SERVICEID": 52 }, { "SERVICENAME": "Transfer", "SERVICEWIDTH": "2", "SERVICEIMG": "mdi-logout", "SERVICELABEL": "Service 4", "SERVICEDESC": "Service4 description", "SERVICEID": 35 }, { "SERVICENAME": "Pay", "SERVICEWIDTH": "2", "SERVICEIMG": "mdi-credit-card", "SERVICELABEL": "Service 5", "SERVICEDESC": "Service5 description", "SERVICEID": 40 }, { "SERVICENAME": "Bill", "SERVICEWIDTH": "2", "SERVICEIMG": "mdi-receipt", "SERVICELABEL": "Service 6", "SERVICEDESC": "Service6 description", "SERVICEID": 3 }], "UTILITYLIST": "102,abc,44,xyz" }';
        var res = JSON.parse(test);
    	afterQueryString(res.SERVICE_STRING,0);
	}
	/*function afterLogin(type,msisdn,balance,name)
	{
		userType="5";
		userMsisdn="123456";
		userBalance="10";
		userName="test";
		
		var inputsArray = ["SOURCEPARTY",SOURCEPARTY,"USERTYPE",USERTYPE,"DESCRIPTION",""];
		postData("540",inputsArray,[]);
	}*/
	
	function afterQueryString(servString,flag)
	{
		//var bal=MAINBALANCE;
		//var name=PROFILENAME;
		
		$home.load("home.html",function(){
			$imageDiv = $("#image_div");
			$headerText = $("#headertxt");
			$headerBlock = $("#headerBlock");
			$mainDiv = $("#mainDiv");
			$sideNav = $("#mySidenav");
			
			
			$login.hide();
			$login.html("");
			$home.scrollTop(0);
			lastScrollTop = 0;
			screenWidth = $(window).width();
			
			navMaxHeight = screenWidth / 16 * 9;
			navMinHeight = (screenWidth>600)?64:56;
			navDeltaHeight = navMaxHeight - navMinHeight;
			wrapperHeight = $(window).height() - navMinHeight+ 1; //24 to accommodate status bar
			//alert(screenWidth + "||" + navMaxHeight + "||" + navMinHeight + " <> " + $(window).height() + " <> " + wrapperHeight);
			
			imageSizeMax = screenWidth * 0.25;
			imageSizeMin = screenWidth /9;
			//imageSizeDelta = imageSizeMax - imageSizeMin;
			
			imageMinTop =(navMinHeight - imageSizeMin)/2 - 3;
			imageMaxTop = screenWidth * 0.25;
			imageDeltaTop = imageMaxTop - imageMinTop;
	
			imageMinLeft = screenWidth * 0.12;
			imageMaxLeft = screenWidth * 0.15;
			imageDeltaLeft = imageMaxLeft - imageMinLeft;
			
			currencyScaleMax = 1.25;
			currencyScaleMin = 1;
			currencyScaleDelta = currencyScaleMax - currencyScaleMin;
			
			$imageDiv.attr('src','profile.jpg');
			
			$("#preNav").height(navDeltaHeight);
			$("#navDiv").height(navMinHeight);
			$('#wrapper').height(wrapperHeight);
			
			

			$imageDiv.height(imageSizeMin).width(imageSizeMin);
			$imageDiv.css("transform","scale(" + imageScaleMax + "," + imageScaleMax + ")");
			$headerText.css('transform','translate(' + imageSizeMax/2 + 'px)');
            
            var headerTextWidth = screenWidth - imageSizeMax - 32;
   
            //alert(screenWidth + "," + imageSizeMax + "," + headerTextWidth)
            
            $headerText.width(headerTextWidth);
            //$headerText.css('width','150px)');
            //alert($headerText.width())

			
			//$("#balance").css("transform","scale(" + currencyScaleMax + "," + currencyScaleMax + ")");

			$headerBlock.css('transform','translate(' + imageMinLeft + 'px,' + imageMaxTop + 'px)');
		
			sideNavWidth = screenWidth - navMinHeight > 280 ? 280 : screenWidth-navMinHeight
			$sideNav.width(sideNavWidth);
			$sideNav.css("transform","translateX(" + sideNavWidth * -1 + "px)");
			
			
			
			var sideNavHammer = new Hammer($sideNav[0]);
			//sideNavHammer.on("panright panleft panend", panControlRev);
			
			sideNavHammer.on("swipeleft",swipeLeftHandler);
			
			var mainDivHammer = new Hammer($mainDiv[0]);
			//mainDivHammer.on("panright panleft panend", panControlRev);
			
			mainDivHammer.on("swipeleft",swipeLeftHandler);
			
			
			if(flag == 1)
			{
				$("#noService").append(servString[0]);
			}
			else
			{
				//alert(JSON.stringify(servString));
			for(i=0;i<servString.length;i++)
			{
				if(servString[i]["SERVICEID"]== 3) 
				{
					//alert("here");
					billLabel = servString[i]["SERVICEDESC"];
					//billLabel = "pay dhiragu bills";
				}
				if(servString[i]["SERVICEWIDTH"]==1)
				{
					htmlstr=singleService;
					htmlstr=htmlstr.replace("__SERVICENAME0__",servString[i]["SERVICENAME"]);
					htmlstr=htmlstr.replace("__SERVICEIMG0__",servString[i]["SERVICEIMG"]);
					htmlstr=htmlstr.replace("__SERVICELABEL0__",servString[i]["SERVICELABEL"]);
					htmlstr=htmlstr.replace("__SERVICEDESC0__",servString[i]["SERVICEDESC"]);
					
					htmlstr=htmlstr.replace("__SERVICENAME1__",servString[i+1]["SERVICENAME"]);
					htmlstr=htmlstr.replace("__SERVICEIMG1__",servString[i+1]["SERVICEIMG"]);
					htmlstr=htmlstr.replace("__SERVICELABEL1__",servString[i+1]["SERVICELABEL"]);
					htmlstr=htmlstr.replace("__SERVICEDESC1__",servString[i+1]["SERVICEDESC"]);
					i = i + 1;
					$("#serviceBody").append(htmlstr);
				}
				else
				{
					htmlstr=dualService;
					htmlstr=htmlstr.replace("__SERVICENAME__",servString[i]["SERVICENAME"]);
					htmlstr=htmlstr.replace("__SERVICEIMG__",servString[i]["SERVICEIMG"]);
					htmlstr=htmlstr.replace("__SERVICELABEL__",servString[i]["SERVICELABEL"]);
					htmlstr=htmlstr.replace("__SERVICEDESC__",servString[i]["SERVICEDESC"]);
					$("#serviceBody").append(htmlstr);
				}
			}
			}
			myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true ,bounce:false,bindToWrapper:true});
			//alert(myScroll);
			myScroll.on('scroll', updatePosition);
			myScroll.on('scrollEnd', updatePosition);
			$("#balance").text("10");
			$("#profileName").text("TEST");
			$home.fadeIn(100);
			setTimeout(function () {
        		myScroll.refresh();
    		}, 400);
			$home.css("overflow-y","scroll");
			$login.html("");
			loginFlag = true;
            page=6;
            var today = new Date();
			today.setHours(0,0,0,0);
			
			
			
			kycAlertFLAG = "0";
			kycAlertMessage = "";
            
            
            
		});
		$lockPage.load("lock.html",function(){
			var $input1 = $('#Pin')
			$input1.keyup(function(e) {
				onlyNumberHandler($input1);
				var max = 4;
				if($input1.val().length == max) 
				{
					cordova.plugins.Keyboard.close();
					unlock();
				}
			});
            $(".tss-unlockbtn").click(function(){unlock();});
			
		});
    }

    
    
    
    
	
	
	
	function backToHome()	// function to return to home from any service page
	{
		userInput1="";
		userInput2="";
		//var bal =MAINBALANCE;
		$service.html("");
		$service.hide();
		
		setTimeout(function()
		{
			$("#balance").text("1");
			$home.fadeIn(100);
            myScroll.refresh();
		},100);
		page=6;
		serviceIndex=0;
	}
	
	function openNav()	// function to open side nav drawer
  	{
		$('.toast').remove();
		logoutFlag=0;
		sideDrawerFlag=1;
		//$sideNav.addClass("sideNavAnimate");
		$sideNav.css("transform","translateX(0%)");
 		$mainDiv.show();
		$home.css("overflow-y","hidden");
		//setTimeout(function()
		//{
		//	$sideNav.removeClass("sideNavAnimate");
		//},350);
 	}

	function closeNav()	// function to close side nav drawer
  	{
		//$sideNav.addClass("sideNavAnimate");
		sideDrawerFlag=0;
		$sideNav.css("transform","translateX(-100%)");
  		$mainDiv.hide();
		$home.css("overflow-y","scroll");
		//setTimeout(function()
		//{
		//	$sideNav.removeClass("sideNavAnimate");
		//},350);
  	}
  	

function shrink(delta)		// function to shrink the header
{
	/*if(delta >= navDeltaHeight)
	{
		$("#navDiv").addClass("z-depth-1");
	} */
	var newHeight = navMaxHeight - delta > navMinHeight?navMaxHeight- delta:navMinHeight;
	var refHeight = (1 - (newHeight - navMinHeight)/navDeltaHeight);
	
	var newImgScale= (imageScaleMax - (imageScaleDelta * refHeight))<imageScaleMin ?imageSclaeMin:(imageScaleMax - (imageScaleDelta * refHeight));
	
	var newImgHeight = imageSizeMin * newImgScale;
	
	var newImgTop= (imageMaxTop - (imageDeltaTop * refHeight))<imageMinTop ?imageMinTop:(imageMaxTop - (imageDeltaTop * refHeight));
	
	var newImgLeft= (imageMinLeft + (imageDeltaLeft * refHeight))>imageMaxLeft ?imageMaxLeft:(imageMinLeft + (imageDeltaLeft * refHeight));
	
	$imageDiv.css("transform","scale(" + newImgScale + "," + newImgScale + ")");
	$headerText.css('transform','translate(' + newImgHeight/2 + 'px)');
	$headerBlock.css('transform','translate(' + newImgLeft +'px,'+ newImgTop+ 'px)');
	
	if(newHeight < (navMinHeight + 28))
	{
		$("#walletBtn").hide();
	}	
}

function expand (delta)		//function to expand the header
{
	/*if(delta < navDeltaHeight)
	{
		$("#navDiv").removeClass("z-depth-1");
	}*/
	var newHeight= navMaxHeight - delta < navMaxHeight? (navMaxHeight - delta> navMinHeight ? navMaxHeight - delta : navMinHeight): navMaxHeight;
	var refHeight = ((newHeight - navMinHeight)/navDeltaHeight);
	
	var newImgScale= (imageScaleMin + (imageScaleDelta * refHeight))>imageScaleMax ?imageSclaeMax:(imageScaleMin + (imageScaleDelta * refHeight));
	
	var newImgHeight = imageSizeMin * newImgScale;
	
	var newImgTop= (imageMinTop + (imageDeltaTop * refHeight))>imageMaxTop ?imageMaxTop:(imageMinTop + (imageDeltaTop * refHeight));
	
	var newImgLeft= (imageMaxLeft - (imageDeltaLeft * refHeight))<imageMinLeft ?imageMinLeft:(imageMaxLeft - (imageDeltaLeft * refHeight));
	
	$imageDiv.css("transform","scale(" + newImgScale + "," + newImgScale + ")");
	
	$headerText.css('transform','translate(' + newImgHeight/2 + 'px)');
	$headerBlock.css('transform','translate(' + newImgLeft +'px,'+ newImgTop+ 'px)');
	
	if(newHeight > (navMinHeight + 28))
	{
		$("#walletBtn").show();
	}
}


function shareConfirm(buttonIndex)
	{
		if(buttonIndex == 1)
		{
			// this is the complete list of currently supported params you can pass to the plugin (all optional)
			var options = {
				//message: SHARE_MESSAGE, // not supported on some apps (Facebook, Instagram)
				//subject: '', // fi. for email
				//files: [finalShareURL], // an array of filenames either locally or remotely
				files: [img.src], // an array of filenames either locally or remotely
				//url: PLAYSTORE_URL,
				//chooserTitle: 'Share' // Android only, you can override the default share sheet title
			}
			var onSuccess = function(result) {
				//alert("shared");
				//console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
				//console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
			}

			var onError = function(msg) {
				//alert("failed");
				//console.log("Sharing failed with message: " + msg);
			}
			window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
		}
	}
	
	
	function toggle_password(id,imageDiv)
	{
		var $pin = $(id);
		if ($pin.css("-webkit-text-security") == "disc") {
			$pin.focus();
			cordova.plugins.Keyboard.show();
			$(imageDiv).removeClass("mdi-eye-off");
			$(imageDiv).addClass("mdi-eye");

			$pin.css("-webkit-text-security","none");
		} 
		else 
		{
			$pin.focus();
			cordova.plugins.Keyboard.show();
			$(imageDiv).removeClass("mdi-eye");
			$(imageDiv).addClass("mdi-eye-off");
			$pin.css("-webkit-text-security","disc");
		}
	}
	
	
	function changeBorderEyerev(labelId,eyeImgDiv)
	{
		var className = $(labelId).attr('class');
		if(className=="active")
		{
			$(eyeImgDiv).css("border-bottom-color",secondaryColor); 
		}
		else
		{
			$(eyeImgDiv).css("border-bottom-color","#9e9e9e");
		}
	}

	function changeEyeBorder(eyeImgDiv)
	{
		$(eyeImgDiv).css("border-bottom-color",secondaryColor);
	}



function checkKycStatus()
{
	showKYCPage('');
}

function showKYCPage(response)
{
	$service.load("kycUpload.html",function(){
        //$home.scrollTop(0);
		
		$login.hide();
		//$home.scrollTop(0);
		$home.hide();
		
		
		
			$service.fadeIn(100);
			
			var today = new Date();
			var tommorrow = new Date(today.getTime() + 86400000); // + 1 day in ms
            
            
            $('#idDateInput').click(function(){
                var options = {
                    date: tommorrow,
                    mode: 'date',
                    //maxDate :new Date(),
                    minDate:tommorrow,
                    allowFutureDates:true,
                    clearButton:true,
                    allowOldDates:false
                };
                datePicker.show(options, function(selectedDate){
                    $("#idDateInput").val((addzero(selectedDate.getDate()) + "-" + addzero(selectedDate.getMonth() + 1 ) + "-" + selectedDate.getFullYear()));
                }, function(){});
            });
			
            
            /*
			$('#idDateInput').pickadate({
				showMonthsShort: true,
				format: 'dd-mm-yyyy',
				closeOnSelect: true,
				selectMonths: true, 
				selectYears: 3, 
				today: '',
				onSet: function(context) {
					//alert(JSON.stringify(context))
					if(context.select)
					{
						this.close();
						//$('#to_date').val("");
						//$('#to_date').click();
					}
					if(context.highlight)
					{
						$('.picker__weekday-display').text("Expiry Date");
					}
				},
				min: tommorrow
			});
            */
			//alert(getTransDate(today));
			//$("#idDateInput").val((addzero(tommorrow.getDate()) + "-" + addzero(tommorrow.getMonth() + 1 ) + "-" + tommorrow.getFullYear()));
			
			
			
			$('.datepicker').on('click', function () {
				if ($(this).attr('id') === 'idDateInput')
				{
					$('.picker__weekday-display').text("Expiry Date");
				}
			});
			
			//$("#kycFront").click(function(){showUploadOption('1')});
		
			//$(".tss-btn-kycUpload").click(submitKYCUpload);
			
			uploadedDocs = {};
			uploadImageHash = {};
        page = 16;
		});
}
	
	
   
	


function showUploadOption(mode)
{
	if(isUploadInProgress)
	{
		navigator.notification.alert(MSG_ANOTHER_UPLOAD_PENDING,dummy,notifyHeader["alert"],'Ok');
		return false;
	}
	if(mode in uploadImageHash)
	{
		validateSelectedImage(uploadImageHash[kycImageType]);
		return false;
	}
	kycImageType = mode;
	$mainDiv3 = $("#mainDiv3");
	$mainDiv3.click(hideKycPicMenu);
	$mainDiv3.show();
	$(".kycUploadSelect").off().click(function(){
		var sourceType = $(this).attr('data-type') == 1 ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.PHOTOLIBRARY;
		selectUploadImage(sourceType)
	});
	$("#kycOptDiv").show();
	$service.css("overflow-y","hidden");
	page = 17;
}


function findAgents()
{
     
    cordova.plugins.diagnostic.getLocationAuthorizationStatus(function(status){
        switch(status){
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                    navigator.notification.alert("Please enable location permission",getCurrentLocation,notifyHeader["alert"],'Ok');
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED:
                    getIslandList();
                break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                    getCurrentLocation();
                break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    getCurrentLocation();
                break;
        }
    }, function(error){
        //console.error("The following error occurred: "+error);
    });
    
    
    
	
}

function getCurrentLocation()
{
	/*cordova.plugins.diagnostic.requestRuntimePermission(function(status){
		switch(status){
			case cordova.plugins.diagnostic.permissionStatus.GRANTED:
					navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError,geolocationOptions);
					//console.log("Fetching location");
					$loadingDiv.show();
					loadingFlag = 1;
					//console.log("Permission granted to use the camera");
				break;
			case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
					//console.log("Permission to use the camera has not been requested yet");
				break;
			case cordova.plugins.diagnostic.permissionStatus.DENIED:
					//console.log("Permission denied to use the camera - ask again?");
					getIslandList();
				break;
			case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
					//console.log("Permission permanently denied to use the camera - guess we won't be using it then!");
					getIslandList();
				break;
		}
	}, function(error){
		//console.error("The following error occurred: "+error);
	}, cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION);*/
    var geolocationOptions = { maximumAge: 10000, timeout: 10000, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError,geolocationOptions);
    //console.log("Fetching location");
    $loadingDiv.show();
    loadingFlag = 1;
}

function geolocationSuccess(position)
{
	/*console.log('Latitude: ' + position.coords.latitude + '\n' +
	'Longitude: '         + position.coords.longitude         + '\n' +
	'Altitude: '          + position.coords.altitude          + '\n' +
	'Accuracy: '          + position.coords.accuracy          + '\n' +
	'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	'Heading: '           + position.coords.heading           + '\n' +
	'Speed: '             + position.coords.speed             + '\n' +
	'Timestamp: '         + position.timestamp                + '\n');*/
	userCoords = {lat: position.coords.latitude,lng: position.coords.longitude};
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var test = '{"SEARCH_DET":[ {"STAKENAME":"RED BANANA","STAKEADDRESS":"G.ERIADHOO","STAKECONTACT":"7964808","STAKELAT":'+(lat+0.001)+',"STAKELONG":'+(lng+0.001)+',"STAKETYPE":"6","STAKECATTYPE":"1"}, {"STAKENAME":"ELEMENTS 1","STAKEADDRESS":"M.KAFURUTHOLHIMAAGE","STAKECONTACT":"7941044","STAKELAT":'+(lat+0.003)+',"STAKELONG":'+(lng+0.003)+',"STAKETYPE":"6","STAKECATTYPE":"1"}, {"STAKENAME":"MA FIHAARA","STAKEADDRESS":"CRONE VILLA KOARUKENDI MAGU MAHCHANGOALHI MALE","STAKECONTACT":"7934091","STAKELAT":'+(lat+0.005)+',"STAKELONG":'+(lng+0.005)+',"STAKETYPE":"6","STAKECATTYPE":"1"}]}';
   var res = JSON.parse(test);
  parseAgentList(res.SEARCH_DET);
    
}

function geolocationError(error)
{
	if(error.code == error.PERMISSION_DENIED)
	{
		// show list based view
		//console.log("Permission denied, falling back to list based view");
		getIslandList();
	}
	else
	{
		navigator.notification.alert(MSG_LOACTION_FETCH_ERROR,dummy,notifyHeader["alert"],'Ok');
	}
	$loadingDiv.hide();
	loadingFlag=0;
}

function parseAgentList(response)
{
	agentLocDet = [];
	
	for(var i=0;i<response.length;i++)
	{
		var tempDet = response[i]
		
		var staketype = ""
		if(tempDet.STAKETYPE == "6")
		{
			staketype = "6";
		}
		else if(tempDet.STAKECATTYPE == "0")
		{
			staketype = "3";
		}
		else
		{
			staketype = "4";
		}
		agentLocDet[i] = { "position" : {"lat": tempDet.STAKELAT,"lng": tempDet.STAKELONG},"agentName":tempDet.STAKENAME,"agentDesc" : tempDet.STAKEADDRESS,"agentType" : staketype}
	}
	
	$service.load("agentLocate.html",function() {
		$home.scrollTop(0);
		$home.hide();
		closeNav();
		$service.fadeIn(100);
		initMaps();
		$('.modal-trigger').leanModal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			in_duration: 300, // Transition in duration
			out_duration: 200, // Transition out duration
			starting_top: '4%', // Starting top style attribute
			ending_top: '10%', // Ending top style attribute
			ready: function() { 
				var overlay = $('.lean-overlay');
				overlay.detach();
				$("#map_canvas").after(overlay);
				page = 19;
			}, 
			complete: function() {
				page = 18;
				var overlay = $('.lean-overlay');
				overlay.detach();
				
			}
		});
		
		$(".mapSettingCheckBox").on("change",function(){
			var dataType = $(this).attr("data-type");
			var isChecked = $(this).prop("checked");
			//console.log(dataType + "," + isChecked)
			//console.log(markerStore[dataType])
			
			markerStore[dataType].forEach(function callback(markerObject) {
				markerObject.setVisible(isChecked);
			});
		});
        
        $("#map_redirect_map").on("click",function(){
            var locationVal = $("#map_redirect").attr("data-location");
			var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(locationVal);
			cordova.InAppBrowser.open(url, '_system', 'location=yes');
        });
        
        $("#map_redirect_navigate").on("click",function(){
            var locationVal = $("#map_redirect").attr("data-location");
			var url = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(locationVal);
			cordova.InAppBrowser.open(url, '_system', 'location=yes');
        });
		
		page = 18;
		/*$("#gpsLocatorSwitch").on("click",function(){
            //alert("map remove")
			//myMap.remove();
			getIslandList();
		});*/
        $("#gpsLocatorSwitch").click(
        function(){
            getIslandList();
        });
	});
}
		
function initMaps()
{
	$loadingDiv.hide();
	loadingFlag=0;
	var div = document.getElementById("map_canvas");
	var mapOptions = {
        'mapType': plugin.google.maps.MapTypeId.NONE,
        'controls': {
                'compass': false,
                'indoorPicker': false,
                'myLocationButton': true,
                'myLocation': true,   // (blue dot)
                'zoom': true,          // android only
                'mapToolbar': true     // android only
        },
        'gestures': {
                'scroll': true,
                'tilt': false,
                'rotate': true,
                'zoom': true
        },
        'styles': [

        ],
        'camera' : {
                target: '',
                zoom: 15
        },
        'preferences': {
                'zoom': {
                        'minZoom': 15,
                        'maxZoom': 18
                },
                'building': true
        }
};
	// Create a Google Maps native view under the map_canvas div.
	mapOptions.camera.target = userCoords;
	myMap = plugin.google.maps.Map.getMap(div,mapOptions);
	
	myMap.one(plugin.google.maps.event.MAP_READY, onMapInit);
}
		
function onMapInit(map)
{
	$("#map_setting").css({"position":"fixed","display":"block"});
	//console.log("Map initilization copmpelte, adding markers");
	markerStore = {"3":[],"4":[],"6":[]};
	var markerCounter = 0;
	agentLocDet.forEach(function callback(locationObject) {
		//console.log(JSON.stringify(locationObject))
		var marker = myMap.addMarker({
			position: locationObject.position,
			title: locationObject.agentName,
			snippet: locationObject.agentDesc,
			icon: "red",
			counter : markerCounter++
		});
		markerStore[locationObject.agentType].push(marker);
        
        marker.on(plugin.google.maps.event.MARKER_CLICK, function() {
            console.log(this.get("title") + " is clicked");
        });
        
        marker.on(plugin.google.maps.event.INFO_OPEN, function() {
            console.log(this.get("title") + " is opened");
            var posObj = this.get("position");
            $("#map_redirect").attr("data-location",posObj.lat + "," + posObj.lng)
            $("#map_redirect").show();
        });
        
        marker.on(plugin.google.maps.event.INFO_CLOSE, function() {
            console.log(this.get("title") + " is closed");
            $("#map_redirect").hide();
            $("#map_redirect").attr("data-location","");
        });
        
        /*
		console.log("Marker added");
		
		marker.on(plugin.google.maps.event.MARKER_CLICK, function(arg1) {
			console.log(this.get("counter"));
			var htmlInfoWindow = new plugin.google.maps.HtmlInfoWindow();
			var markerIndex = this.get("counter");
			var markerDet = agentLocDet[markerIndex];
			//var tempHtml = "<p class='marker-info-title'>" + markerDet.agentName + "</p><p style='margin:0'>" + markerDet.agentDesc + "</p>"
			var tempHtml = ['This is <b>Html</b> InfoWindow',
							'<br>',
							'<button onclick="javascript:alert(\'clicked!\');">click here</button>',
							].join("");
			htmlInfoWindow.setContent(tempHtml);
			htmlInfoWindow.open(marker);
		});*/
	});
}

function getIslandList()
{
	
		parseIslands(islandHash);
	
	
	
	/*islandDet = [
		{
			"ISLANDID":"1",
			"ISLANDNAME":"ILS1",
			"ATOLS": []
		},
		{
			"ISLANDID":"2",
			"ISLANDNAME":"ILS2",
			"ATOLS": []
		},
		{
			"ISLANDID":"3",
			"ISLANDNAME":"ILS3",
			"ATOLS": []
		}];
	parseIslands(islandDet);*/
}

function parseIslands(islandDet)
{
	$service.load("agentLocateList.html",function() {
		$home.scrollTop(0);
		$home.hide();
		closeNav();
		$service.fadeIn(100);
		page = 7;
		
		/*var optionHtml = "<option value='-1' disabled selected>Select Atoll</option>";
		for(var i = 0; i < islandDet.length; i++)
		{
			optionHtml += "<option value='" + i + "'>" + islandDet[i].ATOLLNAME + "</option>"
		}
		$("#atollList").html(optionHtml);
        
		$("#atolListWrapper").on("click",function(){
            //$("#atollList").click();
            var dropdownObj = document.getElementById('atollList');
            var event;
            event = document.createEvent('MouseEvents');
            event.initMouseEvent('mousedown', true, true, window);
            dropdownObj.dispatchEvent(event);
        });
        
        $("#islandListWrapper").on("click",function(){
            //$("#atollList").click();
            var dropdownObj = document.getElementById('islandList');
            var event;
            event = document.createEvent('MouseEvents');
            event.initMouseEvent('mousedown', true, true, window);
            dropdownObj.dispatchEvent(event);
        });
        
		$("#atollList").on("change",updateIslandList);
		$("#islandList").on("change",getAgentList);
		//$("select").material_select();
		$('.modal-trigger').leanModal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			in_duration: 300, // Transition in duration
			out_duration: 200, // Transition out duration
			starting_top: '4%', // Starting top style attribute
			ending_top: '10%', // Ending top style attribute
			ready: function() { 
				var overlay = $('.lean-overlay');
				overlay.detach();
				$("#mapSettingModal").after(overlay);
				page = 19;
			},
			complete: function() {
				page = 18;
				var overlay = $('.lean-overlay');
				overlay.detach();
				
			}
		});
		
		$(".mapSettingCheckBox").on("change",function(){
			var dataType = $(this).attr("data-type");
			var isChecked = $(this).prop("checked");
			//console.log(dataType + "," + isChecked)
			//console.log(markerStore[dataType])
			
			$("#agentList li[data-stakeType='"+ dataType +"']").toggle(isChecked);
			setTimeout(function(){
				$("#filter").trigger("keyup");
			},500);
		});*/
		
		//$("#gpsLocatorSwitch").on("click",switchToGpsLocator)
        $("select").material_select();
        $("#gpsLocatorSwitch").click(function(){
            switchToGpsLocator();
        });
       
	});
}

function updateIslandList()
{
    $("#atolListWrapper").val($("#atollList option:selected").text());
    $("#islandListWrapper").val("Select Island");
	var selectedIndex = $(this).val();
    $("#atolListWrapper").val()
	if(selectedIndex == "-1")
	{
		return false;
	}
	var islandList = islandHash[selectedIndex].ISLANDS;
	var optionHtml = "<option value='-1' disabled selected>Select Island</option>";
	for(var i = 0; i < islandList.length; i++)
	{
		optionHtml += "<option value='" + islandList[i].ISLANDID + "'>" + islandList[i].ISLANDNAME + "</option>"
	}
    $("#islandList").html(optionHtml);
    $("#islandListWrapper").prop("disabled",false);
	//$("select").material_select();
	$("#agentList").html("");
	$("#filter").val("");
	$("#filterBlock").hide();
	$(".mapSettingCheckBox").each(function(){
		$(this).prop("checked",true);
	});
}

function getAgentList()
{
     $("#islandListWrapper").val($("#islandList option:selected").text());
	var selectedAtoll = islandHash[$("#atollList").val()].ATOLLID
	var selectedIsland = $(this).val();
	//console.log("Selected item" + selectedItem);
	if(selectedIsland == "-1")
	{
		return false;
	}
	$("#agentList").html("");
	$("#filter").val("");
	$("#filterBlock").hide();
	$(".mapSettingCheckBox").each(function(){
		$(this).prop("checked",true);
	});
	
	var inputArray = ["USERTYPE",USERTYPE,"SOURCEPARTY",SOURCEPARTY,"USERATOLL",selectedAtoll,"USERISLAND",selectedIsland,"DESCRIPTION",""];
	postData("695",inputArray,[]);
	
	
	}

function showAgentList(agentList)
{
	if(agentList.length > 0)
	{
		var agentHtmltemplete = "<li class='collection-item' style='padding:16px;' data-stakeType ='__STAKETYPE__' data-filter='__NAME__ __ADDRESS__'><span style='color:__COLOR__;opacity:0.87;font-weight:700;font-size:16px'><i class='mdi mdi-map-marker mdi-24px' style='vertical-align:middle;'></i> __NAME__</span> <span class='right mapRedirectLink' style='color:deepskyblue;opacity:.87;font-weight:700' data-location='__LOCATION__' data-address='__ADDRESS__'>View in maps</span><br><span style='opacity:0.87;font-weight:700'>__ADDRESS__</span></li>";
		
		var agentHtml = "";
		
		for(var i = 0; i < agentList.length; i++)
		{
			var tempHtml = agentHtmltemplete;
			tempHtml = tempHtml.replace(/__NAME__/g,agentList[i].STAKENAME);
			tempHtml = tempHtml.replace(/__ADDRESS__/g,agentList[i].STAKEADDRESS);
			var staketype = ""
			if(agentList[i].STAKETYPE == "6")
			{
				staketype = "6";
			}
			else if(agentList[i].STAKECATTYPE == "0")
			{
				staketype = "3";
			}
			else
			{
				staketype = "4";
			}
			tempHtml = tempHtml.replace(/__STAKETYPE__/g,staketype);
			tempHtml = tempHtml.replace(/__COLOR__/g,"red");
			if(agentList[i].STAKELAT != "" & agentList[i].STAKELONG !="")
			{
				tempHtml = tempHtml.replace(/__LOCATION__/g,agentList[i].STAKELAT + "," + agentList[i].STAKELONG);
			}
			else
			{
				tempHtml = tempHtml.replace(/__LOCATION__/g,"");
			}
			agentHtml += tempHtml
		}
		$("#filterBlock").show();
		$("#agentList").html(agentHtml);
		
		$input1 = $("#filter");
		$input1.keyup(function(e) {
			var value = $input1.val().toLowerCase();
			//console.log("value = " + value)
			var filterAppend = "";
			$(".mapSettingCheckBox:checked").each(function(){
				var checkType = $(this).attr("data-type");
				filterAppend += "#agentList li[data-stakeType=" + checkType + "],"
				//console.log(filterAppend);
			});
			filterAppend = filterAppend.replace(/,$/,'');
			//console.log(filterAppend)
			$(filterAppend).filter(function() {
				$(this).toggle($(this).attr("data-filter").toLowerCase().indexOf(value) > -1);
			});
		});
		$(".mapRedirectLink").on("click",function(){
			var locationVal = $(this).attr("data-location");
			if(locationVal == "")
			{
				locationVal = $(this).attr("data-address");
				//var url = "https://www.google.com/maps/search/?api=1&query=" + location;
				//cordova.InAppBrowser.open(url, '_system', 'location=yes');
			}

			var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(locationVal);
			cordova.InAppBrowser.open(url, '_system', 'location=yes');
		})
	}
	else
	{
		
	}
}

function switchToGpsLocator()
{
    
    cordova.plugins.diagnostic.getLocationAuthorizationStatus(function(status){
        switch(status){
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                    navigator.notification.alert("Please enable location permission",getCurrentLocation,notifyHeader["alert"],'Ok');
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED:
                    navigator.notification.confirm("You have denied the permission to access your location .Please enable the permission in the app settings.",function(buttonIndex){if(buttonIndex ==1)cordova.plugins.diagnostic.switchToSettings(dummy); },notifyHeader["alert"],'Go to settings,Cancel');
                break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                    getCurrentLocation();
                break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    getCurrentLocation();
                break;
        }
    }, function(error){
        //console.error("The following error occurred: "+error);
    });
    
    
    
	
}

