

module.exports = function(app, passport){
require('./auth')(app, passport);
require('./routes')(app);
};
