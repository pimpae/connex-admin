function modalx1() {

    const showModalBtn = document.querySelector(".show-modal1");
    const bottomSheet = document.querySelector(".bottom-sheet1");
    const sheetOverlay = bottomSheet.querySelector(".sheet-overlay1");
    const sheetContent = bottomSheet.querySelector(".content1");
    const dragIcon = bottomSheet.querySelector(".drag-icon1");
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
function modalx2() {

    const showModalBtn = document.querySelector(".show-modal2");
    const bottomSheet = document.querySelector(".bottom-sheet2");
    const sheetOverlay = bottomSheet.querySelector(".sheet-overlay2");
    const sheetContent = bottomSheet.querySelector(".content2");
    const dragIcon = bottomSheet.querySelector(".drag-icon2");
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
function modalx3() {

    const showModalBtn = document.querySelector(".show-modal3");
    const bottomSheet = document.querySelector(".bottom-sheet3");
    const sheetOverlay = bottomSheet.querySelector(".sheet-overlay3");
    const sheetContent = bottomSheet.querySelector(".content3");
    const dragIcon = bottomSheet.querySelector(".drag-icon3");
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
function modalx4() {

    const showModalBtn = document.querySelector(".show-modal4");
    const bottomSheet = document.querySelector(".bottom-sheet4");
    const sheetOverlay = bottomSheet.querySelector(".sheet-overlay4");
    const sheetContent = bottomSheet.querySelector(".content4");
    const dragIcon = bottomSheet.querySelector(".drag-icon4");
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
function modalx5() {

    const showModalBtn = document.querySelector(".show-modal5");
    const bottomSheet = document.querySelector(".bottom-sheet5");
    const sheetOverlay = bottomSheet.querySelector(".sheet-overlay5");
    const sheetContent = bottomSheet.querySelector(".content5");
    const dragIcon = bottomSheet.querySelector(".drag-icon5");
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
    $('.show-modal1').click(function() {
        modalx1();
    }); 
    $('.show-modal2').click(function() {
        modalx2();
    }); 
    $('.show-modal3').click(function() {
        modalx3();
    }); 
    $('.show-modal4').click(function() {
        modalx4();
    }); 
    $('.show-modal5').click(function() {
        modalx5();
    }); 
});