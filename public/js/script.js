function modalx(mox) {

    var mox = mox; 

    const showModalBtn = document.querySelector(".show-modal"+mox);
    const bottomSheet = document.querySelector(".bottom-sheet"+mox);
    const sheetOverlay = bottomSheet.querySelector(".sheet-overlay"+mox);
    const sheetContent = bottomSheet.querySelector(".content"+mox);
    const dragIcon = bottomSheet.querySelector(".drag-icon"+mox);
    let isDragging = false, startY, startHeight;
    const showBottomSheet = () => {
        bottomSheet.classList.add("show");
        document.body.style.overflowY = "hidden";
        updateSheetHeight(50);
    } 
    const updateSheetHeight = (height) => {
        sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
        
        bottomSheet.classList.toggle("fullscreen", height === 100);
    } 
    const hideBottomSheet = () => {
        bottomSheet.classList.remove("show");
        document.body.style.overflowY = "auto";
    } 
    const dragStart = (e) => {
        isDragging = true;
        startY = e.pageY || e.touches?.[0].pageY;
        startHeight = parseInt(sheetContent.style.height);
        bottomSheet.classList.add("dragging");
    } 
    const dragging = (e) => {
        if(!isDragging) return;
        const delta = startY - (e.pageY || e.touches?.[0].pageY);
        const newHeight = startHeight + delta / window.innerHeight * 100;
        updateSheetHeight(newHeight);
    } 
    const dragStop = () => {
        isDragging = false;
        bottomSheet.classList.remove("dragging");
        const sheetHeight = parseInt(sheetContent.style.height);
        sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
    } 
    dragIcon.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    dragIcon.addEventListener("touchstart", dragStart);
    document.addEventListener("touchmove", dragging);
    document.addEventListener("touchend", dragStop);

    sheetOverlay.addEventListener("click", hideBottomSheet);
    showModalBtn.addEventListener("click", showBottomSheet);
    
} 

$(document).ready(function() { 
    $('.show-modal').click(function() { 
        $('.show-modal').removeClass('show-modal'+$(this).data('modal'));
        var mox = $(this).data('modal');   
        $(this).addClass('show-modal'+$(this).data('modal'));
        modalx(mox);
    });  
});