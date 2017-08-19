var pageIndex = require('../../views/pageIndex');

module.exports = {
	signup,
	signin,
	home,
	login,
	dashboard,
	buisnessSignup,
	buisnessDashboard,
	buisnessSignin
};

function signup(req, res) {
	res.render(pageIndex.userSignUp.page, {routing: pageIndex});
}

function signin(req, res) {
	res.render(pageIndex.userSignin.page, {routing: pageIndex});
}

function home(req, res, next) {
	res.render(pageIndex.landing.page, {title: 'Express', routing: pageIndex});
}

function login(req, res) {
	res.render(pageIndex.userSignin.page, {routing: pageIndex});
}

function dashboard(req, res) {

	res.render(pageIndex.userDashboard.page, {
		userData: req.user, routing: pageIndex, helpers:
			{
				foo: function (context) {
					if (!context.fashion && !context.music && !context.sports && !context.social && !context.movies) {
						return true;
					} else {
						return false;
					}
				}, bar: function (context) {
				if (!context.age && !context.sex && !context.income && !context.household && !context.zip) {
					return true;
				} else {
					return false;
				}
			}
			}
	});
}


function buisnessSignin(req, res) {
	res.render(pageIndex.bizSignin.page, {routing: pageIndex})
}

function buisnessSignup(req, res) {
	res.render(pageIndex.bizSignup.page, {routing: pageIndex})
}

function buisnessDashboard(req, res) {

	res.render(pageIndex.bizDashboard.page, {bizData: req.user, routing: pageIndex});
}