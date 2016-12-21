function startMove(obj,name,iTarget,fn)
	{
		function getStyle(obj,name) 
		{
			if (obj.currentStyle) 
			{
				return obj.currentStyle[name];
			} else {
				return getComputedStyle(obj,0)[name];
			}
		}
		clearInterval(obj.timer);
		obj.timer=setInterval(function() 
			{	
				var cur=0;
				if (name=='opacity') 
					{
						cur=Math.round(parseFloat(getStyle(obj,name))*100);
					} else 
					{
						cur=parseInt(getStyle(obj,name));
					}
				var speed=(iTarget-cur)/6;
				speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
				if (cur==iTarget) 
				{
					clearInterval(obj.timer);
				} else 
				{
					if (name=='opacity') 
						{	
							obj.style.filter='alpah(opacity:'+speed+cur+')';
							obj.style.opacity=(cur+speed)/100;
						} else
						{
							obj.style[name]=cur+speed+'px';							
						}
				}
			},30)
	}