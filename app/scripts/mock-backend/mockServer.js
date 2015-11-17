angular.module('smartKidsApp').service('MockServer', function MockServer() {

	this.getStatus = function() {
		return [200, {value:"ok"}, {}];
	};

  this.getCategoryItems = function () {
    return [200, [{
      'id': 1,
      'class': 'block blue',
      'header': 'Header1',
      'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'image': 'img/art1.jpg'
    },
      {
        'id': 2,
        'class': 'block yellow',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art1.jpg'
      },
      {
        'id': 3,
        'class': 'block green',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art2.jpg'
      },
      {
        'id': 4,
        'class': 'block purple',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art1.jpg'
      },
      {
        'id': 5,
        'class': 'block red',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art4.jpg'
      },
      {
        'id': 6,
        'class': 'block purple',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art2.jpg'
      },
      {
        'id': 7,
        'class': 'block blue',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art8.jpg'
      },
      {
        'id': 8,
        'class': 'block yellow',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art7.jpg'
      },
      {
        'id': 9,
        'class': 'block green',
        'header': 'Header1',
        'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'image': 'img/art2.jpg'
      }], {}]
  };
});
