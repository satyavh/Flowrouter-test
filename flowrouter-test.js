if (Meteor.isClient) {

  FlowRouter.route('/password/reset/:token', {
    name: 'resetPassword',
    action: function() {
      BlazeLayout.render('hello');
    }
  })

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Meteor.call('findPathOnServer');
      console.log('path on client', FlowRouter.path('resetPassword', { token: '1234'} ) );
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    'findPathOnServer': function(){
      console.log('path on server', FlowRouter.path('resetPassword', { token: '1234'} ) );
    }
  });

}
