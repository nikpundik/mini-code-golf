[am,ar,av]=process.argv.slice(2),G=[[12,8,400,1e3],[18,7,1600,300],[5,12,2e3,500],[30,15,3423,167],[20,5,1e3,800]],C="[2J",g=0,M=Math,pi=parseInt,F=M.floor,R=M.round,o=process.stdout,v=.1+.35*(parseFloat(av)%11||0),r=parseFloat(ar)%360*M.PI/180,f=v/99,[dw,dh,pb,ph]=G[pi(am)],w=70+dw,h=20+dh,sx=pb%w,sy=F(pb/w),x=sx,y=sy,rx=R(x),ry=R(y),hx=ph%w,hy=F(ph/w),gt=(r,s)=>M.sin(M.sqrt((r-(w-1)/2)**2+(s-(h-1)/2)**2)/(dh/2))>0;const L=()=>{let r=C;for(let s=0;s<=h;s++)for(let h=0;h<=w;h++)ch=h==hx&&s==hy?"@":h==rx&&s==ry?"●":h==sx&&s==sy?"ɵ":gt(h,s)?";":"·",r+=`[${s+1};${h}H${ch}`;o.write(r)};I=setInterval((()=>{g>50?(o.write(C),clearInterval(I)):g>2?g++:g?(o.write(`[${F(h/2-1)};${F(w/2-3)}H${1===g?"Oh no!":"Yeah!"}`),g=3):(v=M.max(0,v-f*(gt(rx,ry)?2:1)),x+=v*M.cos(r),y-=v*M.sin(r),x>=w&&(x=w,r*=-1,r+=M.PI),x<=0&&(x=0,r*=-1,r+=M.PI),y>=h&&(y=h,r*=-1),y<=0&&(y=0,r*=-1),rx=R(x),ry=R(y),rx==hx&&ry==hy&&v<.5?g=2:v<.1&&(g=1),L())}),50);