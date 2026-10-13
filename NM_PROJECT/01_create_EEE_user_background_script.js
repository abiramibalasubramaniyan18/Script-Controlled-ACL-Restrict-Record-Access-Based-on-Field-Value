// ServiceNow Background Script
// Creates the EEE test user.
//
// Run from: System Definition > Scripts - Background

var user = new GlideRecord('sys_user');
user.addQuery('user_name', 'eee.user');
user.query();

if (user.next()) {
    gs.info('EEE user already exists: ' + user.getDisplayValue());
} else {
    user.initialize();
    user.user_name = 'eee.user';
    user.first_name = 'EEE';
    user.last_name = 'User';
    user.email = 'eeeuser@gmail.com';
    user.u_branch = 'EEE'; // Change this to your actual Branch field if needed
    user.active = true;

    var id = user.insert();
    gs.info('EEE user created. Sys ID: ' + id);
}
