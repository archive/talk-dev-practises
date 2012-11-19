var view1 = { 
  show: function () { console.log('show view1'); },
  hide: function () { console.log('hide view1'); }
};

var view2  = { 
  show: function () { console.log('show view2'); },
  hide: function () { console.log('hide view2'); }
};

var dialog = { 
  show: function () { console.log('show dialog'); },
  hide: function () { console.log('hide dialog'); }
};

// Since we don't have support for 'new', we must use static 'classes'
var navigator = {
  view:null,
  dialog:null, 
  showView: function(view) {
    navigator.hideDialog();
    if (navigator.view) {
      navigator.view.hide();
    }
    navigator.view = view;
    view.show();    
  },
  showDialog: function(dialog) {
    if (navigator.dialog) {
      navigator.dialog.hide();
    }
    navigator.dialog = dialog;
    dialog.show();
  },
  hideDialog: function() {
    if (navigator.dialog) {
      navigator.dialog.hide();
    }    
  }
};

// inti state (just for the sake of the example)
navigator.view = view1;
navigator.dialog = dialog;

// new state
navigator.showView(view2);