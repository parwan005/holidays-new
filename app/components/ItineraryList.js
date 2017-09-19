var React = require('react');

var packageData = require('../data/fakeData.js').fakeData;

var itinerary_arr = packageData.packages[0].itinerary.slice(0, 2);

var ItineraryListApp = React.createClass({
	render: function () {
		return (
      <ul className="itineary_list clearfix">
				{
					itinerary_arr.map(function(value, key) {
            var day_str = `Day ${key+1}: `
  					return (
              <li>
                <a href="//holidayz.makemytrip.com/holidays/india/package?id=22410&amp;depCityId=1218&amp;listingClassId=183#packageItinerary_section" rel="nofollow" className="itineary_list-item">
                  <span className="day_label pull-left">{day_str}</span>
                  <span className="day_info col-xs-10">{value.itineraryName.replace(day_str, '')}</span>
                </a>
              </li>
            )
					})
				}
      </ul>
		)
	}
});

/* Module.exports instead of normal dom mounting */
module.exports = ItineraryListApp;
