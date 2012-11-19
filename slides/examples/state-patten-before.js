var view1Visible = true;
var view2Visible = false;
var dialogVisible = true;

var showView2 = function() {

  if (view1Visible && view2Visible && dialogVisible || !view1Visible && !view2Visible && dialogVisible) {
    console.log('error, this should not be possible');
  } else {
    
    if (dialogVisible) {
      console.log('hideDialog()');
    } 
    if (view1Visible) {
      console.log('hideView1()'); 
    }
    if (view2Visible) {
      console.log('do nothing'); 
    } else {
      console.log('showView2()'); 
    }
      
  }
  
};

showView2();

// What will happen when we add another view?