var React = require('react');
var db = require('../../db');

var packageData = require('../data/fakeData.js').fakeData;

var PackageListing = React.createClass({

	/*getPackageData: function() {
		db.get().collection("packages").find({
			city: "Goa"
			},
			{
				_id: 0,
				city: 0,
				city_code: 0,
				"packages": {
					$slice: 10
				}
			}).toArray(function(err, result) {
				if (err) throw err;
				console.log(result);
				this.state = {
					packageData: result
				}
		})
	},

	getInitialState: function() {
    return this.state = { packageData: [] }
  },

	componentWillMount: function() {
    this.getPackageData();
  },*/

	/*componentDidMount: function() {console.log("mounted!");
		db.get().collection("packages").find({
			city: "Goa"
			},
			{
				_id: 0,
				city: 0,
				city_code: 0,
				"packages": {
					$slice: 10
				}
			}).toArray(function(err, result) {
				if (err) {
					console.log(err)
				}
				console.log("++++++++++++++++++++++++++");
				console.log(result);
				this.setState({packageData: result});
		}.bind(this))
  },*/

	render: function () {
		/*console.log("----------------------");
		console.log(this.state.packageData);
		packageData = this.state.packageData;
		var content = packageData.map(function(key) {
			return <div key={key.id}>
			{key.title}
			<br />
			{key.description}
			<hr />
			</div>
		})*/
		return (
			<div>
				{
					packageData.packages.map(function(key) {
						return (
							<div key={key.id}>
								<div className="clearfix append_bottom8">
									<div className="pull-left pacgng_hdnglft">
										<p className="pack_hedng pack_hedng_ajax append_bottom5"><a href="//holidayz.makemytrip.com/holidays/india/package?id=22410&amp;depCityId=1218&amp;listingClassId=183&amp;intid=Seo_Holiday_View_Details_Click" rel="nofollow">{key.name}</a> | 4 Days 3 Nights</p>
										<p className="pack_subtxt hidden-xs hidden-sm"> Goa (3 Nights)</p>
									</div>
									<ul className="amnts_descrptn pull-right hidden-xs hidden-sm">
										<li><span className="family_icn amnts_one pull-left" title="Family">&nbsp;</span></li>
										<li><span className="weekend_icn amnts_one pull-left" title="Weekend">&nbsp;</span></li>
										<li><span className="group_icn amnts_one pull-left" title="Group">&nbsp;</span></li>
										<li><span className="honeymoon_icn amnts_one pull-left" title="Honeymoon">&nbsp;</span></li>
									</ul>
								</div>
								<div className="clearfix listing_row append_bottom16 shadow_genrator_1 for_grey package-listing-ajax">
								    <div className="listing_top clearfix make_relative">
								        <div className="hotel_image col-sm-4 col-xs-12">
								            <div className="visible-xs">
								                <a href="//holidayz.makemytrip.com/holidays/india/package?id=22410&amp;depCityId=1218&amp;listingClassId=183&amp;intid=Seo_Holiday_View_Details_Click" className="hotel_image_banner make_block" rel="nofollow">
																	<img className="img-responsive listing_image" title="Vivanta By Taj Exterior View" alt="Vivanta By Taj Exterior View" src="https://imgak.mmtcdn.com/hp-images/new/cities/1328/Vivanta-by-Taj-Goa_216x143.jpg" style={{display:"inline-block"}} />
																</a>
								            </div>
								            <div className="connected-carousels hidden-xs">
								                <div className="holi-listing-img make_relative">
								                    <div className="dark-layer">
								                        <div>
																				<span className="play-btn">
																					<div id="images_for_carousel" style={{display: "none"}}>
																						<li>
																							 <img title="Explore the beaches" alt="Explore the beaches" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/Goa011_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="Walk on the edge of paradise" alt="Walk on the edge of paradise" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/beach1_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="Goa" alt="Goa" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/goa5_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="Discover yourself" alt="Discover yourself" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/goa2_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="Fire Show in Goa" alt="Fire Show in Goa" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/goa-party-beach_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="The fascinating beach" alt="The fascinating beach" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/1200x658_Goa4_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="Blessing in disguise" alt="Blessing in disguise" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/goa12_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="Exotic beach umbrellas and rocking chairs on tropical coast in Goa" alt="Exotic beach umbrellas and rocking chairs on tropical coast in Goa" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/Exotic-beach-umbrellas-and-rocking-chairs-on-tropical-coast-in-Goa_704x385.jpg</p>
																						</li>
																						<li>
																							 <img title="Vivanta By Taj Exterior View" alt="Vivanta By Taj Exterior View" src="//imgak.mmtcdn.com/seo/holidays/sites/all/modules/contrib/lazyloader/image_placeholder.gif" />
																							 <p>https://imgak.mmtcdn.com/hp-images/new/cities/1328/Vivanta-by-Taj-Goa_704x385.jpg</p>
																							 <p>active</p>
																						</li>
																			 		</div>
																				</span>
					                            	<br />
																				<span>view gallery</span>
																				</div>
								                    </div><img className="carousel_image_small" title="Vivanta By Taj Exterior View" alt="Vivanta By Taj Exterior View" src="https://imgak.mmtcdn.com/hp-images/new/cities/1328/Vivanta-by-Taj-Goa_216x143.jpg" style={{display: "inline"}} /></div>
								            </div>
								            <p className="clearfix col-xs-12 append_bottom10 hidden-xs marTop20"><a href="//holidayz.makemytrip.com/holidays/india/package?id=22410&amp;depCityId=1218&amp;listingClassId=183" className="pull-left viewphtdtls_link">View photos</a><a href="//holidayz.makemytrip.com/holidays/india/package?id=22410&amp;depCityId=1218&amp;listingClassId=183" className="pull-right viewphtdtls_link">View details</a></p>
								            <div className="clearfix">
								                <h3 className="">Inclusions:</h3>
								                <div className="">
								                    <ul className="inclusions_list for_mobile clearfix">
								                        <li><span className="incls_htl_icon icn_mrgnlspce pull-left" title="Hotel">&nbsp;</span></li>
								                        <li><span className="incls_meal_icon icn_mrgnlspce pull-left" title="Meals">&nbsp;</span></li>
								                        <li><span className="incls_flight_icon icn_mrgnlspce pull-left" title="Flight">&nbsp;</span></li>
								                        <li><span className="incls_transfer_icon icn_mrgnlspce pull-left" title="Transfers">&nbsp;</span></li>
								                    </ul>
								                </div>
								            </div>
								        </div>
								        <div className="col-sm-5 col-xs-12 package_info padL0">
								                <div className="">
																<div id={"itinerary-ajax-block_"+key.id} className="itinerary-ajax-class" data-pid={key.id}>
							                    <div className="itinerary-loading"></div>
								                </div>
								            </div>
								            <table className="hld-package " cellpadding="0" cellspacing="0">
								                <tbody>
																		{key.description ? (
								                    <tr>
								                        <th align="left">ABOUT PACKAGE</th>
								                    </tr>
																		) : null}
																		{key.description ? (
								                    <tr>
								                        <td className="hld-package-txt" data-url="//holidayz.makemytrip.com/holidays/india/package?id=22410&depCityId=1218&listingClassId=183&intid=Seo_Holiday_Itinerary_Know_More_Click">
																				{key.description}
																				</td>
								                    </tr>
																		) : null}
																		{key.tripHighlightList ? (
																			<tr>
								                        <th align="left">KEY HIGHLIGHTS</th>
																			</tr>
																		) : null}
								                    {key.tripHighlightList ? (
																			<tr>
								                        <td>
								                            <div className="other_hotelcontainer">
								                                <ul className="trp-hglt-box">
																										{key.tripHighlightList && key.tripHighlightList.map(function(v) {
																											if (v)
								                                    		return <li className="">{v}</li>
																										})}
								                                </ul>
																								<span>
																									<a className="pull-right show_hide_trip_highlight" href="javascript:void(0)">View more</a>
																								</span>
																						</div>
								                        </td>
								                    	</tr>
																		) : null}
								                </tbody>
								            </table>
								            <h3>Available Hotels</h3>
								            <div className="other_hotels clearfix">
								                <div className="other_hotelcontainer">
								                    <p className="clearfix append_bottom3"><span className="col-xs-4 padL0">Goa</span><span className="col-xs-8 otrhtl_name noPadding"><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="marR8"></span><span><a href="//www.makemytrip.com/hotels/taj_exotica-details-goa.html">Taj Exotica</a></span></span>
								                    </p>
								                    <p className="clearfix append_bottom3"><span className="col-xs-4 padL0">Goa</span><span className="col-xs-8 otrhtl_name noPadding"><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="marR8"></span><span><a href="//www.makemytrip.com/hotels/vivanta_by_taj_holiday_village_goa-details-goa.html">Vivanta By Taj - Hol...</a></span></span>
								                    </p>
								                    <p className="clearfix append_bottom3"><span className="col-xs-4 padL0">Goa</span><span className="col-xs-8 otrhtl_name noPadding"><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="glyphicon glyphicon-star active-star"></span><span className="marR8"></span><span><a href="//www.makemytrip.com/hotels/vivanta_by_taj_fort_aguada_goa-details-goa.html">Vivanta by Taj - FOR...</a></span></span>
								                    </p>
								                </div>
								                <div className="more_otherhotels" style={{display: "none"}}><a href="javascript:void(0);" className="less_otherhtl pull-right viewmore">View less</a></div>
								            </div>
								        </div>
								        <div className="hotel_price col-sm-3 col-xs-4 pull-right">
								            <p className="append_bottom10 clearfix"><a href="//holidayz.makemytrip.com/holidays/india/package?id=22410&amp;depCityId=1218&amp;listingClassId=183&amp;intid=Seo_Holiday_View_Details_Click" className="btn btn-md btn-primary-red" title="Check Price" rel="nofollow">Check Price</a></p>
								            <p></p>
								        </div>
								    </div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
});

/* Module.exports instead of normal dom mounting */
module.exports = PackageListing;
