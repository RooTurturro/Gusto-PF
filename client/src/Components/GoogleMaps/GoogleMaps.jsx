import React from "react";
import {
	Map,
	InfoWindow,
	Marker,
	GoogleApiWrapper,
	OverlayView
} from "google-maps-react-17";
import Sucursales from "../GoogleMaps/Sucursales";
import rectangle from "../../assets/redRectangle.jpg";
import "./GoogleMaps.css";

const fakeSucursales = [
	{
		id: 1,
		street: "AV. SABATTINI",
		schedule: "De lunes a viernes de 18 a 24 hs",
	},
	{
		id: 2,
		street: "BUENOS AIRES",
		schedule: "De lunes a viernes de 18 a 24 hs",
	},
	{
		id: 3,
		street: "SEBASTIAN VERA",
		schedule: "De lunes a viernes de 18 a 24 hs",
	},
];

// const fireIcon =
// 	" https://e7.pngegg.com/pngimages/613/472/png-clipart-gif-emoji-sticker-fire-emoji-orange-sticker-thumbnail.png";

const svgMarker = {
	path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
	fillColor: "blue",
	strokeWeight: 2,
	rotation: 0,
	scale: 3,

};

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPlace: {
				name: "",
			},
			userPosition: {
				lat: -33.12612705243878,
				lng: -64.35832600693365,
			},
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				userPosition: {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				},
			});
		});
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
		});
	};

	render() {
		return (
			<div className="all">
				{/* <div
					style={{

						position: 'relative'

					}}
				>
					<img src={rectangle} alt="rec" />
					{fakeSucursales.map((e) => {
						return (
							<Sucursales street={e.street} schedule={e.schedule} id={e.id} />
						);
					})}
					<img src={rectangle} alt="rec" />
				</div> */}
				<div>
					{/* <div
						style={{ position: "absolute", zIndex: 9999, marginTop: "34.1rem" }}
					>
						<img src={rectangle} alt='noase' />
					</div> */}
					{/* <div
						style={{
							position: "absolute",
							zIndex: 9999,
							marginTop: "34.1rem",
							marginLeft: "93.4rem",
						}}
					>
						<img src={rectangle} alt='nose' />
					</div> */}
				</div>
				<div
					style={{
						display: "flex",
						marginTop: "37%",
						marginLeft: "16%",

						position: "absolute",
						gap: "5rem",
						zIndex: 9999,
					}}
				>
					{fakeSucursales.map((e) => {
						return (
							<Sucursales street={e.street} schedule={e.schedule} id={e.id} />
						);
					})}
				</div>
				<Map
					google={this.props.google}
					initialCenter={this.state.userPosition}
					zoom={14}

				>
					{this.state.userPosition.lat && (
						<Marker
							onClick={this.onMarkerClick}
							name={"Current location"}
							position={this.state.userPosition}
						/>
					)}
					<Marker
						onClick={this.onMarkerClick}
						name={"Primer local"}
						position={{ lat: -33.119903, lng: -64.351288 }}
						icon={svgMarker}
					/>


					<Marker
						onClick={this.onMarkerClick}
						name={"Segundo local"}
						position={{ lat: -33.136166, lng: -64.353221 }}
						icon={svgMarker}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={"Tercer local"}
						position={{ lat: -33.119978, lng: -64.367714 }}
						icon={svgMarker}
					/>

					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onInfoWindowClose}
					>
						<div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: "AIzaSyCEMM0nTgaea8LYqdVJApE3afO7wk91EI0",
})(MapContainer);
