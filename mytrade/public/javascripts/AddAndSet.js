﻿
function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("Add to Favorites失败，请使用Ctrl+D进行添加");
        }
    }
}
function SetHome(obj, vrl) {
    try { obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl); }
    catch (e) {
        if (window.netscape) {
            try { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); }
            catch (e) { alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。"); }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            
             prefs.setCharPref('browser.startup.homepage', vrl); } else { alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。"); } } } 

			 
//页面用法：
//	<a href="#" onclick="SetHome(this,window.location)">设为首页</a>
//  <a href="#"  onclick="AddFavorite(window.location,document.title)">加入收藏</a>