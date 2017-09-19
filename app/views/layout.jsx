var React = require('react');
var Header = require('./header');

class Layout extends React.Component {
  render() {
    return (
		<html>
			<head>
			<title>welcome to react</title>
			</head>
			<body>
				<Header></Header>
				<div id="root"></div>
			</body>
		</html>
    );
  }
}

module.exports = Layout;
