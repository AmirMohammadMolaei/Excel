var MemuryShow = 0;
function Show(){
    if(MemuryShow == 0){
        FileScreen.style.left = "0";
        OpenInFileTab.click();
        MemuryShow = 1;
    }
}
function Hidden(){
    if(MemuryShow == 1){
        FileScreen.style.left = "-100%";
        TabHome.click();
        MemuryShow = 0;
    }
    
}